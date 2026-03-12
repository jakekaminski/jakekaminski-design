'use server'

import EmailTemplate from '@/components/misc/email-template'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { headers } from 'next/headers'
import { Resend } from 'resend'

type FormState = {
    message: string
}

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, '60 s'),
})

export async function submitForm(formState: FormState, formData: FormData) {
    // Rate limiting check
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') ?? 'unknown'
    const { success } = await ratelimit.limit(ip)
    if (!success) {
        return { message: 'Too many submissions. Please wait a minute and try again.' }
    }

    const { firstName, lastName, email, phoneNumber, message, website } =
        Object.fromEntries(formData.entries()) as {
            firstName: string
            lastName: string
            email: string
            phoneNumber: string
            message: string
            website: string
        }

    const turnstileToken = formData.get('cf-turnstile-response') as string

    // Check if the form is being submitted by a bot
    if (website) {
        return {
            message: 'Invalid form submission',
        }
    }

    // Verify Turnstile token
    if (!turnstileToken) {
        return { message: 'Security check failed. Please try again.' }
    }

    const verifyResponse = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                secret: process.env.TURNSTILE_SECRET_KEY,
                response: turnstileToken,
            }),
        }
    )
    const verifyData = await verifyResponse.json()
    if (!verifyData.success) {
        return { message: 'Security check failed. Please try again.' }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
        const { data, error } = await resend.emails.send({
            from: 'Jake Kaminski <hello@jakekaminski.dev>',
            to: ['jacobakaminski@gmail.com'],
            subject: 'New message from jakekaminski.design',
            react: EmailTemplate({
                firstName,
                lastName,
                email,
                phoneNumber,
                message,
            }) as React.ReactElement,
        })
    } catch (error) {
        console.log(error)
    }

    return {
        message: `Thanks for your message, ${firstName}! I'll be in touch soon.`,
    }
}

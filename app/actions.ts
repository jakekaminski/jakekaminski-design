'use server'

import EmailTemplate from '@/components/misc/email-template'
import { Resend } from 'resend'

type FormState = {
    message: string
}

export async function submitForm(formState: FormState, formData: FormData) {
    const { firstName, lastName, email, phoneNumber, message, website } =
        Object.fromEntries(formData.entries()) as {
            firstName: string
            lastName: string
            email: string
            phoneNumber: string
            message: string
            website: string
        }

    // Check if the form is being submitted by a bot
    if (website) {
        return {
            message: 'Invalid form submission',
        }
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

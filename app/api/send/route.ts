import { EmailTemplate } from '@/components/misc/email-template'
import { NextRequest } from 'next/server'
import * as React from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    const body = await req.json()

    const { firstName, lastName, email, phoneNumber, message } = body
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
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

        if (error) {
            return Response.json({ error }, { status: 500 })
        }

        return Response.json({ data })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

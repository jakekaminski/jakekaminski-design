'use client'
import { submitForm } from '@/app/actions'
import { Turnstile } from '@marsidev/react-turnstile'
import { useActionState, useState } from 'react'
import { AlertSuccess, SubmitButton } from '../ui'

const inputClass =
    'block w-full rounded border border-slate-700 bg-slate-900/50 px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-colors'

const labelClass = 'block text-xs text-slate-400 mb-2'

export function ContactForm() {
    const [formState, action] = useActionState(submitForm, {
        message: '',
    })
    const [turnstileToken, setTurnstileToken] = useState('')

    return (
        <form
            action={action}
            className="rounded border border-slate-800 p-6 sm:p-8"
            style={{ backgroundColor: '#12111f', fontFamily: 'var(--font-body)' }}
        >
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="firstName" className={labelClass}>
                        First name
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        className={inputClass}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className={labelClass}>
                        Last name
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        className={inputClass}
                        required
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className={labelClass}>
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={inputClass}
                        required
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="phoneNumber" className={labelClass}>
                        Phone number
                    </label>
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        autoComplete="tel"
                        className={inputClass}
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={inputClass}
                        defaultValue=""
                        required
                        placeholder="Describe your quest..."
                    />
                </div>
                {/* Honeypot */}
                <div className="hidden sm:col-span-2">
                    <input
                        id="website"
                        name="website"
                        type="text"
                        autoComplete="off"
                        tabIndex={-1}
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="mt-6">
                <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={(token) => setTurnstileToken(token)}
                />
                <input
                    type="hidden"
                    name="cf-turnstile-response"
                    value={turnstileToken}
                />
            </div>

            <div className="mt-5 flex justify-end">
                <SubmitButton label="🐦 Send Raven" />
            </div>

            {formState?.message && (
                <AlertSuccess message={formState.message} className="mt-5" />
            )}
        </form>
    )
}

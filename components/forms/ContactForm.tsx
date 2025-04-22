'use client'
import { submitForm } from '@/app/actions'
import { useActionState } from 'react'
import { AlertSuccess, SubmitButton } from '../ui'

export function ContactForm() {
    const [formState, action] = useActionState(submitForm, {
        message: '',
    })

    return (
        <form
            action={action}
            className="px-6 pt-10 pb-24 sm:pb-32 lg:px-8 lg:py-0"
        >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                                required
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                                required
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="phoneNumber"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Phone number
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                autoComplete="tel"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                                defaultValue={''}
                                required
                            />
                        </div>
                    </div>
                    <div className="hidden sm:col-span-2">
                        <label
                            htmlFor="website"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Website (leave this blank if you're not a robot 😉)
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="website"
                                name="website"
                                type="text"
                                autoComplete="off"
                                tabIndex={-1}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <SubmitButton label="Send message" />
                </div>
                {formState?.message && (
                    <AlertSuccess
                        message={formState.message}
                        className="mt-6"
                    />
                )}
            </div>
        </form>
    )
}

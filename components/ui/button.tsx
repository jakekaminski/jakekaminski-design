'use client'

import { ArrowPathIcon } from '@heroicons/react/16/solid'
import { useFormStatus } from 'react-dom'

export function SubmitButton({ label }: { label?: string }) {
    const { pending } = useFormStatus()

    return (
        <button
            disabled={pending}
            type="submit"
            className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:pointer-events-none disabled:cursor-progress disabled:bg-gray-400 disabled:text-gray-600"
        >
            {label ?? 'Submit'}
            {pending && <ArrowPathIcon className="size-4 animate-spin" />}
        </button>
    )
}

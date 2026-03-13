'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton({ label }: { label?: string }) {
    const { pending } = useFormStatus()

    return (
        <button
            disabled={pending}
            type="submit"
            className="pixel-border-amber inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded px-5 py-2.5 text-xs text-amber-400 transition-all hover:bg-amber-400/10 disabled:pointer-events-none disabled:cursor-progress disabled:opacity-50"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.5' }}
        >
            {pending ? (
                <>
                    <span>Sending...</span>
                    <svg className="size-3 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                </>
            ) : (
                label ?? 'Submit'
            )}
        </button>
    )
}

'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { FC } from 'react'

export const GoBack: FC = () => {
    const router = useRouter()
    const segments = usePathname().split('/')

    const isNestedPage = segments.length > 2
    if (!isNestedPage) return null
    return (
        <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-amber-400"
            style={{ fontFamily: 'var(--font-body)' }}
        >
            <span>←</span>
            <span>Back to Quest Log</span>
        </button>
    )
}

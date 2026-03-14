import type { FC, ReactNode } from 'react'
import type { BlogMetadata } from '../../utils/types'

export const Meta: FC<BlogMetadata & { children?: ReactNode }> = ({
    tags,
    children,
}) => {
    if (!tags?.length && !children) return null

    return (
        <div className="mb-6 flex flex-wrap items-center gap-2">
            {children}
            {tags?.map((t) => (
                <span
                    key={t}
                    className="rounded-sm border border-slate-700 px-2 py-0.5 text-xs text-slate-400"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem' }}
                >
                    {t}
                </span>
            ))}
        </div>
    )
}

import type { ReactNode } from 'react'

export function Callout({
    children,
    emoji,
    type = 'default',
}: {
    children: ReactNode
    emoji?: string
    type?: 'default' | 'info' | 'warning' | 'error'
}) {
    const borderColor = {
        default: 'border-amber-500/50',
        info: 'border-cyan-500/50',
        warning: 'border-yellow-500/50',
        error: 'border-red-500/50',
    }[type]

    const bgColor = {
        default: 'bg-amber-950/30',
        info: 'bg-cyan-950/30',
        warning: 'bg-yellow-950/30',
        error: 'bg-red-950/30',
    }[type]

    return (
        <div
            className={`my-6 rounded border-l-4 ${borderColor} ${bgColor} px-4 py-3 text-sm text-slate-200`}
        >
            {emoji && <span className="mr-2">{emoji}</span>}
            {children}
        </div>
    )
}

export default Callout

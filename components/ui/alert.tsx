import { ClassName } from '@/utils'

export function AlertSuccess({
    message,
    className,
}: { message?: string } & ClassName) {
    return (
        <div
            className={`rounded border border-cyan-700/50 p-4 ${className ?? ''}`}
            style={{ backgroundColor: 'rgba(6, 182, 212, 0.08)' }}
        >
            <div className="flex items-start gap-3">
                <span className="text-cyan-400">✓</span>
                <p
                    className="text-sm text-cyan-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    {message}
                </p>
            </div>
        </div>
    )
}

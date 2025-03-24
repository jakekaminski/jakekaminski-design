import { ClassName } from '@/utils'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export function AlertSuccess({
    message,
    className,
}: { message?: string } & ClassName) {
    return (
        <div
            className={`rounded-md border border-green-300 bg-green-50 p-4 ${className}`}
        >
            <div className="flex">
                <div className="shrink-0">
                    <CheckCircleIcon
                        aria-hidden="true"
                        className="size-5 text-green-400"
                    />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}

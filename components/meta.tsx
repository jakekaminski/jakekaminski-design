import type { FC, ReactNode } from 'react'
import type { BlogMetadata } from '../utils/types'
import { GoBack } from './go-back'

export const Meta: FC<BlogMetadata & { children: ReactNode }> = ({
    author,
    tags,
    date,
    readingTime,
    children,
}) => {
    const tagsEl = tags?.map((t) => (
        <div
            key={t}
            className="rounded-full border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-sm font-medium text-gray-600"
        >
            {t}
        </div>
    ))

    const readingTimeText = readingTime?.text

    return (
        <div
            className={
                'x:mb-8 x:flex x:gap-3 ' +
                (readingTimeText ? 'x:items-start' : 'x:items-center')
            }
        >
            <div className="x:grow x:dark:text-gray-400 x:text-gray-600">
                <div className="x:flex x:flex-wrap x:items-center x:gap-1">
                    {author}
                    {author && date && ','}

                    {children}

                    {
                        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- fixme
                        (author || date) && (readingTime || tags?.length) && (
                            <span className="x:px-1">•</span>
                        )
                    }
                    {readingTimeText || tagsEl}
                </div>
                {readingTime && (
                    <div className="x:mt-1 x:flex x:flex-wrap x:items-center x:gap-1">
                        {tagsEl}
                    </div>
                )}
            </div>
            <GoBack />
        </div>
    )
}

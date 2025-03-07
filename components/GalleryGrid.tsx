import { ClassName } from '@/utils'
import { HTMLProps } from 'react'

export type GalleryGridProps = {
    images: {
        src: string
        alt: string
        mobileMockup?: boolean
        colSpan?: string
        rowSpan?: string
    }[]
} & ClassName

export function GalleryGrid({ images }: GalleryGridProps) {
    return (
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative ${image.colSpan ?? `lg:row-span-1`} ${image.rowSpan ?? `lg:row-span-1`}`}
                    >
                        <div
                            className={`relative flex flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${image.mobileMockup ? `h-full` : `h-auto`}`}
                        >
                            {image.mobileMockup ? (
                                <div className="@container relative grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                        <img
                                            className="not-prose size-full object-cover object-top"
                                            src={image.src}
                                            alt={image.alt}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <img
                                    className="not-prose size-full object-contain"
                                    src={image.src}
                                    alt={image.alt}
                                />
                            )}
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryGrid

export type GalleryGridProps = {
    images: { src: string; alt: string }[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
    return (
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
                {images.map((image, index) => (
                    <div key={index} className="relative lg:row-span-1">
                        <div className="relative flex h-auto flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <img
                                className="not-prose size-full object-contain"
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryGrid

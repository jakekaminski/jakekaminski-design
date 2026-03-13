export function ImageWithCaption({
    src,
    alt,
    className = '',
    caption,
}: {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
    caption?: string
    lightbox?: boolean
}) {
    return (
        <figure className="size-full">
            <img
                src={src}
                alt={alt}
                className={`w-full rounded-md border border-slate-700 ${className}`}
            />
            {caption && (
                <figcaption className="mt-2 text-center text-sm text-slate-400">
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}

export default ImageWithCaption

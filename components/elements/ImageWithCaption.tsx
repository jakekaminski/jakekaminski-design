import { ImageZoom } from 'nextra/components'

export function ImageWithCaption({
    src,
    alt,
    className = '',
    caption,
    lightbox = true,
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
            {lightbox ? (
                <ImageZoom
                    src={src}
                    alt={alt}
                    className={`rounded-md border border-gray-200 ${className}`}
                />
            ) : (
                <img
                    src={src}
                    alt={alt}
                    className={`rounded-md border border-gray-200 ${className}`}
                />
            )}
            <figcaption className="text-center">{caption}</figcaption>
        </figure>
    )
}

export default ImageWithCaption

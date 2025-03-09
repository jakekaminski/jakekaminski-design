import ImageWithLightbox from './ImageWithLightbox'

export function ImageWithCaption({
    src,
    alt,
    className = '',
    caption,
    lightbox = false,
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
                <ImageWithLightbox src={src} alt={alt} />
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

'use client'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export function ImageWithLightbox({
    src,
    alt,
    className = '',
}: {
    src: string
    alt: string
    className?: string
    caption?: string
}) {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <img
                src={src}
                alt={alt}
                onClick={() => setIsOpen(true)}
                className={`rounded-lg shadow-md ${className}`}
            />
            <Dialog
                as="div"
                className="fixed inset-0 z-50 transition duration-300 ease-out data-[closed]:opacity-0"
                open={isOpen}
                transition
                onClose={() => setIsOpen(false)}
            >
                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                <DialogPanel className="fixed inset-0 flex items-center justify-center">
                    <img
                        src={src}
                        alt={alt}
                        className="max-h-full max-w-full"
                    />
                </DialogPanel>
                <button
                    className="absolute top-10 right-10 z-50 h-6 w-6"
                    onClick={() => setIsOpen(false)}
                >
                    <XCircleIcon
                        className="h-12 w-12 text-white"
                        aria-hidden="true"
                    />
                </button>
            </Dialog>
        </>
    )
}

export default ImageWithLightbox

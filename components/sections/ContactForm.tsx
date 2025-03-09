import {
    EnvelopeIcon,
    HomeModernIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline'

export function ContactForm() {
    return (
        <section
            id="contact"
            className="relative isolate overflow-x-hidden bg-white"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1">
                <div className="relative grid grid-cols-1 gap-6 px-6 pt-24 pb-20 sm:pt-32 lg:static lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-48">
                    <div className="mx-auto flex max-w-xl flex-col justify-center lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10">
                            <svg
                                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                        height={200}
                                        x="100%"
                                        y={-1}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path
                                            d="M130 200V.5M.5 .5H200"
                                            fill="none"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                    fill="white"
                                />
                                <svg
                                    x="100%"
                                    y={-1}
                                    className="overflow-visible fill-gray-50"
                                >
                                    <path
                                        d="M-470.5 0h201v201h-201Z"
                                        strokeWidth={0}
                                    />
                                </svg>
                                <rect
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                                />
                            </svg>
                        </div>
                        <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
                            Get in touch
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Reach out via email or phone and I'll put together a
                            free estimate for your project. I'm always happy to
                            meet up over coffee and talk through your ideas in
                            person!
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <HomeModernIcon
                                        className="h-7 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </dt>
                                <dd>Normal, Illinois</dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon
                                        className="h-7 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </dt>
                                <dd>
                                    <a
                                        className="hover:text-gray-900"
                                        href="tel:+1 (555) 234-5678"
                                    >
                                        +1 (309) 825-7568
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon
                                        className="h-7 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </dt>
                                <dd>
                                    <a
                                        className="hover:text-gray-900"
                                        href="mailto:hello@example.com"
                                    >
                                        jacobakaminski@gmail.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div className="md:rounded-3xl">
                            <div className="relative h-[24rem] rounded-3xl bg-emerald-700">
                                <figure>
                                    <img
                                        src="images/obi-wan.png"
                                        alt="Obi-wan lying in the grass"
                                        className="absolute bottom-0 h-[32rem] w-full rounded-3xl object-cover"
                                    />
                                    <figcaption className="absolute inset-x-0 -bottom-10 text-center text-gray-600">
                                        🐾 Dog tax
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm

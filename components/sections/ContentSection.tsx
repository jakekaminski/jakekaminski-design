export function ContentSection() {
    return (
        <section
            id="how-it-works"
            className="overflow-x-hidden bg-white py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex h-full items-center lg:pr-4">
                        <div className="relative isolate">
                            <img
                                className="mx-auto h-full w-10/12 object-contain"
                                src="images/illustration-macbook.png"
                                alt="Laptop with swear symbol on it"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 -z-10 h-1/2 transform-gpu blur-2xl"
                            >
                                <div
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                    className="relative mx-auto h-[24rem] w-[32rem] bg-gradient-to-tr from-orange-600 to-amber-400 opacity-30"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="text-base leading-7 font-semibold text-emerald-600">
                                How It Works
                            </p>
                            <h1 className="font-heading mt-2 text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
                                Let's face it. Digital marketing isn't what you
                                dreamed it would be.
                            </h1>
                            <div className="max-w-xl">
                                <p className="mt-6">
                                    Maybe you've hacked your website template as
                                    far as it can go, but it still looks like...
                                    well, a <i>template</i>. Maybe you dread
                                    posting on social media, because "National
                                    Cheese Lovers' Day" just isn't cutting it
                                    anymore (pun-intended). And on top of all
                                    that, marketing is starting to eat up{' '}
                                    <i>more and more</i> of your budget each
                                    month.
                                </p>
                                <p className="mt-8">
                                    You sit back and wonder, "Wasn't this thing
                                    supposed to be <b>making me money</b>?"
                                </p>
                                <p className="mt-8">
                                    I've been there. After working in digital
                                    marketing for over five years, I've also
                                    been frustrated by how confusing and
                                    misleading popular platforms can be. That's
                                    why I started working with businesses to
                                    help them make sense of the madness and
                                    build digital marketing that works for them.
                                </p>
                                <p className="mt-8">
                                    And it happens with a few key ingredients:{' '}
                                    <b>
                                        <u className="decoration-emerald-500 decoration-3 underline-offset-3">
                                            proven designs
                                        </u>{' '}
                                        built on{' '}
                                        <u className="decoration-amber-500 decoration-3 underline-offset-3">
                                            painless platforms
                                        </u>{' '}
                                        with{' '}
                                        <u className="decoration-blue-500 decoration-3 underline-offset-3">
                                            cost-effective strategies
                                        </u>
                                        .
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 flex">
                            <a
                                href="#contact"
                                className="text-base leading-7 font-semibold text-emerald-600 hover:text-emerald-700 hover:underline hover:underline-offset-2"
                            >
                                Reach out today to get started{' '}
                                <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentSection

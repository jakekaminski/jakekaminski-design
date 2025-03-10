export function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-emerald-600">
                                About
                            </h2>
                            <p className="font-heading mt-2 text-4xl font-normal tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Super-nerd-turned-marketer
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Though my career started in software, from the
                                moment I launched my first website, I was
                                hooked. Now I help businesses make sense of the
                                mess of digital marketing, from A/B testing to
                                z-indexing.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="#contact"
                                    className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                                >
                                    Work with Jake
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="text-sm/6 font-semibold text-gray-900"
                                >
                                    How It Works{' '}
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:mx-auto md:max-w-2xl lg:mx-0 lg:w-screen">
                        <div className="md:rounded-3xl">
                            <div className="relative h-[24rem] rounded-3xl bg-emerald-700">
                                <img
                                    src="images/headshot-2024.png"
                                    alt="Jake Kaminski"
                                    className="absolute bottom-0 h-[32rem] w-full rounded-3xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection

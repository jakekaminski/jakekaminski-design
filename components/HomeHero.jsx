export default function HomeHero() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-yellow-100/20">
                <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    I help businesses make their websites cost
                                    less and do more.
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Hi! I'm Jake, a web designer & developer
                                    from Central Illinois. I specialize in
                                    making websites that are beautiful,
                                    painless, and cost-effective.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#contact"
                                        className="rounded-md bg-yellow-600 transition-colors px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                                    >
                                        Work with Jake
                                    </a>
                                    {/* <a
                                        href="#projects"
                                        className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-2"
                                    >
                                        My work{' '}
                                        <span aria-hidden="true">→</span>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className="shadow-lg md:rounded-3xl">
                            <div className="bg-yellow-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-yellow-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                    aria-hidden="true"
                                />
                                <img
                                    src="images/headshot.jpg"
                                    alt="Jake Kaminski"
                                    className="w-full h-[48rem] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    )
}

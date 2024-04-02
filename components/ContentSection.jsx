export default function ContentSection() {
    return (
        <section id="about" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-4 h-full">
                        <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-2xl lg:max-w-lg min-h-80 lg:h-full">
                            <img
                                className="absolute inset-0 h-full w-full object-cover brightness-125"
                                src="images/rick-mason-2FaCKyEEtis-unsplash.jpg"
                                alt="legos in assorted colors"
                            />
                            <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
                            <p className="absolute bottom-0 inset-x-0 text-xs text-gray-200 px-4 pb-4">
                                Photo by{' '}
                                <a href="https://unsplash.com/@egnaro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                                    Rick Mason
                                </a>{' '}
                                on{' '}
                                <a href="https://unsplash.com/photos/assorted-color-plastic-toy-lot-2FaCKyEEtis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                                    Unsplash
                                </a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-yellow-600">
                                About
                            </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Let's face it. Your website isn't what you
                                dreamed it would be.
                            </h1>
                            <div className="max-w-xl">
                                <p className="mt-6">
                                    Maybe you've stretched and hacked your
                                    website template as far as it can go, but it
                                    still looks like...a template. Maybe you
                                    find yourself dreading anytime you have to
                                    make an update to your website, because
                                    going into your website's backend is a pain
                                    in <i>your</i> backend. And with rising
                                    costs, your website's starting to eat up
                                    more and more of your budget every month.
                                </p>
                                <p className="mt-8">
                                    You sit back and wonder, "Wasn't this thing
                                    supposed to be <b>making me money</b>?"
                                </p>
                                <p className="mt-8">
                                    I've been there. After working in web
                                    marketing for several years, I've been
                                    frustrated by how confusing and misleading
                                    popular website builders can be. That's why
                                    I started working with businesses to help
                                    them make sense of the madness and build
                                    websites that work for them.
                                </p>
                                <p className="mt-8">
                                    And it happens with a few key ingredients:{' '}
                                    <b>
                                        proven website designs built on painless
                                        backends with cost-effective solutions.
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 flex">
                            <a
                                href="#contact"
                                className="text-base font-semibold leading-7 text-yellow-600 hover:text-yellow-700 hover:underline hover:underline-offset-2"
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

import {
    CurrencyDollarIcon,
    PencilIcon,
    TrophyIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Proven designs',
        description:
            "You don't have reinvent the wheel to have a brand that stands out. I'll work with you to find a design that fits your business and impresses every customer.",
        icon: TrophyIcon,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-200',
    },
    {
        name: 'Painless platforms',
        description:
            "Running digital campaigns should be easy. I'll help you choose platforms that are easy to use and automate.",
        icon: PencilIcon,
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-200',
    },
    {
        name: 'Cost-effective strategies',
        description:
            "Marketing should be adding value to your business, not draining your wallet. I'll help you build your strategy on a budget that works for you.",
        icon: CurrencyDollarIcon,
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-200',
    },
]

export function FeaturesSection() {
    return (
        <section id="services" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base leading-7 font-normal text-emerald-600">
                        Services
                    </h2>
                    <p className="font-heading mt-2 text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
                        Your digital marketing.{' '}
                        <u className="decoration-amber-500 decoration-4 underline-offset-4">
                            Simplified.
                        </u>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Your marketing plan should work for you—not the other
                        way around.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="font-heading flex items-center gap-x-3 text-lg leading-7 font-normal text-gray-900">
                                    <span
                                        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${feature.iconBg ?? 'bg-emerald-600'}`}
                                    >
                                        <feature.icon
                                            className={`h-5 w-5 flex-none ${feature.iconColor ?? 'text-emerald-600'}`}
                                            aria-hidden="true"
                                        />
                                    </span>
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">
                                        {feature.description}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection

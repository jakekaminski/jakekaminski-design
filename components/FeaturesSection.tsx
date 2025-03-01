import {
    CurrencyDollarIcon,
    PencilIcon,
    TrophyIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Beautiful proven designs',
        description:
            "You don't have reinvent the wheel to have a website that stands out. I'll work with you to find a design that fits your brand and impresses every visitor.",
        icon: TrophyIcon,
    },
    {
        name: 'Pain-free backends',
        description:
            "Updating your website's content and adding new features should be easy. I'll help you choose a website admin that's easy to update and maintain.",
        icon: PencilIcon,
    },
    {
        name: 'Cost-effective solutions',
        description:
            "Above all else, your website should be adding value to your business, not draining your wallet. I'll help you build your website on a budget that works for you.",
        icon: CurrencyDollarIcon,
    },
]

export default function FeaturesSection() {
    return (
        <section id="services" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-normal leading-7 text-emerald-600">
                        Services
                    </h2>
                    <p className="font-heading mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Your website. Simplified.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Your website should work for you—not the other way
                        around.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 font-heading text-lg font-normal leading-7 text-gray-900">
                                    <feature.icon
                                        className="h-5 w-5 flex-none text-emerald-600"
                                        aria-hidden="true"
                                    />
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

const pillars = [
    {
        icon: '⚔️',
        label: 'Clear scope',
        description: 'defined before a single line of code is written',
        color: '#f59e0b',
        barWidth: '100%',
    },
    {
        icon: '🛡️',
        label: 'Battle-tested architecture',
        description: "that won't crumble under load",
        color: '#6c3483',
        barWidth: '80%',
    },
    {
        icon: '🧪',
        label: 'Iterative delivery',
        description: 'so you see progress every sprint, not just at the end',
        color: '#06b6d4',
        barWidth: '90%',
    },
]

export function ContentSection() {
    return (
        <section
            id="approach"
            className="overflow-x-hidden py-24 sm:py-32"
            style={{ backgroundColor: '#0f0e1a' }}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-12 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                    {/* Stat bars / pillars */}
                    <div className="space-y-6">
                        {pillars.map((pillar) => (
                            <div
                                key={pillar.label}
                                className="rounded border border-slate-800 p-5"
                                style={{ backgroundColor: '#12111f' }}
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="text-xl">{pillar.icon}</span>
                                    <div>
                                        <p
                                            className="leading-loose"
                                            style={{
                                                fontFamily: 'var(--font-heading)',
                                                fontSize: '0.65rem',
                                                color: pillar.color,
                                            }}
                                        >
                                            {pillar.label}
                                        </p>
                                        <p
                                            className="text-slate-400"
                                            style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
                                        >
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                                {/* Pixel progress bar */}
                                <div className="h-2 rounded-sm bg-slate-800">
                                    <div
                                        className="h-2 rounded-sm"
                                        style={{
                                            width: pillar.barWidth,
                                            backgroundColor: pillar.color,
                                            boxShadow: `0 0 8px ${pillar.color}80`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Text column */}
                    <div>
                        <p
                            className="mb-3 text-xs uppercase tracking-widest text-purple-400"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Battle Plan
                        </p>
                        <h2
                            className="mb-6 leading-loose text-slate-100"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
                            }}
                        >
                            Let&apos;s be honest. Most web projects don&apos;t fail because of bad code.
                        </h2>
                        <div
                            className="space-y-4 leading-relaxed text-slate-400"
                            style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                        >
                            <p>
                                They fail because nobody agreed on what to build. Requirements
                                were a napkin sketch. The tech stack was chosen by hype, not fit.
                                And by month three, everyone&apos;s lost in the fog of war.
                            </p>
                            <p>
                                I&apos;ve been in those dungeons. After years of building web apps
                                across agtech, SaaS, and startups, I&apos;ve learned that the real
                                magic isn&apos;t in the framework — it&apos;s in the process.
                            </p>
                        </div>
                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="text-xs text-amber-400 transition-colors hover:text-amber-300 hover:underline"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                📜 Ready to start? Reach out today →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentSection

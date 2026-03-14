const skills = [
    {
        emoji: '⚔️',
        name: 'Frontend Mastery',
        description:
            'From pixel-perfect UIs to complex interactive experiences, I build frontends that are fast, accessible, and a joy to use. React, Next.js, TypeScript, Tailwind — the whole arsenal.',
        borderColor: 'border-amber-600/40',
        glowColor: 'rgba(245, 158, 11, 0.08)',
        accentColor: '#f59e0b',
        progress: 95,
        progressLabel: 'ATK',
    },
    {
        emoji: '🛡️',
        name: 'Full-Stack Architecture',
        description:
            "Need an API? A database? Auth? I architect full-stack applications with clean separation of concerns, so your app scales without turning into a dungeon crawler.",
        borderColor: 'border-purple-600/40',
        glowColor: 'rgba(108, 52, 131, 0.1)',
        accentColor: '#6c3483',
        progress: 88,
        progressLabel: 'DEF',
    },
    {
        emoji: '🧪',
        name: 'Design Systems & Components',
        description:
            'I create reusable component libraries and design systems that keep your UI consistent and your team productive. Figma to code, every time.',
        borderColor: 'border-cyan-600/40',
        glowColor: 'rgba(6, 182, 212, 0.08)',
        accentColor: '#06b6d4',
        progress: 85,
        progressLabel: 'MAG',
    },
]

export function FeaturesSection() {
    return (
        <section id="services" className="py-24 sm:py-32" style={{ backgroundColor: '#0a0a14' }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
                    <p
                        className="mb-3 text-xs uppercase tracking-widest text-purple-400"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Skill Tree
                    </p>
                    <h2
                        className="mb-4 leading-loose text-slate-100"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(0.85rem, 2vw, 1.2rem)',
                        }}
                    >
                        Your web project.{' '}
                        <span
                            className="underline decoration-amber-500 decoration-4 underline-offset-4"
                        >
                            Fully equipped.
                        </span>
                    </h2>
                    <p
                        className="text-slate-400"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                    >
                        Every adventurer needs the right gear. Here&apos;s what I bring to the party.
                    </p>
                </div>

                {/* Skill cards */}
                <div className="grid max-w-xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className={`relative rounded border ${skill.borderColor} p-6 transition-all hover:-translate-y-1`}
                            style={{ backgroundColor: skill.glowColor, background: `linear-gradient(135deg, ${skill.glowColor}, #12111f)` }}
                        >
                            {/* Pixel corner accent */}
                            <div
                                className="absolute top-0 left-0 h-2 w-2"
                                style={{ backgroundColor: skill.accentColor }}
                            />

                            <div
                                className="mb-4 text-3xl"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {skill.emoji}
                            </div>
                            <h3
                                className="mb-3 leading-loose"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '0.7rem',
                                    color: skill.accentColor,
                                }}
                            >
                                {skill.name}
                            </h3>
                            <p
                                className="mb-5 leading-relaxed text-slate-400"
                                style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}
                            >
                                {skill.description}
                            </p>

                            {/* Game progress bar */}
                            <div>
                                <div className="mb-1.5 flex items-center justify-between">
                                    <span
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '0.5rem',
                                            color: skill.accentColor,
                                            lineHeight: '1.8',
                                        }}
                                    >
                                        {skill.progressLabel}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '0.5rem',
                                            color: skill.accentColor,
                                            lineHeight: '1.8',
                                        }}
                                    >
                                        {skill.progress}/100
                                    </span>
                                </div>
                                <div className="h-3 rounded-sm bg-slate-800/80" style={{ border: `1px solid ${skill.accentColor}40` }}>
                                    <div
                                        className="h-full rounded-sm transition-all"
                                        style={{
                                            width: `${skill.progress}%`,
                                            backgroundColor: skill.accentColor,
                                            boxShadow: `0 0 8px ${skill.accentColor}80`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection

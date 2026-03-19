export function HomeHero() {
    return (
        <section
            id="hero"
            className="relative isolate overflow-hidden"
            style={{ backgroundColor: '#0a0a14', minHeight: '90vh' }}
        >
            {/* Background pixel grid pattern */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(74, 26, 138, 0.07) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(74, 26, 138, 0.07) 1px, transparent 1px)
                    `,
                    backgroundSize: '32px 32px',
                }}
            />
            {/* Glow orbs */}
            <div
                aria-hidden="true"
                className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(ellipse, rgba(74,26,138,0.25) 0%, transparent 70%)' }}
            />
            <div
                aria-hidden="true"
                className="absolute top-1/3 right-1/4 -z-10 h-80 w-80 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)' }}
            />

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 pb-12 text-center lg:px-8 lg:pt-40 lg:pb-16">
                {/* Badge */}
                <div
                    className="mb-8 inline-flex items-center gap-2 rounded border border-purple-700/40 px-4 py-2 text-purple-300"
                    style={{
                        backgroundColor: 'rgba(74, 26, 138, 0.2)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                    }}
                >
                    <span>⚔️</span>
                    <span>Level 10 Web Developer — Central Illinois</span>
                </div>

                {/* Headline */}
                <h1
                    className="mb-8 max-w-3xl text-balance leading-[1.15] text-amber-400"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1rem, 3.5vw, 2.75rem)',
                    }}
                >
                    I forge web apps from raw code and battle-tested frameworks.
                </h1>

                {/* Subtext */}
                <p
                    className="mb-12 max-w-xl text-balance leading-relaxed text-slate-400"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
                >
                    I&apos;m Jake — a full-stack developer from the Midwest. I specialize
                    in building fast, beautiful web experiences with React, Next.js, and
                    TypeScript. Every project is a new quest.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="pixel-border-amber inline-flex items-center gap-2 rounded px-6 py-3 text-xs text-amber-400 transition-all hover:bg-amber-400/10"
                        style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.5' }}
                    >
                        🗡️ Start a Quest
                    </a>
                    <a
                        href="#projects"
                        className="pixel-border inline-flex items-center gap-2 rounded px-6 py-3 text-xs text-slate-300 hover:text-slate-100"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}
                    >
                        📜 View Quest Log
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="mt-24 flex flex-col items-center gap-2 text-slate-600">
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem' }}>scroll</span>
                    <div className="h-8 w-px bg-gradient-to-b from-slate-600 to-transparent" />
                </div>
            </div>
        </section>
    )
}

export default HomeHero

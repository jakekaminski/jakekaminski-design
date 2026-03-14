export function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden py-24 sm:py-32"
            style={{ backgroundColor: '#0f0e1a' }}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                    {/* Text column */}
                    <div className="flex flex-col justify-center">
                        <p
                            className="mb-3 text-xs text-purple-400 uppercase tracking-widest"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Origin Story
                        </p>
                        <h2
                            className="mb-6 leading-loose text-slate-100"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(0.85rem, 2vw, 1.2rem)',
                            }}
                        >
                            Developer by trade.{' '}
                            <span className="text-amber-400">Code wizard</span>{' '}
                            by calling.
                        </h2>
                        <div
                            className="space-y-4 leading-relaxed text-slate-400"
                            style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                        >
                            <p>
                                My journey started in software — building apps, wrangling APIs,
                                and debugging the cursed depths of legacy codebases. Along the
                                way I picked up design skills and a knack for turning messy
                                requirements into clean, maintainable code.
                            </p>
                            <p>
                                Now I help teams and businesses bring their ideas to life on the
                                web. Whether it&apos;s a greenfield app or a rescue mission on a
                                crumbling codebase, I bring the right tools and a battle-tested
                                process to every project.
                            </p>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href="#contact"
                                className="pixel-border-amber inline-flex items-center gap-2 rounded px-5 py-2.5 text-xs text-amber-400 transition-all hover:bg-amber-400/10"
                                style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.5' }}
                            >
                                🗡️ Start a Quest
                            </a>
                            <a
                                href="#approach"
                                className="text-xs text-slate-400 transition-colors hover:text-cyan-400"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                📜 How I Work →
                            </a>
                        </div>
                    </div>

                    {/* Image column */}
                    <div className="flex items-center justify-center">
                        <div
                            className="relative h-80 w-64 rounded pixel-border"
                            style={{ backgroundColor: '#1e0a3c' }}
                        >
                            <img
                                src="/images/headshot-2024.png"
                                alt="Jake Kaminski"
                                className="absolute bottom-0 h-full w-full rounded object-cover object-top"
                            />
                            {/* Pixel corner accents */}
                            <div
                                className="absolute -top-1 -left-1 h-3 w-3"
                                style={{ backgroundColor: '#f59e0b' }}
                            />
                            <div
                                className="absolute -top-1 -right-1 h-3 w-3"
                                style={{ backgroundColor: '#f59e0b' }}
                            />
                            <div
                                className="absolute -bottom-1 -left-1 h-3 w-3"
                                style={{ backgroundColor: '#f59e0b' }}
                            />
                            <div
                                className="absolute -bottom-1 -right-1 h-3 w-3"
                                style={{ backgroundColor: '#f59e0b' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection

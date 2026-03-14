export function DialogueSection() {
    return (
        <section
            aria-label="NPC Dialogue"
            className="pt-8 pb-12 lg:pt-10 lg:pb-20"
            style={{ backgroundColor: '#0a0a14' }}
        >
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                {/* NPC dialogue box */}
                <div
                    className="relative rounded pixel-border p-6"
                    style={{ backgroundColor: '#0f0e1a' }}
                >
                    {/* Pixel corner accents */}
                    <div className="absolute top-0 left-0 h-3 w-3" style={{ backgroundColor: '#f59e0b' }} />
                    <div className="absolute top-0 right-0 h-3 w-3" style={{ backgroundColor: '#f59e0b' }} />
                    <div className="absolute bottom-0 left-0 h-3 w-3" style={{ backgroundColor: '#f59e0b' }} />
                    <div className="absolute bottom-0 right-0 h-3 w-3" style={{ backgroundColor: '#f59e0b' }} />

                    <div className="flex items-start gap-5">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <div
                                className="relative h-16 w-16 overflow-hidden rounded"
                                style={{
                                    border: '2px solid #f59e0b',
                                    backgroundColor: '#1e0a3c',
                                }}
                            >
                                <img
                                    src="/images/headshot-2024.png"
                                    alt="Jake Kaminski"
                                    className="h-full w-full object-cover object-top"
                                />
                                {/* Pixel overlay corner */}
                                <div className="absolute bottom-0 left-0 h-2 w-2" style={{ backgroundColor: '#f59e0b' }} />
                                <div className="absolute bottom-0 right-0 h-2 w-2" style={{ backgroundColor: '#f59e0b' }} />
                            </div>
                            <p
                                className="mt-1 text-center text-amber-400"
                                style={{ fontFamily: 'var(--font-heading)', fontSize: '0.45rem', lineHeight: '1.6' }}
                            >
                                JAKE
                            </p>
                        </div>

                        {/* Dialogue text */}
                        <div className="flex-1">
                            <p
                                className="mb-1 text-purple-400"
                                style={{ fontFamily: 'var(--font-heading)', fontSize: '0.5rem', lineHeight: '1.8' }}
                            >
                                Jake Kaminski · Full-Stack Developer
                            </p>
                            <p
                                className="leading-relaxed text-slate-300"
                                style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}
                            >
                                &ldquo;Ah, a traveler! Welcome to my corner of the web.
                                I&apos;ve been crafting digital realms since 2014 — slaying
                                bugs, building empires from raw APIs, and turning vague
                                requirements into polished products. My specialties are
                                React, Next.js, and TypeScript. If you have a quest, I
                                have the code.&rdquo;
                            </p>
                            <p
                                className="mt-3 animate-pulse text-amber-400"
                                style={{ fontFamily: 'var(--font-heading)', fontSize: '0.5rem' }}
                            >
                                ▼ Scroll to continue
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DialogueSection

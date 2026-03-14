import { ContactForm } from '../forms'

export function ContactSection() {
    return (
        <section
            id="contact"
            className="relative isolate overflow-x-hidden py-24 sm:py-32"
            style={{ backgroundColor: '#0f0e1a' }}
        >
            {/* Background grid */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(74, 26, 138, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(74, 26, 138, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

                    {/* Info column */}
                    <div className="flex flex-col justify-center">
                        <p
                            className="mb-3 text-xs uppercase tracking-widest text-purple-400"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Start a Quest
                        </p>
                        <h2
                            className="mb-6 leading-loose text-slate-100"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(0.85rem, 2vw, 1.2rem)',
                            }}
                        >
                            Got a Project?
                        </h2>
                        <p
                            className="mb-10 leading-relaxed text-slate-400"
                            style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                        >
                            Got a project in mind? Drop me a message and I&apos;ll scope it out —
                            free of charge. I&apos;m always happy to meet up over coffee and
                            talk through your ideas.
                        </p>

                        <dl className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">🏰</span>
                                <dd
                                    className="text-slate-400"
                                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}
                                >
                                    Normal, Illinois
                                </dd>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-lg">📞</span>
                                <dd style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>
                                    <a
                                        href="tel:+13098257568"
                                        className="text-slate-400 transition-colors hover:text-cyan-400"
                                    >
                                        +1 (309) 825-7568
                                    </a>
                                </dd>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-lg">✉️</span>
                                <dd style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>
                                    <a
                                        href="mailto:jacobakaminski@gmail.com"
                                        className="text-slate-400 transition-colors hover:text-cyan-400"
                                    >
                                        jacobakaminski@gmail.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    {/* Form column */}
                    <div className="w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

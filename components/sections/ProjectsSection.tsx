import { getProjects } from '@/app/projects/getProjects'

export async function ProjectsSection() {
    const posts = await getProjects()

    return (
        <section id="projects" className="py-24 sm:py-32" style={{ backgroundColor: '#0a0a14' }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
                    <p
                        className="mb-3 text-xs uppercase tracking-widest text-purple-400"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Quest Log
                    </p>
                    <h2
                        className="leading-loose text-slate-100"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(0.85rem, 2vw, 1.2rem)',
                        }}
                    >
                        Recent Quests
                    </h2>
                </div>

                {/* Project grid */}
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((project) => (
                        <article
                            key={project.route}
                            className="group relative isolate flex flex-col overflow-hidden rounded border border-slate-800 transition-all hover:-translate-y-1 hover:border-amber-600/40"
                            style={{ backgroundColor: '#12111f' }}
                        >
                            {/* Thumbnail */}
                            {project.frontMatter.thumbnail && (
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        alt={project.title}
                                        src={project.frontMatter.thumbnail}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                </div>
                            )}

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-5">
                                <div className="mb-2 flex items-center gap-2">
                                    <time
                                        dateTime={project.frontMatter.date}
                                        className="text-xs text-slate-500"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {new Date(project.frontMatter.date).toLocaleDateString(
                                            undefined,
                                            { dateStyle: 'medium' }
                                        )}
                                    </time>
                                    {/* Quest status badge */}
                                    {project.frontMatter.liveUrl ? (
                                        <span
                                            className="rounded-sm px-1.5 py-0.5"
                                            style={{
                                                fontFamily: 'var(--font-heading)',
                                                fontSize: '0.5rem',
                                                lineHeight: '1.8',
                                                backgroundColor: 'rgba(6, 182, 212, 0.12)',
                                                color: '#06b6d4',
                                                border: '1px solid rgba(6, 182, 212, 0.3)',
                                            }}
                                        >
                                            ● ACTIVE
                                        </span>
                                    ) : (
                                        <span
                                            className="rounded-sm px-1.5 py-0.5"
                                            style={{
                                                fontFamily: 'var(--font-heading)',
                                                fontSize: '0.5rem',
                                                lineHeight: '1.8',
                                                backgroundColor: 'rgba(74, 26, 138, 0.15)',
                                                color: '#9490b0',
                                                border: '1px solid rgba(74, 26, 138, 0.3)',
                                            }}
                                        >
                                            ✓ DONE
                                        </span>
                                    )}
                                    {project.frontMatter.featured && (
                                        <span
                                            className="rounded-sm px-1.5 py-0.5 text-xs"
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.6rem',
                                                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                                                color: '#f59e0b',
                                                border: '1px solid rgba(245, 158, 11, 0.3)',
                                            }}
                                        >
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <h3
                                    className="mb-2 text-slate-100 transition-colors group-hover:text-amber-400"
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '0.7rem',
                                        lineHeight: '1.8',
                                    }}
                                >
                                    <a href={project.route}>
                                        <span className="absolute inset-0" />
                                        {project.title}
                                    </a>
                                </h3>

                                {project.frontMatter.description && (
                                    <p
                                        className="mb-4 flex-1 text-slate-400"
                                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', lineHeight: '1.7' }}
                                    >
                                        {project.frontMatter.description}
                                    </p>
                                )}

                                {/* Tags */}
                                <div className="mt-auto flex flex-wrap gap-1.5">
                                    {(project.frontMatter.tags ?? []).map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="relative z-10 rounded-sm px-2 py-0.5 text-xs"
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.65rem',
                                                backgroundColor: 'rgba(74, 26, 138, 0.25)',
                                                color: '#9490b0',
                                                border: '1px solid rgba(74, 26, 138, 0.4)',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection

import { getProjects, getTags } from '@/app/projects/getProjects'
export async function ProjectsSection() {
    const tags = await getTags()
    const posts = await getProjects()

    const allTags = Object.create(null)

    for (const tag of tags) {
        allTags[tag] ??= 0
        allTags[tag] += 1
    }
    return (
        <section id="projects" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-heading text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Projects
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600"></p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((project) => (
                        <article
                            key={project.route}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-100 px-8 pt-80 pb-8 shadow transition-all hover:-translate-2 hover:shadow-lg sm:pt-48 lg:pt-80"
                        >
                            <img
                                alt=""
                                src={project.frontMatter.thumbnail}
                                className="absolute inset-0 -z-10 size-full object-cover"
                            />
                            <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-100 via-gray-100/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-100/10 ring-inset" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-700">
                                <time
                                    dateTime={new Date(
                                        project.frontMatter.timestamp
                                    ).toLocaleDateString()}
                                    className="mr-8"
                                >
                                    {new Date(
                                        project.frontMatter.timestamp
                                    ).toLocaleDateString(undefined, {
                                        dateStyle: 'medium',
                                        timeStyle: undefined,
                                    })}
                                </time>
                            </div>
                            <h3 className="font-heading mt-3 text-xl/8 text-gray-950">
                                <a href={project.route}>
                                    <span className="absolute inset-0" />
                                    {project.title}
                                </a>
                            </h3>
                            <div className="mt-2 flex flex-wrap gap-1">
                                {project.frontMatter.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="relative z-10 rounded-full border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection

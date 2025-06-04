import { normalizePages } from 'nextra/normalize-pages'
import { getPageMap } from 'nextra/page-map'

export async function getProjects() {
    const { directories } = normalizePages({
        list: await getPageMap('/projects'),
        route: '/projects',
    })
    const projects = directories
        .filter((project) => project.name !== 'index')
        .toSorted((a, b) => {
            if (!!a.frontMatter.featured && !b.frontMatter.featured) return -1
            if (!a.frontMatter.featured && !!b.frontMatter.featured) return 1
            // If both are featured or both are not, sort by date descending
            return +new Date(b.frontMatter.date) - +new Date(a.frontMatter.date)
        })

    return projects
}

export async function getTags() {
    const projects = await getProjects()
    const tags = projects.flatMap((project) => project.frontMatter.tags)
    return tags
}

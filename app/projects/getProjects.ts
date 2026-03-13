import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export type ProjectFrontMatter = {
    title: string
    description?: string
    thumbnail?: string
    tags: string[]
    date: string
    featured?: boolean
    liveUrl?: string
    github?: string
}

export type Project = {
    route: string
    name: string
    title: string
    frontMatter: ProjectFrontMatter
}

export async function getProjects(): Promise<Project[]> {
    const projectsDir = path.join(process.cwd(), 'app/projects')
    const entries = fs.readdirSync(projectsDir)

    const projects: Project[] = []

    for (const entry of entries) {
        const entryPath = path.join(projectsDir, entry)
        if (!fs.statSync(entryPath).isDirectory()) continue

        const mdxPath = path.join(entryPath, 'page.mdx')
        if (!fs.existsSync(mdxPath)) continue

        const fileContent = fs.readFileSync(mdxPath, 'utf-8')
        const { data } = matter(fileContent)

        projects.push({
            route: `/projects/${entry}`,
            name: entry,
            title: data.title ?? entry,
            frontMatter: data as ProjectFrontMatter,
        })
    }

    return projects.sort((a, b) => {
        if (a.frontMatter.featured && !b.frontMatter.featured) return -1
        if (!a.frontMatter.featured && b.frontMatter.featured) return 1
        return (
            +new Date(b.frontMatter.date) - +new Date(a.frontMatter.date)
        )
    })
}

export async function getTags(): Promise<string[]> {
    const projects = await getProjects()
    return projects.flatMap((p) => p.frontMatter.tags ?? [])
}

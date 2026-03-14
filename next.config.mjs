import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    eslint: {
        ignoreDuringBuilds: true,
    },
}

export default withMDX(nextConfig)

import { Footer, Layout } from 'nextra-theme-blog'
import 'nextra-theme-blog/style.css'
import { PropsWithChildren } from 'react'

export const metadata = {
    title: 'Projects',
}

export default async function ProjectPageLayout({
    children,
}: PropsWithChildren) {
    return (
        <>
            <Layout nextThemes={{ forcedTheme: 'light' }}>
                {children}
                <Footer>{new Date().getFullYear()} © Jake Kaminski.</Footer>
            </Layout>
        </>
    )
}

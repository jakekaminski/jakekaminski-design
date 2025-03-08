import { Footer, Layout } from 'nextra-theme-blog'
import 'nextra-theme-blog/style.css'
import { Head } from 'nextra/components'
import { PropsWithChildren } from 'react'

export const metadata = {
    title: 'Projects',
}

export default async function ProjectPageLayout({
    children,
}: PropsWithChildren) {
    return (
        <>
            <Head backgroundColor={{ dark: '#ffffff', light: '#ffffff' }} />
            <Layout>
                {children}
                <Footer>{new Date().getFullYear()} © Jake Kaminski.</Footer>
            </Layout>
        </>
    )
}

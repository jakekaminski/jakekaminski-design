import { Footer, Layout } from 'nextra-theme-blog'
import 'nextra-theme-blog/style.css'
import { PropsWithChildren } from 'react'

export const metadata = {
    title: 'Projects',
}

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <Layout>
            {children}
            <Footer>{new Date().getFullYear()} © Jake Kaminski.</Footer>
        </Layout>
    )
}

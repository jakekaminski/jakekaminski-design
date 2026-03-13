import { GoBack } from '@/components'
import { PropsWithChildren } from 'react'

export const metadata = {
    title: 'Projects — Jake Kaminski',
}

export default function ProjectPageLayout({ children }: PropsWithChildren) {
    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: '#0a0a14' }}
        >
            <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
                <GoBack />
                <article className="project-prose mt-8">{children}</article>
            </div>
            <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500" style={{ fontFamily: 'var(--font-body)' }}>
                {new Date().getFullYear()} © Jake Kaminski
            </footer>
        </div>
    )
}

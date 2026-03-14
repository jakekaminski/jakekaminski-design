import { Header } from '@/components'
import { JetBrains_Mono, Press_Start_2P } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './app.css'

export const metadata = {
    title: 'Jake Kaminski • Web Developer & Code Wizard',
    description:
        "Full-stack web developer from the Midwest. I craft web experiences with Next.js, React, and TypeScript — one quest at a time.",
    image: '/images/headshot.jpg',
}

export const pressStart2P = Press_Start_2P({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: '400',
    display: 'swap',
})

export const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-body',
    weight: ['300', '400', '500', '700'],
    display: 'swap',
})

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html
            lang="en"
            className={`${pressStart2P.variable} ${jetBrainsMono.variable} font-body scroll-smooth`}
        >
            <body
                className="max-w-screen overflow-x-hidden"
                style={{ backgroundColor: '#0a0a14', color: '#e8e6f0' }}
            >
                <Header />
                {children}
            </body>
        </html>
    )
}

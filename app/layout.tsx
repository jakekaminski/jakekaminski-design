import { Header } from '@/components'
import { Karla, Young_Serif } from 'next/font/google'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { PropsWithChildren } from 'react'
import './app.css'

export const metadata = {
    title: 'Jake Kaminski • Website Marketing',
    description:
        "I'm a web designer & developer from Central Illinois. I specialize in making websites that are beautiful, painless, and cost-effective.",
    image: 'public/images/headshot.jpg',
}

export const youngSerif = Young_Serif({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: '400',
})

export const karla = Karla({
    subsets: ['latin'],
    variable: '--font-body',
    weight: ['200', '400', '600', '800'],
})

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${youngSerif.variable} ${karla.variable} font-body scroll-smooth`}
        >
            <Head backgroundColor={{ dark: '#ffffff', light: '#ffffff' }} />
            <body className="max-w-screen overflow-x-hidden">
                {' '}
                <Header pageMap={await getPageMap()} />
                {children}
            </body>
        </html>
    )
}

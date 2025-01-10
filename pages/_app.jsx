import { Karla, Young_Serif } from 'next/font/google'
import 'nextra-theme-blog/style.css'
import React from 'react'

export const headingFont = Young_Serif({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: '400',
})

export const bodyFont = Karla({
    subsets: ['latin'],
    variable: '--font-body',
    weight: ['200', '400', '600', '800'],
})

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
    return (
        <main
            className={`${headingFont.variable} ${bodyFont.variable} font-body`}
        >
            <Component {...pageProps} />
        </main>
    )
}

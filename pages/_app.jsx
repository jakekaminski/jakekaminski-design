import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import 'nextra-theme-blog/style.css'
import React from 'react'

export const headingFont = localFont({
    src: '../public/fonts/greenpark-bold-webfont.woff2',
    variable: '--font-heading',
})

export const bodyFont = Inter({
    subsets: ['latin'],
    variable: '--font-body',
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

import { Head, Html, Main, NextScript } from 'next/document'
import { bodyFont, headingFont } from './_app'

export default function Document() {
    const meta = {
        title: 'Jake Kaminski • Website Marketing',
        description:
            "I'm a web designer & developer from Central Illinois. I specialize in making websites that are beautiful, painless, and cost-effective.",
        image: 'public/images/headshot.jpg',
    }

    return (
        <Html
            lang="en"
            class={`${bodyFont.variable} ${headingFont.variable} scroll-smooth font-body`}
        >
            <Head>
                <meta name="robots" content="follow, index" />
                <meta name="description" content={meta.description} />
                <meta property="og:site_name" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@yourname" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

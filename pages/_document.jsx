import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    const meta = {
        title: 'Jake Kaminski • Website Marketing',
        description:
            "I'm a web designer & developer from Central Illinois that helps businesses make their websites cost less and do more.",
        image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png',
    }

    return (
        <Html lang="en" class="scroll-smooth">
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
import {
    ContactForm,
    ContentSection,
    FeaturesSection,
    HomeHero,
    ProjectsSection,
} from '@/components'
import Head from 'next/head'

export default function HomePage() {
    return (
        <>
            <Head>
                <title>
                    Jake Kaminski • Website Marketing in Central Illinois
                </title>
            </Head>
            <>
                <HomeHero />
                <ProjectsSection />
                <ContentSection />
                <FeaturesSection />
                <ContactForm />
            </>
        </>
    )
}

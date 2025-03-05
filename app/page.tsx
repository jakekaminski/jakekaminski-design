import ProjectsSection from '@/components/ProjectsSection'
import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import ContentSection from '../components/ContentSection'
import FeaturesSection from '../components/FeaturesSection'
import HomeHero from '../components/HomeHero'
import { Header } from '../components/layout'

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

import ContactForm from '../components/ContactForm'
import ContentSection from '../components/ContentSection'
import FeaturesSection from '../components/FeaturesSection'
import HomeHero from '../components/HomeHero'
import { Header } from '../components/layout'

export default function IndexPage() {
    return (
        <>
            <Header />
            <main>
                <HomeHero />
                <ContentSection />
                <FeaturesSection />
                <ContactForm />
            </main>
        </>
    )
}

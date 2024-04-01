import ContactForm from "../components/ContactForm"
import ContentSection from "../components/ContentSection"
import FeaturesSection from "../components/FeaturesSection"
import HomeHero from "../components/HomeHero"

export default function IndexPage() {
    return (
        <div>
            <HomeHero />
            <ContentSection />
            <FeaturesSection />
            <ContactForm />
        </div>
    )
}

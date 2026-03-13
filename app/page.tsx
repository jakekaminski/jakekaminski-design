import {
    AboutSection,
    ContactSection,
    ContentSection,
    FeaturesSection,
    HomeHero,
    ProjectsSection,
} from '@/components'

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <AboutSection />
            <FeaturesSection />
            <ProjectsSection />
            <ContentSection />
            <ContactSection />
        </>
    )
}

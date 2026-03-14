import {
    AboutSection,
    CharacterSheetSection,
    ContactSection,
    ContentSection,
    DialogueSection,
    FeaturesSection,
    HomeHero,
    ProjectsSection,
} from '@/components'

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <DialogueSection />
            <AboutSection />
            <CharacterSheetSection />
            <FeaturesSection />
            <ProjectsSection />
            <ContentSection />
            <ContactSection />
        </>
    )
}

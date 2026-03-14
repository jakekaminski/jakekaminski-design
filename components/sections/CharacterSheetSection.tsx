const attributes = [
    { abbr: 'FE', name: 'Frontend', value: 95, color: '#f59e0b' },
    { abbr: 'BE', name: 'Backend', value: 88, color: '#6c3483' },
    { abbr: 'DS', name: 'Design Sys', value: 85, color: '#06b6d4' },
    { abbr: 'TS', name: 'TypeScript', value: 92, color: '#f59e0b' },
    { abbr: 'UX', name: 'UX/Product', value: 80, color: '#06b6d4' },
    { abbr: 'DX', name: 'Dev Ops', value: 74, color: '#6c3483' },
]

const equipment = [
    { slot: 'Framework', item: 'Next.js 15', rarity: 'legendary' },
    { slot: 'Library', item: 'React 19', rarity: 'epic' },
    { slot: 'Language', item: 'TypeScript', rarity: 'legendary' },
    { slot: 'Styling', item: 'Tailwind v4', rarity: 'epic' },
    { slot: 'Database', item: 'PostgreSQL', rarity: 'rare' },
    { slot: 'Runtime', item: 'Node.js', rarity: 'rare' },
    { slot: 'AI Spell', item: 'OpenAI SDK', rarity: 'epic' },
    { slot: 'Deploy', item: 'Vercel', rarity: 'common' },
]

const rarityColors: Record<string, string> = {
    legendary: '#f59e0b',
    epic: '#9333ea',
    rare: '#06b6d4',
    common: '#64748b',
}

export function CharacterSheetSection() {
    return (
        <section
            id="character-sheet"
            className="py-24 sm:py-32"
            style={{ backgroundColor: '#0a0a14' }}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <p
                        className="mb-3 text-xs uppercase tracking-widest text-purple-400"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Character Sheet
                    </p>
                    <h2
                        className="leading-loose text-slate-100"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(0.85rem, 2vw, 1.2rem)',
                        }}
                    >
                        Meet your{' '}
                        <span className="text-amber-400">developer</span>.
                    </h2>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div
                        className="relative rounded pixel-border-amber"
                        style={{ backgroundColor: '#0f0e1a' }}
                    >
                        {/* Top bar */}
                        <div
                            className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 p-5"
                        >
                            <div>
                                <p
                                    className="text-amber-400"
                                    style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', lineHeight: '1.8' }}
                                >
                                    Jake Kaminski
                                </p>
                                <p
                                    className="text-slate-400"
                                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
                                >
                                    Class: Full-Stack Developer
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-center">
                                    <p
                                        className="text-cyan-400"
                                        style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}
                                    >
                                        10+
                                    </p>
                                    <p
                                        className="text-slate-500"
                                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem' }}
                                    >
                                        LVL
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p
                                        className="text-amber-400"
                                        style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}
                                    >
                                        6
                                    </p>
                                    <p
                                        className="text-slate-500"
                                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem' }}
                                    >
                                        QUESTS
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p
                                        className="text-purple-400"
                                        style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}
                                    >
                                        ∞
                                    </p>
                                    <p
                                        className="text-slate-500"
                                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem' }}
                                    >
                                        BUGS
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                            {/* Attributes */}
                            <div className="border-b border-slate-800 p-5 lg:border-b-0 lg:border-r">
                                <p
                                    className="mb-4 text-slate-500 uppercase tracking-widest"
                                    style={{ fontFamily: 'var(--font-heading)', fontSize: '0.55rem' }}
                                >
                                    ⚡ Attributes
                                </p>
                                <div className="grid grid-cols-3 gap-3">
                                    {attributes.map((attr) => (
                                        <div
                                            key={attr.abbr}
                                            className="rounded border border-slate-800 p-3 text-center"
                                            style={{ backgroundColor: '#12111f' }}
                                        >
                                            <p
                                                style={{
                                                    fontFamily: 'var(--font-heading)',
                                                    fontSize: '1.1rem',
                                                    color: attr.color,
                                                    lineHeight: '1.4',
                                                }}
                                            >
                                                {attr.value}
                                            </p>
                                            <p
                                                className="mt-1"
                                                style={{
                                                    fontFamily: 'var(--font-heading)',
                                                    fontSize: '0.45rem',
                                                    color: attr.color,
                                                    lineHeight: '1.8',
                                                }}
                                            >
                                                {attr.abbr}
                                            </p>
                                            <p
                                                className="text-slate-500"
                                                style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem' }}
                                            >
                                                {attr.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Equipment */}
                            <div className="p-5">
                                <p
                                    className="mb-4 text-slate-500 uppercase tracking-widest"
                                    style={{ fontFamily: 'var(--font-heading)', fontSize: '0.55rem' }}
                                >
                                    🎒 Equipment
                                </p>
                                <div className="space-y-2">
                                    {equipment.map((equip) => (
                                        <div
                                            key={equip.slot}
                                            className="flex items-center justify-between rounded border border-slate-800 px-3 py-2"
                                            style={{ backgroundColor: '#12111f' }}
                                        >
                                            <p
                                                className="text-slate-500"
                                                style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem' }}
                                            >
                                                {equip.slot}
                                            </p>
                                            <p
                                                style={{
                                                    fontFamily: 'var(--font-heading)',
                                                    fontSize: '0.55rem',
                                                    color: rarityColors[equip.rarity],
                                                    lineHeight: '1.8',
                                                }}
                                            >
                                                {equip.item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CharacterSheetSection

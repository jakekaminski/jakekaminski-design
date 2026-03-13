'use client'
import { useState } from 'react'

const navigation = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
]

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="relative z-20 border-b border-slate-800/60">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-4 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span
                            className="text-sm text-amber-400"
                            style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.5' }}
                        >
                            JK
                        </span>
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-xs text-slate-400 transition-colors hover:text-amber-400"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden flex-1 items-center justify-end gap-x-6 lg:flex">
                    <a
                        href="/#contact"
                        className="pixel-border-amber rounded px-4 py-2 text-xs text-amber-400 transition-all hover:bg-amber-400/10"
                        style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.5' }}
                    >
                        Start a Quest
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-400"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open main menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="fixed inset-0 bg-black/60"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div
                        className="fixed inset-x-0 top-0 z-50 overflow-y-auto border-b border-slate-700 px-6 py-4 shadow-2xl"
                        style={{ backgroundColor: '#0f0e1a' }}
                    >
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span
                                    className="text-sm text-amber-400"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    JK
                                </span>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-slate-400"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="space-y-1 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded px-3 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="border-t border-slate-700 py-6">
                                <a
                                    href="/#contact"
                                    className="block rounded px-3 py-3 text-sm text-amber-400 hover:bg-slate-800"
                                    style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.5', fontSize: '0.7rem' }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Start a Quest →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header

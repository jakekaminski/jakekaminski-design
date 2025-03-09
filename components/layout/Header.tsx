'use client'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { getPageMap } from 'nextra/page-map'
import { useState } from 'react'

const navigation = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
]

export type HeaderProps = {
    pageMap: Awaited<ReturnType<typeof getPageMap>>
}

export const Header = ({ pageMap }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="relative z-20">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/#" className="-m-1.5 p-1.5">
                        <span className="font-heading text-2xl font-normal text-emerald-600">
                            Jake Kaminski
                        </span>
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="font-body rounded-md px-4 py-2 text-sm leading-6 font-semibold text-gray-900 transition-colors hover:bg-green-200 active:bg-green-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden flex-1 items-center justify-end gap-x-6 lg:flex">
                    <a
                        href="/#contact"
                        className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                        Work with Jake
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        {/* <div className="relative h-6 w-6">
                            <div
                                className={`absolute h-0.5 w-full rounded-xs bg-black transition-transform duration-150 ease-in ${mobileMenuOpen ? 'translate-y-2.5 translate-3d rotate-45' : ''}`}
                            ></div>
                            <div className="absolute top-1.5 h-0.5 w-full rounded-xs bg-black transition-transform duration-150 ease-in"></div>
                            <div className="absolute top-3 h-0.5 w-full rounded-xs bg-black transition-transform duration-150 ease-in"></div>
                        </div> */}
                    </button>
                </div>
            </nav>
            <Dialog
                as="div"
                className="z-40 transition duration-200 ease-out data-[closed]:opacity-0 lg:hidden"
                open={mobileMenuOpen}
                transition
                onClose={() => setMobileMenuOpen(false)}
            >
                <DialogPanel className="font-body fixed inset-x-0 top-0 z-40 w-full overflow-y-auto bg-gray-50 p-6 shadow-2xl sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between gap-x-6">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="font-heading text-2xl font-normal text-emerald-600">
                                Jake Kaminski
                            </span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="font-heading -mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-normal text-gray-900 hover:bg-green-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="/#contact"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 font-semibold text-gray-900 hover:bg-green-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Work with Jake →
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Header

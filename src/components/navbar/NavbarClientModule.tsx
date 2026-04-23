"use client"
import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    PopoverGroup,

} from '@headlessui/react'
import IconDynamic from '../UI/icon/icon'
import { NavProps } from "@/types/global";
import Image from 'next/image';
import Link from 'next/link';
import { ActiveLink } from '@/components/UI/active-link/ActiveLink';
import FilterModule from "@/components/filter/Filter";

export default function NavbarClientModule({ items }: { items: NavProps[] }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
                    >
                        <div className="flex px-4 pt-5 pb-2">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <IconDynamic name="close" aria-hidden="true" className="size-6" />

                            </button>

                        </div>



                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {items.map((page) => (
                                <div key={page.name} className="flow-root ">
                                    {/* <Link href={page.href} >
                                        <IconDynamic name={page.icon} className="md:w-4 md:h-4 w-6 h-4 mx-1 m-1" /> {page.name}
                                    </Link> */}
                                    <div className="-m-2 p-2 font-medium text-(--primary) flex w-50">
                                        <ActiveLink path={page.href} text={page.name} icon={page.icon} />
                                    </div>

                                </div>
                            ))}
                            <div className="flow-root">
                                <div className="-m-2 p-2 font-medium text-(--primary) flex w-50">
                                    <ActiveLink path="/" text="Inicio" icon="house" />
                                </div>
                            </div>

                        </div>

                        <div className="border-t border-gray-200 px-4 py-6">
                            <a href="#" className="-m-2 flex items-center p-2">
                                <Image
                                    height={5}
                                    width={5}
                                    alt="CO"
                                    src="/co.svg"
                                    className="block h-auto w-5 shrink-0"
                                />
                                <span className="ml-3 block text-base font-medium text-gray-900">CO</span>
                                <span className="sr-only">, change currency</span>
                            </a>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="fixed z-50 w-full bg-white">
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">

                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <IconDynamic name="bar" aria-hidden="true" className="size-6" />
                            </button>
                            <div className='lg:hidden w-75' >
                                <FilterModule />
                            </div>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0 ">
                                <Link href="/">
                                    <span className="sr-only">Maná de vida</span>
                                    <Image
                                        src="/logo-verde.svg"
                                        alt="Logo"
                                        width={120}
                                        height={80}
                                        className="bg-white m-auto order-1 md:order-2 hidden md:block h-14 w-auto"
                                    />
                                </Link>
                            </div>



                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8 items-center">
                                    {items.map((page) => (
                                        <ActiveLink
                                            key={page.href} path={page.href} text={page.name} icon={page.icon}
                                        >
                                        </ActiveLink>
                                    ))}
                                </div>
                            </PopoverGroup>

                            <div className="ml-auto flex items-center">


                                <div className="hidden lg:ml-8 lg:flex">
                                    <FilterModule />
                                    <div className="flex ml-4 items-center text-gray-700 hover:text-gray-800">
                                        <Image
                                            alt="CO"
                                            src="/co.svg"
                                            className="block h-auto w-5 shrink-0"
                                            height={5}
                                            width={5}
                                        />

                                        <span className="ml-3 block text-sm font-medium">CO</span>
                                        <span className="sr-only">, change currency</span>
                                    </div>
                                </div>

                                {/* Search */}




                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
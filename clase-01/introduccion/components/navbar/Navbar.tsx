import Link from "next/link"
import {HomeFillIcon} from '@primer/octicons-react'

const navbarLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link className="mr-2" href="/"><HomeFillIcon size={24} /></Link>
            {
                navbarLinks.map(({ href, label }) => (
                    <Link key={href} className="mr-2" href={href}>{label}</Link>
                ))
            }
            
        </nav>
    )
}
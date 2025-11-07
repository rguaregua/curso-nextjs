"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <span className="mr-2">App</span>
                <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0 }}>
                    <li>
                        <Link href="/about" className={pathname === "/about" ? "active" : ""}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className={pathname === "/pricing" ? "active" : ""}>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
                            Contact
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}
export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <span className="mr-2">App</span>
            <a className="mr-2" href="/about">About</a>
            <a className="mr-2" href="/pricing">Pricing</a>
            <a className="mr-2" href="/contact">Contact</a>
        </nav>
    )
}
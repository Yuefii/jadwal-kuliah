import Navbar from "."
import { useRouter } from "next/router"

const disableNavbar = ["/oke"]

const NavbarShell = (props) => {
    const { children } = props
    const { pathname } = useRouter();

    return (
        <main>
            {!disableNavbar.includes(pathname) && < Navbar />}
            {children}
        </main>
    )
}

export default NavbarShell
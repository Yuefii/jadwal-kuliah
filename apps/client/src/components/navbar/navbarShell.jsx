import Navbar from "."
import { useRouter } from "next/router"

const disableNavbar = ["/auth/login", "/auth/register" ]

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
import '@/styles/globals.css'
import NavbarShell from '../components/navbar/navbarShell'

export default function App({ Component, pageProps }) {
  return (
      <NavbarShell>
          <Component {...pageProps} />
      </NavbarShell>
  )
}
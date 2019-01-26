import Link from 'next/link'

const HeaderNav = () => (
    <header className="global-nav">
        <Link href="/"><a className="logo-uweb"></a></Link>
        <nav className="nav-page">
            <Link href="/ueber"><a>Über Mich</a></Link>
            <Link href="/referenzen"><a>Referenzen</a></Link>
            <Link href="/kontakt"><a>Kontakt</a></Link>
        </nav>
        <nav className="nav-social">
            <Link href="https://github.com/1uweb"><a target="_blank"><i class="fab fa-github"></i></a></Link>
            <Link href="https://www.behance.net/uwe-barthel"><a target="_blank"><i class="fab fa-behance"></i></a></Link>
        </nav>
    </header>
)

export default HeaderNav
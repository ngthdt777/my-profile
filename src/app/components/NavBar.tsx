import Link from 'next/link'

export default function NavBar(){
    return (
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/services">Services</Link>
      </nav>
    )
}
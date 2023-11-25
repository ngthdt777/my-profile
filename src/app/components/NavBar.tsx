import Link from 'next/link'

export default function NavBar(){
    return (
        <nav>
        <h1>This is nav</h1>
        <Link href="/">Home</Link>
        <Link href="/about">This is about page</Link>
        <Link href="/contact">This is contact page</Link>
        <Link href="/portfolio">This is portfolio page</Link>
        <Link href="/resume">This is resume page</Link>
        <Link href="/services">This is services page</Link>
      </nav>
    )
}
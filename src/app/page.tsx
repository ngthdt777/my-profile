"use client"
import Link from "next/link"
//import { usePathname } from "next/navigation";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-5">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-6 lg:grid-cols-1 lg:text-left py-[200px]">
        <a
          className="group rounded-lg border border-transparent px-5 py-1 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-5xl font-bold`}>
               Nguyen Thanh Dat{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-3x1 text-black pt-1 py-6`}>
              Pursue greatness!
          </p> 
        </a>
        <div className="px-5">
          <Link href="/"className={`pr-5 hover:font-semibold`}>Home</Link>
          <Link href="/about" className={`px-5 hover:font-semibold`}>About</Link>
          <Link href="/thought" className={`px-5 hover:font-semibold`}>Thought</Link>
          <Link href="/portfolio" className={`px-5 hover:font-semibold`}>Portfolio</Link>
          <Link href="/resume" className={`px-5 hover:font-semibold`}>Resume</Link>
          <Link href="/services" className={`px-5 hover:font-semibold`}>Services</Link>      
        </div>
      </div>
    </main>
  )
}
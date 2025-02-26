import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const Header = () => {
  return (
    <header>
      <div className="bg-primary text-white text-center py-1 text-sm">Fiorenza.org needs your support!</div>
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiorenzacoin-logo-QPfxUZH3xihCEUsVXPlZCTOhFWlGrL.png"
              alt="Fiorenza Logo"
              width={30}
              height={30}
              priority
            />
            <span className="text-xl font-bold text-primary">fiorenza</span>
          </Link>
          <div className="hidden md:flex gap-6">
            {[
              { name: "Introduction", href: "/introduction", hasDropdown: true },
              { name: "Resources", href: "/resources", hasDropdown: true },
              { name: "Innovation", href: "/innovation", hasDropdown: false },
              { name: "Participate", href: "/participate", hasDropdown: true },
              { name: "FAQ", href: "/faq", hasDropdown: false },
            ].map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href} className="text-gray-700 hover:text-primary transition-colors flex items-center">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              </div>
            ))}
          </div>
          <select className="bg-white border border-gray-300 rounded text-gray-700 px-2 py-1 text-sm">
            <option>English</option>
          </select>
        </div>
      </nav>
    </header>
  )
}

export default Header


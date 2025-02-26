import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export default function Home() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mb-12">
          Fiorenza is an innovative payment network and a new kind of money.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/getting-started"
            className="bg-primary text-white px-6 py-3 rounded font-bold hover:bg-primary/90 transition-colors text-center"
          >
            Get started with Fiorenza
          </Link>
          <Link
            href="/choose-your-wallet"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors text-center"
          >
            Choose your wallet
          </Link>
          <Link
            href="/buy-fiorenza"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors text-center"
          >
            Buy Fiorenza
          </Link>
        </div>
        <button className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
          <div className="bg-gray-900 text-white rounded-full p-2">
            <Play className="h-6 w-6" />
          </div>
          <span className="font-bold">What is Fiorenza?</span>
        </button>
      </div>

      {/* Quick overview section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get a quick overview for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/individuals" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Individuals</h3>
              <p>Fiorenza is the simplest way to exchange money at very low cost.</p>
            </Link>
            <Link href="/businesses" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Businesses</h3>
              <p>Fiorenza offers very low fees and good protection against fraud.</p>
            </Link>
            <Link href="/developers" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Developers</h3>
              <p>Fiorenza provides a powerful API and tools for building financial services.</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Placeholder for background illustration */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-[-1]">
        <Image
          src="/placeholder.svg?height=256&width=1920"
          alt="Fiorenza network illustration"
          width={1920}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  )
}


import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/fiorenza-for-individuals">Fiorenza for Individuals</Link>
              </li>
              <li>
                <Link href="/fiorenza-for-businesses">Fiorenza for Businesses</Link>
              </li>
              <li>
                <Link href="/fiorenza-for-developers">Fiorenza for Developers</Link>
              </li>
              <li>
                <Link href="/getting-started">Getting Started</Link>
              </li>
              <li>
                <Link href="/how-it-works">How it Works</Link>
              </li>
              <li>
                <Link href="/white-paper">White Paper</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/exchanges">Exchanges</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
              <li>
                <Link href="/documentation">Documentation</Link>
              </li>
              <li>
                <Link href="/vocabulary">Vocabulary</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Participate</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support-fiorenza">Support Fiorenza</Link>
              </li>
              <li>
                <Link href="/buy-fiorenza">Buy Fiorenza</Link>
              </li>
              <li>
                <Link href="/running-a-node">Running a Node</Link>
              </li>
              <li>
                <Link href="/development">Development</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Other</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/avoid-scams">Avoid Scams</Link>
              </li>
              <li>
                <Link href="/legal">Legal</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/press">Press</Link>
              </li>
              <li>
                <Link href="/about">About fiorenza.org</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-600">© 2024 Fiorenza.org. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer


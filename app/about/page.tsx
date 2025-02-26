import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <main className="container py-24">
      <h1 className="renaissance-heading mb-6">About Fiorenza</h1>
      <p className="renaissance-subheading mb-12">A financial revolution inspired by the Medici legacy</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Card className="renaissance-border overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Renaissance Banking"
              width={600}
              height={400}
              className="w-full"
            />
          </CardContent>
        </Card>
        <div className="space-y-6 font-cormorant text-lg">
          <p>
            Fiorenza (FZAC) represents the convergence of historical financial wisdom and modern blockchain innovation.
            Named after the city that gave birth to the Renaissance, our project carries forward the spirit of the
            Medici banking dynasty into the digital age.
          </p>
          <p>
            Just as the Medici family revolutionized banking in the 15th century, Fiorenza aims to transform digital
            finance through cutting-edge blockchain technology, robust security measures, and innovative financial
            instruments.
          </p>
          <p>
            Our mission is to provide a secure, efficient, and accessible financial platform that empowers individuals
            worldwide while preserving the timeless principles of sound money management.
          </p>
        </div>
      </div>
    </main>
  )
}


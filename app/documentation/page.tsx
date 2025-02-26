import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Github } from "lucide-react"

export default function Documentation() {
  return (
    <main className="container py-24">
      <h1 className="renaissance-heading mb-12">Documentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="renaissance-border">
          <CardHeader>
            <CardTitle className="font-cinzel">Whitepaper</CardTitle>
            <CardDescription>Technical details and tokenomics</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              Download Whitepaper
            </Button>
          </CardContent>
        </Card>
        <Card className="renaissance-border">
          <CardHeader>
            <CardTitle className="font-cinzel">Smart Contract</CardTitle>
            <CardDescription>View our verified contract on BSCScan</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              View on BSCScan
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


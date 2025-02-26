import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Twitter } from "lucide-react"

export default function Community() {
  return (
    <main className="container py-24">
      <h1 className="renaissance-heading mb-6">Join Our Community</h1>
      <p className="renaissance-subheading mb-12">Connect with fellow Fiorenza enthusiasts and stay updated</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="renaissance-border">
          <CardHeader>
            <CardTitle className="font-cinzel">Telegram Community</CardTitle>
            <CardDescription>Join our official Telegram group</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <MessageCircle className="mr-2 h-4 w-4" />
              Join Telegram
            </Button>
          </CardContent>
        </Card>
        <Card className="renaissance-border">
          <CardHeader>
            <CardTitle className="font-cinzel">Twitter</CardTitle>
            <CardDescription>Follow us for the latest updates</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <Twitter className="mr-2 h-4 w-4" />
              Follow @FiorenzaToken
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


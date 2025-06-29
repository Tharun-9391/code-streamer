import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coffee, Heart, DollarSign } from "lucide-react"

export function MonetizationLinks() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Support the Stream</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button asChild size="lg" className="w-full">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Coffee className="mr-2 h-5 w-5"/> Buy Me a Coffee
            </a>
        </Button>
        <Button asChild variant="secondary" size="lg" className="w-full">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Heart className="mr-2 h-5 w-5"/> Sponsor on GitHub
            </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <DollarSign className="mr-2 h-5 w-5"/> Send a Tip
            </a>
        </Button>
      </CardContent>
    </Card>
  )
}

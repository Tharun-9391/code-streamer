import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function LiveStream() {
  return (
    <Card className="w-full shadow-lg overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-headline">Live Stream</CardTitle>
        <Badge variant="destructive" className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive/75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
          </span>
          LIVE
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-muted rounded-md overflow-hidden relative">
          <Image 
            src="https://placehold.co/1920x1080.png" 
            alt="Live stream placeholder" 
            fill
            className="object-cover"
            data-ai-hint="coding screen"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <p className="text-primary-foreground font-semibold text-lg drop-shadow-lg">Twitch/YouTube Embed Here</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

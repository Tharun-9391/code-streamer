import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Youtube, Twitch, MessageCircle } from "lucide-react"

export function ProfileHeader() {
  const techStack = ["React", "Next.js", "Tailwind CSS", "TypeScript", "Firebase", "GenAI"]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-card rounded-lg shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
        <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary">
          <AvatarImage src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369989.png" alt="Streamer's Profile Picture" data-ai-hint="user avatar" />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-3xl md:text-4xl font-bold font-headline">CodeCaster</h1>
          <p className="text-muted-foreground text-center md:text-left max-w-lg">
            Full-stack developer and live-streamer passionate about building modern web applications and sharing knowledge with the community. Let's code something amazing together!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">{tech}</Badge>
            ))}
          </div>
          <div className="flex gap-2 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitch">
                <Twitch className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Discord">
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

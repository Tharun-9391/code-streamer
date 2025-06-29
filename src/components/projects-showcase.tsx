import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { GitFork, Star, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Code Reviewer",
    description: "A tool that uses GenAI to review pull requests, suggest improvements, and identify potential bugs automatically.",
    tags: ["AI", "SaaS", "Next.js", "GitHub API"],
    stars: 1200,
    forks: 345,
    image: "https://i.ytimg.com/vi/luCxfWFeN7M/maxresdefault.jpg",
    imageHint: "code terminal",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Collaborative IDE",
    description: "A web-based IDE that allows multiple users to code together in real-time, with shared terminals and previews.",
    tags: ["WebSockets", "React", "Monaco Editor"],
    stars: 850,
    forks: 120,
    image: "https://tse2.mm.bing.net/th/id/OIP.utjDH8TQsRdy2tgAPpsPIgHaE8?pid=Api&P=0&h=180",
    imageHint: "interface dashboard",
    liveUrl: "#",
    githubUrl: "#",
  },
    {
    title: "Streamer Analytics Dashboard",
    description: "A custom dashboard to track viewer engagement, chat sentiment, and follower growth across multiple streaming platforms.",
    tags: ["Data Viz", "Charts", "API Integration"],
    stars: 450,
    forks: 75,
    image: "https://cdn.dribbble.com/userupload/2993080/file/original-87e69a08ed39299d0500cfb405ea0194.png?compress=1&resize=752x",
    imageHint: "graphs charts",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsShowcase() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 font-headline">Projects Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="aspect-video relative w-full rounded-t-lg overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" data-ai-hint={project.imageHint} />
              </div>
              <CardTitle className="pt-4 font-headline">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex gap-4 text-muted-foreground">
                <span className="flex items-center gap-1"><Star className="w-4 h-4"/>{project.stars}</span>
                <span className="flex items-center gap-1"><GitFork className="w-4 h-4"/>{project.forks}</span>
              </div>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                 </Button>
                 <Button variant="default" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink className="w-4 h-4 ml-2"/></a>
                 </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

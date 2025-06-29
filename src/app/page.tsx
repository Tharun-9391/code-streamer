import { ProfileHeader } from "@/components/profile-header";
import { LiveStream } from "@/components/live-stream";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { ChallengeGenerator } from "@/components/challenge-generator";
import { GitHubStats } from "@/components/github-stats";
import { LiveChat } from "@/components/live-chat";
import { MonetizationLinks } from "@/components/monetization-links";
import { CommunityPoll } from "@/components/community-poll";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body">
      <div className="container mx-auto px-4 py-8">
        
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary tracking-tighter">
              CodeCast Canvas
            </h1>
            <p className="text-muted-foreground md:text-xl mt-2">
              The ultimate profile for the modern coding streamer.
            </p>
        </header>

        <main className="space-y-12">
          <ProfileHeader />

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 space-y-8 lg:space-y-0">
            <div className="lg:col-span-2 space-y-8">
              <LiveStream />
              <ChallengeGenerator />
            </div>
            <div className="space-y-8">
              <GitHubStats />
              <LiveChat />
              <MonetizationLinks />
              <CommunityPoll />
            </div>
          </div>

          <ProjectsShowcase />

        </main>
        <footer className="text-center mt-16 text-muted-foreground text-sm">
            <p>Powered by Next.js, GenAI, and a love for code.</p>
            <p>CodeCast Canvas &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}

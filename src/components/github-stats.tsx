import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GitCommit, Code, BarChart } from "lucide-react"

function ContributionGraph() {
    const days = Array.from({ length: 91 }, (_, i) => {
        const intensity = Math.floor(Math.random() * 5);
        let colorClass = 'bg-secondary';
        if (intensity === 1) colorClass = 'bg-primary/20';
        if (intensity === 2) colorClass = 'bg-primary/40';
        if (intensity === 3) colorClass = 'bg-primary/60';
        if (intensity === 4) colorClass = 'bg-primary/80';
        return <div key={i} className={`w-3.5 h-3.5 rounded-sm ${colorClass}`}></div>;
    });

    return (
        <div className="flex flex-wrap gap-1">
            {days}
        </div>
    );
}

export function GitHubStats() {
    const stats = [
        {
            title: "GitHub Followers",
            value: "12.3k",
            icon: Users,
        },
        {
            title: "Total Contributions",
            value: "5,842",
            icon: GitCommit,
        },
        {
            title: "Streaming Hours",
            value: "1,200+",
            icon: BarChart,
        },
        {
            title: "Most Used Language",
            value: "TypeScript",
            icon: Code,
        }
    ]
  return (
    <Card className="shadow-lg">
        <CardHeader>
            <CardTitle className="font-headline">Stats Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
            {stats.map(stat => (
                <Card key={stat.title} className="p-4">
                    <div className="flex items-center gap-4">
                        <stat.icon className="w-6 h-6 text-primary"/>
                        <div>
                            <p className="text-sm text-muted-foreground">{stat.title}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                    </div>
                </Card>
            ))}
             <Card className="p-4 col-span-2">
                <p className="text-sm text-muted-foreground mb-2">Contribution Graph</p>
                <ContributionGraph />
            </Card>
        </CardContent>
    </Card>
  )
}

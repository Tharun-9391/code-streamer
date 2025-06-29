"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const pollOptions = [
  { id: 1, text: "A new front-end framework", votes: 42 },
  { id: 2, text: "AI/ML project integration", votes: 78 },
  { id: 3, text: "Game development with JS", votes: 25 },
  { id: 4, text: "Backend with Go or Rust", votes: 55 },
]

export function CommunityPoll() {
  const [voted, setVoted] = useState<number | null>(null)
  
  const handleVote = (id: number) => {
    setVoted(id)
  }

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0) + (voted ? 1 : 0);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Community Poll</CardTitle>
        <CardDescription>What should I build next on stream?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {pollOptions.map(option => {
          const currentVotes = option.votes + (voted === option.id ? 1 : 0);
          const percentage = totalVotes > 0 ? Math.round((currentVotes / totalVotes) * 100) : 0;
          
          return (
            <div key={option.id}>
              {voted ? (
                 <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <p className={`font-medium ${voted === option.id ? 'text-primary' : ''}`}>{option.text}</p>
                        <p className="text-muted-foreground">{percentage}%</p>
                    </div>
                    <Progress value={percentage} className="h-2" />
                 </div>
              ) : (
                <Button variant="outline" className="w-full justify-start" onClick={() => handleVote(option.id)}>
                  {option.text}
                </Button>
              )}
            </div>
          )
        })}
        {voted && (
            <Button variant="link" size="sm" onClick={() => setVoted(null)} className="p-0 h-auto">
                Vote again
            </Button>
        )}
      </CardContent>
    </Card>
  )
}

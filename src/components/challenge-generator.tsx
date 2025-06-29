"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { generateCodingChallenge, type GenerateCodingChallengeInput } from "@/ai/flows/generate-coding-challenge"
import { useToast } from "@/hooks/use-toast"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Lightbulb, Loader2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

const formSchema = z.object({
  pastProjects: z.string().min(10, "Please describe your past projects in a bit more detail."),
  audienceEngagementMetrics: z.string().min(10, "Please describe your audience engagement in a bit more detail."),
})

export function ChallengeGenerator() {
  const [loading, setLoading] = useState(false)
  const [challenge, setChallenge] = useState("")
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pastProjects: "Built a real-time chat application with React and Firebase, a weather dashboard using a third-party API, and a personal portfolio website with Next.js.",
      audienceEngagementMetrics: "The audience is most engaged when I work on projects involving APIs, AI, or interactive front-end features. They love seeing things come to life on screen.",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    setChallenge("")
    try {
      const result = await generateCodingChallenge(values as GenerateCodingChallengeInput)
      setChallenge(result.challengeIdea)
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to generate a challenge. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Lightbulb className="text-primary" />
          Coding Challenge Generator
        </CardTitle>
        <CardDescription>
          Generate a new coding challenge for your next stream based on your projects and audience.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="pastProjects"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Past Projects</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., Real-time chat app, e-commerce site..." {...field} rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="audienceEngagementMetrics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Audience Engagement</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., High engagement on API-focused streams..." {...field} rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate Idea
            </Button>
          </form>
        </Form>
        {loading && (
          <div className="mt-6 space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        )}
        {challenge && (
          <div className="mt-6 p-4 bg-secondary rounded-lg border border-primary/20">
            <h4 className="font-bold font-headline mb-2">New Challenge Idea:</h4>
            <p className="text-secondary-foreground">{challenge}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

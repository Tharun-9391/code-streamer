// This file is machine-generated - edit with caution!
'use server';
/**
 * @fileOverview A coding challenge generator AI agent.
 *
 * - generateCodingChallenge - A function that handles the coding challenge generation process.
 * - GenerateCodingChallengeInput - The input type for the generateCodingChallenge function.
 * - GenerateCodingChallengeOutput - The return type for the generateCodingChallenge function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCodingChallengeInputSchema = z.object({
  pastProjects: z.string().describe('A description of the streamers past projects.'),
  audienceEngagementMetrics: z.string().describe('Metrics on audience engagement, such as topics that generate high engagement.'),
});
export type GenerateCodingChallengeInput = z.infer<typeof GenerateCodingChallengeInputSchema>;

const GenerateCodingChallengeOutputSchema = z.object({
  challengeIdea: z.string().describe('A coding challenge idea based on past projects and audience engagement metrics.'),
});
export type GenerateCodingChallengeOutput = z.infer<typeof GenerateCodingChallengeOutputSchema>;

export async function generateCodingChallenge(input: GenerateCodingChallengeInput): Promise<GenerateCodingChallengeOutput> {
  return generateCodingChallengeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCodingChallengePrompt',
  input: {schema: GenerateCodingChallengeInputSchema},
  output: {schema: GenerateCodingChallengeOutputSchema},
  prompt: `You are a coding challenge idea generator for coding streamers.

You will use information about the streamer's past projects and audience engagement metrics to generate a coding challenge idea that will be engaging for the streamer's audience.

Past Projects: {{{pastProjects}}}
Audience Engagement Metrics: {{{audienceEngagementMetrics}}}

Coding Challenge Idea:`,
});

const generateCodingChallengeFlow = ai.defineFlow(
  {
    name: 'generateCodingChallengeFlow',
    inputSchema: GenerateCodingChallengeInputSchema,
    outputSchema: GenerateCodingChallengeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

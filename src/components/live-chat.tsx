"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { Avatar, AvatarFallback } from "./ui/avatar"

const initialMessages = [
    { user: 'viewer123', text: 'This is awesome! 🔥' },
    { user: 'code_ninja', text: 'Can you explain that hook again?' },
    { user: 'react_fan', text: 'I love Space Grotesk font!' },
];

const botMessages = [
    "Great stream today!",
    "What theme is that in your VS Code?",
    "Thanks for the follow!",
    "Let's deploy this now."
]

export function LiveChat() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
        const randomUser = `guest_${Math.floor(Math.random() * 1000)}`;
        const randomMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
        
        setMessages(prev => [...prev, {user: randomUser, text: randomMessage}])
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, { user: "You", text: newMessage }])
      setNewMessage("")
    }
  }

  return (
    <Card className="shadow-lg flex flex-col h-[500px] max-h-[500px]">
      <CardHeader>
        <CardTitle className="font-headline">Live Chat</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4 overflow-hidden">
        <ScrollArea className="h-full w-full pr-4">
            <div className="space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm animate-in fade-in duration-500">
                        <Avatar className="w-8 h-8 border-2 border-secondary">
                           <AvatarFallback>{msg.user.substring(0,2)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <span className={`font-bold ${msg.user === 'You' ? 'text-primary' : ''}`}>{msg.user}</span>
                            <p className="text-muted-foreground break-words">{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
        <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2 mt-auto pt-4 border-t">
            <Input 
                type="text" 
                placeholder="Send a message..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="bg-background"
            />
            <Button type="submit" size="icon" aria-label="Send Message">
                <Send className="h-4 w-4" />
            </Button>
        </form>
      </CardContent>
    </Card>
  )
}

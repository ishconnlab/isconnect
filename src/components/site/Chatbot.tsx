"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";

type Msg = { role: "ai" | "user"; content: string };

const SUGGESTIONS = [
  { label: "Explore services", target: "/#services" },
  { label: "View projects", target: "/#projects" },
  { label: "Join Academy", target: "/#academy" },
  { label: "Contact team", target: "/#contact" },
];

function mockReply(input: string): string {
  const q = input.toLowerCase();

  // START PROJECT (FIXED ISSUE)
  if (/start|begin|work with you|hire|project/.test(q))
    return "Starting is simple: go to the Contact section, share your idea, and our team will respond within 1 business day to guide you.";

  // SERVICES
  if (/service|what do you do|offer/.test(q))
    return "We build Web, Mobile, Cloud, Cybersecurity, Backend systems, and UI/UX — engineered for performance and scale.";

  // PROJECTS
  if (/project|portfolio|work|case/.test(q))
    return "We’ve delivered 50+ projects like GreenAfrica Dashboard (climate tech), HealGuard AI (healthcare), AgriLink Rwanda (AgriTech), and FoodieApp (mobile commerce).";

  // ACADEMY
  if (/academy|course|learn|training/.test(q))
    return "Our Academy (by DevQueens) offers Beginner → Advanced programs with real-world projects: Python, Full Stack, Mobile, Cybersecurity, Cloud, and UI/UX.";

  // DEVQUEENS
  if (/devqueens|women/.test(q))
    return "DevQueens is our initiative empowering African women in tech through mentorship, training, and real engineering opportunities.";

  // TEAM
  if (/team|who/.test(q))
    return "Our team includes Ishimwe J. Claude (Founder), Kevin (Full Stack), Cynthia (Content), Tumaine (Web Dev), Trinita (Designer), Ange (Customer Success), Divine (Partnerships), Derick (Mobile), and Sandrine (Operations).";

  // CONTACT
  if (/contact|email|phone|reach/.test(q))
    return "Reach us at ishconnlab@gmail.com or +250 787 377 750. Located in Kicukiro, Kigali, Rwanda.";

  // DEFAULT
  return "Ask me about services, projects, training, DevQueens, or how to start a project.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      content:
        "Hi, I'm IshConnLab AI. Ask about services, projects, training, or how to start a project.",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const handleSend = (text: string) => {
    const clean = text.trim().slice(0, 500);
    if (!clean) return;

    setMessages((m) => [...m, { role: "user", content: clean }]);
    setInput("");

    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", content: mockReply(clean) }]);
    }, 400);
  };

  const handleSuggestion = (s: (typeof SUGGESTIONS)[number]) => {
    setMessages((m) => [
      ...m,
      { role: "user", content: s.label },
      { role: "ai", content: `Opening ${s.label.toLowerCase()}...` },
    ]);

    setTimeout(() => {
      window.location.href = s.target;
    }, 300);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full border border-accent bg-background text-accent flex items-center justify-center shadow-md hover:bg-accent hover:text-white transition"
      >
        {open ? <X size={18} /> : <Bot size={18} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-20 right-5 z-50 w-90 max-w-[95vw] rounded-xl border border-border bg-surface shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Bot className="text-accent" size={16} />
              <div className="text-sm font-semibold">IshConnLab AI</div>
              <span className="ml-auto text-xs text-muted-foreground">Online</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 max-h-80">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg text-sm leading-relaxed max-w-[85%] wrap-break-word ${
                      m.role === "user"
                        ? "bg-gray-500 text-white"
                        : "bg-background border border-border text-foreground"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 px-4 py-3 border-t border-border">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => handleSuggestion(s)}
                    className="text-xs px-3 py-1 rounded-full border border-border hover:border-accent hover:text-accent transition"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2 px-3 py-3 border-t border-border"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, projects, training, or 'how to start'..."
                className="flex-1 h-10 px-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="h-10 w-10 flex items-center justify-center rounded-md bg-gray-700 text-white hover:bg-primary/90"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

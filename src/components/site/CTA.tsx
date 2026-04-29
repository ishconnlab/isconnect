"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import emailjs from "@emailjs/browser";

export function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-tight">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-16 md:px-16 md:py-24 text-white"
          style={{
            background: "linear-gradient(135deg, #111314 0%, #0f1112 50%, #131516 100%)",
          }}
        >
          <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full blur-3xl bg-slate-400/10" />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-widest">
              Let&apos;s Build
            </div>

            <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
              Ready to build something extraordinary?
            </h2>

            <p className="mt-5 text-base md:text-lg opacity-70">
              Partner with us on your next product, platform, or cohort.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold bg-white text-black hover:bg-gray-400 transition-all"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#academy"
                className="inline-flex h-11 items-center justify-center rounded-md border px-6 text-sm border-white/20 text-white/80 hover:bg-gray-400 hover:text-white"
              >
                Join Training
              </a>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

function ProjectModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_emew7q6",
        "template_flzt17z",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "I3579akFPAYK4y_LS",
      );
      setDone(true);
    } catch {
      alert("Failed to send");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-xl border border-white/10 bg-[#111314] text-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-white/50 hover:text-white"
          aria-label="Close modal"
        >
          <X />
        </button>

        {done ? (
          <div className="text-center">
            <h3 className="text-lg font-semibold">Request Sent</h3>
            <p className="text-sm text-white/60 mt-2">
              We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Start a Project</h3>

            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />

            <Input
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />

            <Textarea
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-2 h-11 rounded-md bg-white text-black font-medium hover:bg-gray-400 transition-all disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required
      className="h-11 rounded-md border border-white/10 bg-[#0f1112] px-3 text-sm text-white placeholder:text-white/40 focus:border-gray-400 focus:outline-none"
    />
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      required
      className="rounded-md border border-white/10 bg-[#0f1112] px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-gray-400 focus:outline-none"
    />
  );
}

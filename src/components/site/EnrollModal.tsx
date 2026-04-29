"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().min(6, "Invalid phone").max(30),
});

interface Props {
  open: boolean;
  onClose: () => void;
  course: { title: string; duration: string; level: string } | null;
}

export function EnrollModal({ open, onClose, course }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setForm({ name: "", email: "", phone: "" });
      setError(null);
      setDone(false);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = schema.safeParse(form);
    if (!res.success) {
      setError(res.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // ✅ EmailJS integration
      await emailjs.send(
        "service_emew7q6",
        "template_gumqgv8",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          course: course?.title,
        },
        "I3579akFPAYK4y_LS",
      );

      setDone(true);
    } catch (err) {
      console.error(err);
      setError("Failed to send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && course && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 px-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            {done ? (
              <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  You're on the list
                </h3>
                <p className="max-w-xs text-sm text-muted-foreground">
                  We'll email next steps for <span className="text-foreground">{course.title}</span>{" "}
                  within one business day.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 py-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    Enroll · {course.level} · {course.duration}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Cohort-based. Small class. Real projects.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Field
                    label="Full name"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    placeholder="Jane Doe"
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    placeholder="you@company.com"
                  />
                  <Field
                    label="Phone"
                    value={form.phone}
                    onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                    placeholder="+250 …"
                  />
                </div>

                {error && <div className="text-xs text-destructive">{error}</div>}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit application"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={200}
        required
        className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
      />
    </label>
  );
}

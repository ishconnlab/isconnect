"use client";

import { Suspense, lazy, useEffect, useState } from "react";

const Chatbot = lazy(() => import("./Chatbot"));

export function ChatbotLazy() {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMount(true), 800);
    return () => clearTimeout(t);
  }, []);
  if (!mount) return null;
  return (
    <Suspense fallback={null}>
      <Chatbot />
    </Suspense>
  );
}

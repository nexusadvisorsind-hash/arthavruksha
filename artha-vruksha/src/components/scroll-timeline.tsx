"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

type Item = { title: string; body: string; note?: string };

/** Vertical steps with a line that fills as the reader scrolls through them. */
export function ScrollTimeline({ items, accent = "#1E5FD9" }: { items: Item[]; accent?: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });

  return (
    <ol ref={ref} className="relative pl-12 md:pl-[3.75rem] space-y-6">
      <span aria-hidden className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-[2px] bg-border" />
      <motion.span
        aria-hidden
        style={{ scaleY, backgroundColor: accent }}
        className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-[2px] origin-top"
      />
      {items.map((it, i) => (
        <li key={it.title} className="step-card relative p-5 md:p-6">
          <span
            aria-hidden
            className="absolute -left-12 md:-left-[3.75rem] top-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white border-2 ring-4 ring-background font-body font-bold text-xl md:text-2xl leading-none"
            style={{ borderColor: accent, color: accent }}
          >
            {i + 1}
          </span>
          <h3 className="font-heading font-semibold text-xl text-primary mb-1.5">{it.title}</h3>
          <p className="font-body text-base text-foreground-muted leading-relaxed measure">{it.body}</p>
          {it.note && <p className="font-body text-sm text-foreground-muted/80 mt-2 measure">{it.note}</p>}
        </li>
      ))}
    </ol>
  );
}

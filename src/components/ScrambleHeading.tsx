"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrambleHeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  scrambleCharacters?: string;
  speed?: number;
}

export default function ScrambleHeading({
  text,
  className,
  as: Component = "h1",
  scrambleCharacters = "!<>-_\\\\/[]{}—=+*^?#________",
  speed = 50,
}: ScrambleHeadingProps) {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let frame = 0;
    const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
    const length = text.length;

    for (let i = 0; i < length; i++) {
      const from = scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to: text[i], start, end });
    }

    const update = () => {
      let output = "";
      let complete = 0;

      for (let i = 0; i < length; i++) {
        const { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            queue[i].char = scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
          }
          output += `<span class="opacity-50 text-emerald-500">${queue[i].char}</span>`;
        } else {
          output += from;
        }
      }

      setDisplayText(output);

      if (complete === length) {
        setIsAnimating(false);
      } else {
        frame++;
        setTimeout(update, speed);
      }
    };

    update();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <Component
      className={cn("heading-font font-bold", className)}
      dangerouslySetInnerHTML={{ __html: isAnimating ? displayText : text }}
    />
  );
}

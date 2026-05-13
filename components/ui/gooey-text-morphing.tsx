"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
  textStyle?: React.CSSProperties;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
  textStyle,
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  const textIndexRef = React.useRef(0);
  const morphRef = React.useRef(0);
  const cooldownRef = React.useRef(0);
  const timeRef = React.useRef<number | null>(null);
  const frameRef = React.useRef<number>(0);

  const setMorph = React.useCallback(
    (fraction: number) => {
      const text1 = text1Ref.current;
      const text2 = text2Ref.current;
      if (!text1 || !text2) return;

      text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      text1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
      text1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      text1.textContent = texts[textIndexRef.current % texts.length];
      text2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts]
  );

  const doCooldown = React.useCallback(() => {
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;
    if (!text1 || !text2) return;

    morphRef.current = 0;
    text2.style.filter = "none";
    text2.style.opacity = "100%";
    text1.style.filter = "none";
    text1.style.opacity = "0%";
  }, []);

  const animate = React.useCallback(
    (time: number) => {
      frameRef.current = requestAnimationFrame(animate);

      if (timeRef.current === null) {
        timeRef.current = time;
      }

      let dt = (time - timeRef.current) / 1000;
      timeRef.current = time;
      dt = Math.min(dt, 0.05);

      if (cooldownRef.current > 0) {
        cooldownRef.current -= dt;
        if (cooldownRef.current <= 0) doCooldown();
        return;
      }

      morphRef.current += dt;

      if (morphRef.current >= morphTime) {
        cooldownRef.current = cooldownTime;
        morphRef.current = 0;
        textIndexRef.current++;
      }

      setMorph(morphRef.current / morphTime);
    },
    [morphTime, cooldownTime, setMorph, doCooldown]
  );

  React.useEffect(() => {
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [animate]);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg className="absolute h-0 w-0" aria-hidden>
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="relative flex items-center justify-center"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block w-full text-center select-none",
            textClassName
          )}
          style={textStyle}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block w-full text-center select-none",
            textClassName
          )}
          style={textStyle}
        />
        {/* invisible spacer to size the container */}
        <span
          className={cn("invisible inline-block select-none", textClassName)}
          aria-hidden
        >
          {texts.reduce((a, b) => (a.length >= b.length ? a : b), "")}
        </span>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const foodMessages = [
  { text: "Heating the pan...", emoji: "🍳" },
  { text: "Chopping fresh ingredients...", emoji: "🥬" },
  { text: "Sizzling the garlic...", emoji: "🧄" },
  { text: "Stirring the pot...", emoji: "🍲" },
  { text: "Grilling to perfection...", emoji: "🔥" },
  { text: "Plating your experience...", emoji: "🍽️" },
  { text: "Adding the secret spice...", emoji: "✨" },
  { text: "Almost ready to serve...", emoji: "👨‍🍳" },
];

const allImages = [
  "/images/ambiance-spread.jpg",
  "/images/hero-beef-ribs.jpg",
  "/images/hero-signature.jpg",
  "/images/dish-tempura.jpg",
  "/images/dish-chicken-leg.jpg",
  "/images/dish-chicken-stuffed.jpg",
  "/images/dish-fried-fish.jpg",
  "/images/drinks-iced-coffee.jpg",
  "/images/catering-buffet-chicken.jpg",
  "/images/catering-buffet-veggies.jpg",
  "/images/catering-pasta.jpg",
  "/images/basio-logo-v2.png",
];

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  const finishSplash = useCallback(() => {
    setExiting(true);
    setTimeout(onComplete, 800);
  }, [onComplete]);

  useEffect(() => {
    let loaded = 0;
    const total = allImages.length;

    const onLoad = () => {
      loaded++;
      const pct = Math.round((loaded / total) * 100);
      setProgress(pct);
      if (loaded >= total) {
        setTimeout(finishSplash, 600);
      }
    };

    allImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      if (img.complete) {
        onLoad();
      } else {
        img.onload = onLoad;
        img.onerror = onLoad;
      }
    });

    // Safety timeout — finish after 6s no matter what
    const safety = setTimeout(() => {
      setProgress(100);
      setTimeout(finishSplash, 400);
    }, 6000);

    return () => clearTimeout(safety);
  }, [finishSplash]);

  // Cycle food messages based on progress
  useEffect(() => {
    const idx = Math.min(
      Math.floor((progress / 100) * foodMessages.length),
      foodMessages.length - 1
    );
    setMessageIndex(idx);
  }, [progress]);

  const current = foodMessages[messageIndex];

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faf8f5]"
        >
          {/* Animated logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10"
          >
            <Image
              src="/images/basio-logo-v2.png"
              alt="Basio"
              width={120}
              height={120}
              priority
            />
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 sm:w-80">
            {/* Bar track */}
            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-primary/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            {/* Percentage */}
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-muted-foreground font-medium">
                {progress}%
              </span>
              {/* Decorative fork/knife that moves with progress */}
              <motion.span
                key={messageIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg"
              >
                {current.emoji}
              </motion.span>
            </div>
          </div>

          {/* Food loading message */}
          <motion.p
            key={current.text}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-5 text-sm text-muted-foreground italic"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {current.text}
          </motion.p>

          {/* Subtle steam animation above logo */}
          <div className="pointer-events-none absolute top-[28%] flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-6 w-1 rounded-full bg-primary/10"
                animate={{
                  y: [0, -18, 0],
                  opacity: [0.3, 0.7, 0.3],
                  scaleY: [1, 1.5, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

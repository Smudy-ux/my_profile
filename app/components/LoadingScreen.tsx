"use client"
import React, { useState, useEffect } from 'react';

const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "Hallo", "Sveiki", "Привет"];

let hasShownInSession = false;

export default function LoadingScreen() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [slideUp, setSlideUp] = useState(false);
  const [isDone, setIsDone] = useState(() => hasShownInSession);

  useEffect(() => {
    // Use the captured initial isDone value, not the module flag,
    // so React Strict Mode's double-invoke in dev doesn't skip the animation.
    if (isDone) return;

    hasShownInSession = true;

    let currentIndex = 0;
    const cycleInterval = 180;
    const fadeDuration = 60;

    const timer = setInterval(() => {
      setIsTextVisible(false);

      setTimeout(() => {
        currentIndex++;
        if (currentIndex < greetings.length) {
          setGreetingIndex(currentIndex);
          setIsTextVisible(true);
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setSlideUp(true);
            setTimeout(() => {
              setIsDone(true);
            }, 700);
          }, 200);
        }
      }, fadeDuration);
    }, cycleInterval);

    return () => clearInterval(timer);
  }, []);

  if (isDone) return null;

  return (
    <div
            className={`fixed inset-0 flex items-center justify-center bg-stone-950 z-50 transform transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        slideUp ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1
        className={`text-white text-5xl md:text-7xl font-medium tracking-tight transition-opacity duration-100 ease-in-out ${
          isTextVisible && !slideUp ? "opacity-100" : "opacity-0"
        }`}
      >
        {greetings[greetingIndex]}
      </h1>
    </div>
  );
}
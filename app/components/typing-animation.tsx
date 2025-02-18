"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Use the search bar 🔍 to explore our knowledge app",
        2500,
        "Welcome to our Knowledge Base",
        2000,
        "Find answers to your questions",
        2000,
        "Explore our resources",
        2000,
        "",
      ]}
      speed={50}
      repeat={Infinity}
      className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
    />
  );
}

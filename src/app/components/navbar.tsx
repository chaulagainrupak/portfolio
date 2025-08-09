"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function NavBar() {
  const navRef = useRef(null);
  const name = "Rupak Chaulagain";

  useEffect(() => {
    gsap.set(".letter", {
      transformPerspective: 600, // gives depth
      transformOrigin: "center center",
    });

    gsap.from(".letter", {
      rotateY: 90,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.06,
    });
  }, []);

  return (
    <div
      ref={navRef}
      className="navbar mt-10 flex justify-center text-[var(--font-color)] font-bold text-8xl"
    >
      {name.split("").map((char, index) => (
        <span key={index} className="letter inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

"use client";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "../components/about";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Hero from "../components/Hero";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero/>
      <Projects/>
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
"use client"

import Attendance from "@/components/Attendance";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Gifts from "@/components/Gifts";
import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Party from "@/components/Party";

export default function Home() {
  return (
    <main className="min-h-screen  bg-body">
      <Hero />
      <Counter />
      <Party />
      <Attendance />
      <Instagram />
      <Gifts />
      <Footer />
    </main>
  );
}

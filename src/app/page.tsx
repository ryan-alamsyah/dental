"use client";
import { Section } from "lucide-react";
import Image from "next/image";
import HeroSection from "./fonts/page/Home/HomePage";
import MenuNavbar from "./ui/navbar";
import Product from "./fonts/page/Product/Product";
import ScrollFloat from "@/components/ScrollFloat";
import ReasonPage from "./fonts/page/Product/Reason/ReasonPage";
import FooterPage from "./fonts/page/Footer/Footer";

export default function Home() {
  return (
    <>
      <header>
        <MenuNavbar />
      </header>
      <main className="">
        <section id="home">
          <HeroSection />
        </section>
        <section id="product" className="pt-20 md:pt-8 min-h-screen ">
          <Product />
        </section>
        <section id="reason" className="min-h-screen">
          <ReasonPage />
        </section>
         </main>
        <footer id="footer">
          <FooterPage />
        </footer>
     
    </>
  );
}

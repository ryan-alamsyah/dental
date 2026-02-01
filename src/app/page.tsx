'use client'
import { Section } from "lucide-react";
import Image from "next/image";
import HeroSection from "./fonts/page/Home/HomePage";
import MenuNavbar from "./ui/navbar";
import Product from "./fonts/page/Product/Product";
import ScrollFloat from "@/components/ScrollFloat";
import ReasonPage from "./fonts/page/Product/Reason/ReasonPage";


export default function Home() {
  return (
   <>



  <header>
    <MenuNavbar />
  </header>
  <div className="">


   <section id="home" >
  <HeroSection />
   </section>
   <section id="price" className="pt-20 md:pt-8 min-h-screen " >
   <Product />
 
   </section>
   <section id="reason" className="min-h-screen">
    <ReasonPage />
   </section>
    <section id="reason" className="min-h-screen">
    <ReasonPage />
   </section>
     </div>
   </>
  )
}

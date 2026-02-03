'use client'

import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import CustomImage from "@/app/ui/CustomImage";
import ShinyText from "@/components/ShinyText";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });
    const {refLeft, leftInView} = useInView({triggerOnce: true});
  
    useEffect((): void => {
      if (inView) controls.start({ opacity: 1, x: 0});
    }, [inView]);
     useEffect((): void => {
      if (leftInView) controls.start({ opacity: 1, x: 0});
    }, [leftInView]);
  return (
    <>
      <div className="min-h-screen  md:grid grid-cols-2  duration-300 ease-in-out pt-20 md:pt-8">
         <motion.div
        ref={ref}
        initial={{opacity: 0, x: -600,}}
        animate={controls}
        transition={{duration: 0.6}}
        className="flex justify-center"
        >
        <div className="flex flex-col gap-4 md:px-12 px-4 justify-center">
          <h1 className="text-slate-600 font-bold text-4xl pb-2 md:pb-8">
           <span>Senyum Sehat dan </span>
            <ShinyText
              text=" Berkilau"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
            <br></br>
            Dimulai dari Sini.
          </h1>
          <p className="text-slate-400 md:mb-8 mb-9">
            Perawatan gigi modern dengan teknologi terkini dan pendekatan yang
            lembut untuk seluruh keluarga Anda.
          </p>
          <div className="flex bg-teal-400 rounded-xl w-fit p-2 hover:bg-teal-500  cursor-pointer transition-all duration-700 md:mb-8  mb-9">
            <button>
              <a href="https://wa.me/+6281318695835" className="flex gap-2 text-sm items-center text-slate-800 ">
                Buat Janji Temu <ArrowRight className="w-4 "/>
              </a>
            </button>
          </div>
          <div className="flex flex-col gap-2 md:mb-8">
            <div className="flex items-center gap-2">
              <CustomImage src="/ict1.png" alt="pict1" width={35} height={35} />
              <p className="text-slate-400 text-sm">
                Gratis Konsultasi Pertama
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CustomImage
                src="/pict2.png"
                alt="pict2"
                width={35}
                height={35}
              />
              <p className="text-slate-400 text-sm">
                Rekanan 20+ Asuransi Kesehatan
              </p>
            </div>
          </div>
        </div>
        </motion.div>
 <motion.div
        ref={refLeft}
        initial={{opacity: 0, x: 600,}}
        animate={controls}
        transition={{duration: 0.6}}
        className="flex justify-center"
        >
        <div className="flex  justify-center items-center mt-8 md:mt-0">
          <CustomImage
            src="/Hero.jpg"
            alt="Deskripsi gambar hero"
            width={555}
            height={370}
          />
        </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;

import CustomImage from "@/app/ui/CustomImage";
import { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect((): void => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView]);
 
  return (
    <>
      <div>
        <div className="flex justify-center mb-6 md:pt-8 pt-0">
          <p className="text-center border  px-8 py-2 font-bold rounded-2xl shadow-2xl">
            Layanan
          </p>
        </div>
        <div className="px-4">
          <p className="text-center mb-4">
            Solusi kesehatan gigi keluarga Anda dengan pelayanan yang ramah,
            nyaman, dan transparan.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center px-8 py-8">
        <div className="card shadow-lg flex flex-col gap-2">
          <CustomImage src="/pict1.png" alt="Scalling" width={65} height={65} />
          <h1 className="font-bold text-2xl">Scalling</h1>
          <p>
            Ucapkan selamat tinggal pada plak dan bau mulut. Gigi bersih
            maksimal, napas jadi lebih segar!
          </p>
        </div>
        <motion.div
        ref={ref}
        initial={{opacity: 0, y: 150}}
        animate={controls}
        transition={{duration: 0.6}}
        >
           <div className="card shadow-lg flex flex-col gap-2">
          <CustomImage
            src="/pict5.png"
            alt="Tambal_gigi"
            width={50}
            height={60}
          />
          <h1 className="font-bold text-2xl">Tambal Gigi</h1>
          <p>
            Kembalikan fungsi gigi yang berlubang dengan bahan tambalan estetik
            yang warnanya menyatu alami dengan gigi asli
          </p>
        </div>
        </motion.div>
       
         <motion.div
        ref={ref}
        initial={{opacity: 0, y: 150}}
        animate={controls}
        transition={{duration: 1}}
        >
        <div className="card shadow-lg flex flex-col gap-2">
          <CustomImage
            src="/pict6.png"
            alt="Cabut_gigi"
            width={65}
            height={65}
          />
          <h1 className="font-bold text-2xl">Pencabutan Gigi</h1>
          <p>
            Prosedur ekstraksi gigi yang aman dan steril untuk menjaga kesehatan
            jaringan gusi di sekitarnya.
          </p>
        </div>
        </motion.div>
        <div className="card shadow-lg flex flex-col gap-2">
          <CustomImage
            src="/pict4.png"
            alt="Orotodonsia"
            width={65}
            height={65}
          />
          <h1 className="font-bold text-2xl">Ortodonsia</h1>
          <p>
            Miliki senyum rapi dan susunan gigi impian untuk meningkatkan
            kepercayaan diri Anda setiap hari.
          </p>
        </div>
        <div className="card shadow-lg flex flex-col gap-2">
          <CustomImage src="/pict3.png" alt="Bleacing" width={65} height={65} />
          <h1 className="font-bold text-2xl">Bleaching</h1>
          <p>
            Dapatkan gigi putih cemerlang hanya dalam satu kali kunjungan. Siap
            tampil maksimal di setiap momen
          </p>
        </div>
       
     
        <div className="card shadow-lg flex flex-col gap-2" >
          
          <CustomImage src="/pict1.png" alt="Denture" width={65} height={65} />
          <h1 className="font-bold text-2xl">Denture</h1>
          <p>
            Solusi bagi gigi yang hilang agar Anda bisa kembali makan dengan
            nyaman dan tersenyum tanpa ragu.
          </p>
        </div>
        
      </div>
    </>
  );
};

export default Product;

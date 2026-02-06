import CustomImage from "@/app/ui/CustomImage";
import { useEffect, useState } from "react";
import SplitText from "@/components/SplitText";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product = () => {
  return (
    <>
      <div className="flex justify-center mb-6 md:pt-8 pt-0">
        <p className="text-center border  px-8 py-2 font-bold rounded-2xl shadow-2xl">
          Layanan
        </p>
      </div>

      <div className="px-4">
        <SplitText
          text="Solusi kesehatan gigi keluarga Anda dengan pelayanan yang ramah,
          nyaman, dan transparan."
          className=" flex flex-wrap gap-1 justify-center"
          delay={150}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className="flex flex-wrap gap-8 justify-center p-8  ">
        <motion.div
          initial={{ opacity: 0, y: 30 }} // Mulai dari bawah
          whileInView={{ opacity: 1, y: 0 }} // Muncul saat masuk layar
          viewport={{ once: true, amount: 0.6 }} // Muncul saat 20% elemen terlihat
          transition={{ duration: 0.6 }}
        >
          <div className="card shadow-lg flex flex-col gap-2">
            <CustomImage
              src="/pict1.png"
              alt="Scaling"
              width={65}
              height={65}
            />
            <h1 className="font-bold text-2xl">Scaling</h1>
            <p>
              Ucapkan selamat tinggal pada plak dan bau mulut. Gigi bersih
              maksimal, napas jadi lebih segar!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} // Mulai dari bawah
          whileInView={{ opacity: 1, y: 0 }} // Muncul saat masuk layar
          viewport={{ once: true, amount: 0.6 }} // Muncul saat 20% elemen terlihat
          transition={{ duration: 0.6 }}
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
              Kembalikan fungsi gigi yang berlubang dengan bahan tambalan
              estetik yang warnanya menyatu alami dengan gigi asli
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }} // Mulai dari bawah
          whileInView={{ opacity: 1, y: 0 }} // Muncul saat masuk layar
          viewport={{ once: true, amount: 0.6 }} // Muncul saat 20% elemen terlihat
          transition={{ duration: 0.6 }}
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
              Prosedur ekstraksi gigi yang aman dan steril untuk menjaga
              kesehatan jaringan gusi di sekitarnya.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} // Mulai dari bawah
          whileInView={{ opacity: 1, y: 0 }} // Muncul saat masuk layar
          viewport={{ once: true, amount: 0.6 }} // Muncul saat 20% elemen terlihat
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} // Mulai dari bawah
          whileInView={{ opacity: 1, y: 0 }} // Muncul saat masuk layar
          viewport={{ once: true, amount: 0.6 }} // Muncul saat 20% elemen terlihat
          transition={{ duration: 0.6 }}
        >
          <div className="card shadow-lg flex flex-col gap-2">
            <CustomImage
              src="/pict3.png"
              alt="Bleaching"
              width={65}
              height={65}
            />
            <h1 className="font-bold text-2xl">Bleaching</h1>
            <p>
              Dapatkan gigi putih cemerlang hanya dalam satu kali kunjungan.
              Siap tampil maksimal di setiap momen
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} // Mulai dari bawah
          whileInView={{ opacity: 1, y: 0 }} // Muncul saat masuk layar
          viewport={{ once: true, amount: 0.6 }} // Muncul saat 20% elemen terlihat
          transition={{ duration: 0.6 }}
        >
          <div className="card shadow-lg flex flex-col gap-2">
            <CustomImage
              src="/pict1.png"
              alt="Denture"
              width={65}
              height={65}
            />
            <h1 className="font-bold text-2xl">Denture</h1>
            <p>
              Solusi bagi gigi yang hilang agar Anda bisa kembali makan dengan
              nyaman dan tersenyum tanpa ragu.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Product;

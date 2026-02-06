import Link from "next/link";
import { Instagram } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";

const FooterPage = () => {
  return (
    <>
      <div className="bg-teal-100  pt-8 pb-2">
        <div className="md:flex  justify-between md:px-16 px-4 md:gap-0 gap-4 mb-8  ">
          <motion.div
            initial={{ opacity: 0, y: 30 }} // Mulai dari bawah
            whileInView={{ opacity: 1, y: 0 }} // Muncul saat masuk layar
            viewport={{ once: true, amount: 0.6 }} // Muncul saat 20% elemen terlihat
            transition={{ duration: 0.6 }}
          >
            <div className="w-56 flex flex-col gap-4 mb-8 md:mb-0">
              <h1 className="text-[#1CE392] font-bold text-2xl">
                Nafisha Dental
              </h1>
              <p className="text-slate-500">
                Klinik gigi keluarga terpercaya di cibubur dengan layanan
                spesialis bedah mulut, ortodonti, dan konservasi gigi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} // Mulai dari bawah
            whileInView={{ opacity: 1, y: 0 }} // Muncul saat masuk layar
            viewport={{ once: true, amount: 0.6 }} // Muncul saat 20% elemen terlihat
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4 mb-8 md:mb-0">
              <h1 className="font-bold ">Navigasi</h1>
              <Link href="#home" className="text-sm  ">
                Home
              </Link>
              <Link href="#price" className="text-sm">
                Layanan
              </Link>
              <Link href="#reason" className="text-sm">
                Pasien
              </Link>
              <Link href="#" className="text-sm">
                Edukasi
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} // Mulai dari bawah
            whileInView={{ opacity: 1, y: 0 }} // Muncul saat masuk layar
            viewport={{ once: true, amount: 0.6 }} // Muncul saat 20% elemen terlihat
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4 mb-8 md:mb-0">
              <h1 className="font-bold ">Jam Operasional</h1>
              <div className="flex gap-4">
                <div>
                  <p className="text-slate-500 text-sm ">Senin - Jum'at</p>
                  <p className="text-slate-500 text-sm ">Sabtu</p>
                  <p className="text-[#F25D98] text-sm ">Ahad</p>
                </div>
                <div>
                  <p className="text-sm ">10:00 - 21:00</p>
                  <p className="text-sm ">10:00 - 16:00</p>
                  <p className="text-[#F25D98] text-sm">Tutup</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} // Mulai dari bawah
            whileInView={{ opacity: 1, y: 0 }} // Muncul saat masuk layar
            viewport={{ once: true, amount: 0.6 }} // Muncul saat 20% elemen terlihat
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <h1 className="font-bold ">Hubungi kami</h1>
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-white rounded-lg flex justify-center flex-col items-center gap-2">
                  <Instagram className="text-[#F25D98]" />
                  <span className="text-xs font-semibold">Instagram</span>
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex justify-center flex-col items-center gap-2">
                  <FaWhatsapp className="text-emerald-500 text-2xl" />
                  <span className="text-xs">Whatsapp</span>
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex justify-center flex-col items-center gap-2">
                  <FaEnvelope className="text-blue-800 text-xl" />
                  <span className="text-xs">E-mail</span>
                </div>
              </div>
              <div className="flex gap-2">
                <FaLocationDot className="text-red-700" />
                <span className="text-xs">
                  Jalan Alternatif Kesehatan, Cibubur Jakarta Timur{" "}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center items-center">
          <span className="text-slate-500 text-xs ">
            &copy; Ryan Alamsyah - 2026
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterPage;

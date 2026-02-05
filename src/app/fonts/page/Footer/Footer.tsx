import Link from "next/link";
import { Instagram } from "lucide-react";


const FooterPage = () => {
  return (
    <>
    <div className="flex justify-evenly ">

    
      <div className="w-56 flex flex-col gap-4" >
        <h1 className="text-[#1CE392] font-bold text-2xl">Nafisha Dental</h1>
        <p className="text-slate-500">
          Klinik gigi keluarga terpercaya di Cibubur dengan layanan spesialis
          bedah mulut, ortodonti, dan konservasi gigi.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1>Navigasi</h1>
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
      <div >
        
          <h1>Jam Operasional</h1>
          <div className="flex gap-4">
          <div>
            <p>Senin - Jum'at</p>
            <p>Sabtu</p>
            <p>Ahad</p>
          </div>
          <div>
            <p>10:00 - 21:00</p>
            <p>10:00 - 16:00</p>
            <p>Tutup</p>
          </div>
        </div>
      </div>

      <div >
        <h1 className="font-bold ">Hubungi kami</h1>
        <div className="w-20 h-20 bg-white rounded-lg flex justify-center flex-col items-center gap-2">
         <Instagram className="text-[#F25D98]" />
         <span className="text-xs">Instagram</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default FooterPage;

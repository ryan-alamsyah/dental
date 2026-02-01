import CustomImage from "@/app/ui/CustomImage";
import { Microchip, Award, Leaf, HandHeart } from "lucide-react";

const ReasonPage = () => {
  return (
    <>
      <div className="pt-20 md:px-14 px-4 pb-10">
        <h1 className="text-2xl font-bold">Alasan Pasien Setia</h1>
        <span className="text-[#1CE392] font-bold text-2xl">
          Memilih Nafisha Dental
        </span>
        <div className="flex justify-center relative">
          <div className="w-[80%] h-[200px]  rotate-2 rounded-lg mt-12 flex  bg-slate-500">
            <CustomImage
              alt="clinic"
              src="/clinic.jpg"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:mt-2 mt-8">

     
        <div className="flex gap-4">
          <div className=" md:w-12 md:h-12 h-10 w-10 px-2 custom-radius flex items-center justify-center">
            <Microchip className="text-teal-500 h-6" />
          </div>
          <div>
            <p className="font-bold">Teknologi Modern</p>
            <p className="text-slate-500">
              Diagnosis lebih akurat dan prosedur minim rasa sakit dengang
              perangkat digital terkini
            </p>
          </div>
        </div>

        <div className="flex gap-4">
             <div className=" md:w-12 md:h-12 h-10 w-10 px-2 custom-radius flex items-center justify-center">
            <Award className="text-teal-500 h-6" />
          </div>
          <div>
            <p className="font-bold">Dokter Berpengalaman</p>
            <p className="text-slate-500">
              Ditangani oleh spesialis yang ramah, komunikatif, dan bersertifikasi nasional
            </p>
          </div>
        </div>

        <div className="flex gap-4">
            <div className=" md:w-12 md:h-12 h-10 w-10 px-2 custom-radius flex items-center justify-center">
            <Leaf className="text-teal-500 h-6" />
          </div>
          <div>
            <p className="font-bold">Suasana Nyaman</p>
            <p className="text-slate-500">
              Interior klinik yang estetik dan menenangkan untuk menghilangkan kecemasan Anda.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className=" md:w-12 md:h-12 h-10 w-10 px-2 custom-radius flex items-center justify-center">
            <HandHeart className="text-teal-500 h-6" />
          </div>
          <div>
            <p className="font-bold">Harga Transparan</p>
            <p className="text-slate-500">
              Penjelasan biaya di awal tanpa tambahan tersembunyi. Jujur dan terpercaya.
            </p>
          </div>
        </div>
           </div>
      </div>
    </>
  );
};

export default ReasonPage;

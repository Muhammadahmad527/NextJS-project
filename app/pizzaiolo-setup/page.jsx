import Image from "next/image";

export default function PizzaioloSetup() {
  return (
    <section className="pt-[280px] pb-20 px-6 md:px-12 bg-black text-white min-h-screen flex flex-col items-center">
    
      <div className="max-w-5xl w-full flex justify-center">
        <Image
          src="/Pizzaiolo-set-up.webp"
          alt="Pizzaiolo Setup"
          width={1500}
          height={900}
          className="rounded-lg shadow-xl border border-white/20 object-contain"
          priority
        />
      </div>

    </section>
  );
}

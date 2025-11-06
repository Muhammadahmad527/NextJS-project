import Link from "next/link";

export default function StorySection() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-relative flex flex-col justify-center items-center text-center mb-20 "
      style={{ backgroundImage: "url('/storysec.jpg')", }}
    >
      <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center px-4 py-10">
        <h2 className="text-white text-4xl font-bold tracking-wide mb-4">
          OUR STORY
        </h2>

        <div className="text-neutral-300 text-md max-w-2xl leading-relaxed">
          At Pizzaiolo, we bring the true taste of Italy to your table with every
          slice. Our passion for crafting authentic, wood-fired pizzas using the
          freshest ingredients sets us apart. Whether you’re craving a classic
          Margherita or a bold new flavor, every pizza is made with love,
          tradition, and a dedication to quality that you can taste in every
          bite.
        </div>

        <Link
          href="/pizza-catering-form"
          className="mt-6 underline font-bold text-neutral-300"
        >
          ABOUT US
        </Link>
      </div>
    </section>
  );
}

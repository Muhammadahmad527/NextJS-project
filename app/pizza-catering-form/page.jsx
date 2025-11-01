"use client";
import Image from "next/image";
import Link from "next/link";

export default function PizzaCateringForm() {
    return (
        <section className="bg-black text-white">

            { }
            <div className="w-full h-[90vh] relative overflow-hidden">
                <video
                    src="/StoriesNineteen.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide drop-shadow-lg pt-20">
                        Pizza Catering Form
                    </h1>
                </div>
            </div>

            { }
            <div className="max-w-5xl mx-auto px-6 py-16 leading-relaxed">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
                    How It Works
                </h2>

                <p className="text-gray-300 text-[17px] mb-6">
                    We are here to make your party or event planning as easy as possible! We
                    offer a stress free way to entertain your guests with great authentic
                    pizzas and desserts.
                </p>

                <p className="text-gray-300 text-[17px] mb-6">
                    Pizzaiolo Wood Fire Pizza specialise in Neapolitan style pizza,
                    creating delicious wood-fired pizzas for parties, private events,
                    corporate functions, weddings and more!
                </p>

                <ul className="space-y-3 text-gray-300 text-[17px] list-disc pl-6">
                    <li>We will arrive 2 hours before the guests arrive to set up the woodfired oven already primed and ready to cook.</li>
                    <li>Once your guests start to arrive you say “go” & we’ll start serving pizzas on your designated table.</li>
                    <li>We’ll rotate between your selected pizzas throughout the service.</li>
                    <li>We make & serve pizzas until your guests are full — nobody leaves hungry.</li>
                    <li>We finish the night with dessert pizzas or other Italian desserts of your choice.</li>
                </ul>

                <div className="mt-10 text-gray-200 text-lg font-medium space-y-2">
                    <p><strong>Package 1:</strong> $27 per person — Minimum charge: $1650</p>
                    <p><strong>Package 2:</strong> $30 per person — Minimum charge: $1650</p>
                    <p className="text-[15px] text-gray-400">(Both packages include a 3 hour service)</p>
                </div>

                <p className="mt-8 text-gray-300 text-[17px]">
                    * Travel fee may apply if your location is 25km+ outside the Sutherland Shire area.
                </p>

                { }
                <div className="flex justify-center mt-12">
                    <Link
                        href="https://pizzaiolo-woodfire-pizza.square.site/pizza-catering-form"
                        className="px-4 py-4 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-transparent hover:border-3 transition transform hover:scale-[1.03]"
                    >
                        Click Here to Submit Inquiry
                    </Link>
                </div>

            </div>

            { }
            <div className="max-w-6xl mx-auto px-6 pb-20">
                <Image
                    src="/Pizzaiolo-set-up.webp" 
                    alt="Pizzaiolo Setup"
                    width={1800}
                    height={1000}
                    className="rounded-lg shadow-lg border border-white/20"
                />
            </div>
        </section>
    );
}

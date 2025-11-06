import Link from "next/link";

export default function CateringForm() {
    return (
        <section className="bg-black text-white min-h-screen">

            <div className="w-full h-[90vh] relative overflow-hidden">
                <video
                    src="/StoriesNineteen.mp4"  
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                ></video>

                
                <div className="absolute inset-0 bg-black/40"></div>

                
                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-2xl tracking-wide">
                        Catering Form
                    </h1>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-16 text-center">

                <h2 className="text-3xl font-semibold mb-4">
                    Event Catering
                </h2>

                <p className="text-gray-300 mb-10">
                    Please provide the following information and we will get back to you as soon as possible.
                </p>

                <Link
                    href="https://pizzaiolo-woodfire-pizza.square.site/catering-form" 
                    className="inline-block bg-red-600 text-white px-4 py-4 rounded-full text-md font-semibold hover:bg-transparent hover:border-3 transition"
                >
                    Click Here To Submit Inquiry
                </Link>

            </div>

        </section>
    );
}

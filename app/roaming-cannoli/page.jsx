import Link from "next/link";

export default function RoamingCannoli() {
  return (
    <section className="bg-black text-white min-h-screen">

      
      <div className="w-full h-[100vh] relative overflow-hidden">
        <video
          src="/StoriesNineteen.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        ></video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-2xl tracking-wide pt-20">
            Roaming Cannoli 
          </h1>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-semibold mb-6 text-left">
          Roaming Cannoli Catering Packages – Starting from $600
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6 text-left">
          Bring the sweet charm of Sicily to your next event with our Roaming Cannoli catering experience – a crowd favourite that’s as interactive as it is delicious. Our packages begin with 120 mini cannoli and include one professional server who will roam your venue for one hour, delighting guests with freshly piped cannoli, made to order on the spot.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6 text-left">
          Guests can choose from two classic cannoli fillings, with four topping options available, adding a personal touch to every bite. Whether it’s a wedding, corporate function, or private celebration, our roaming cannoli service creates a fun, memorable experience.
        </p>

        <p className="text-gray-300 leading-relaxed mb-10 text-left">
          Packages are fully customisable to suit your event size, duration, and style.<br />
          Let us bring a taste of Sicily to you – one cannolo at a time.
        </p>

        <h3 className="text-2xl font-semibold mb-10 text-left">
          Roaming Cannoli Catering Packages
        </h3>

        
        <div className="flex justify-center">
          <Link
            href="https://pizzaiolo-woodfire-pizza.square.site/roaming-cannoli"
            className="bg-red-600 text-white px-4 py-4 rounded-full text-md font-semibold hover:bg-transparent hover:border-3 transition"
          >
            Click Here To Submit Inquiry
          </Link>
        </div>
      </div>

    </section>
  );
}

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox when pressing ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const images = [
    // "/Gallery1.jpg",
    // "/Gallery2.jpg",
    // "/Gallery4.jpg",
    "/Gallery5.jpg",
    "/Gallery6.jpg",
    "/Gallery7.jpg",
    "/Gallery8.jpg",
    "/Gallery9.jpg",
    "/Gallery10.jpg",
    "/Gallery11.jpg",
    "/Gallery12.jpg",
    "/Gallery13.jpg",
    "/Gallery3.jpg",
    "/Gallery14.jpg",
    "/Gallery15.jpg",
    "/Gallery16.jpeg",
    "/Gallery17.jpeg",
    "/Gallery18.jpeg",
    "/Gallery19.jpeg",
    "/Gallery20.jpeg",
    "/Gallery21.jpeg",
    "/Gallery22.jpeg",
    "/Gallery23.jpeg",
    "/Gallery24.jpeg",
    "/Gallery25.jpeg",
    "/Gallery26.jpeg",
    "/Gallery27.jpeg",
    "/Gallery28.jpeg",
    "/Gallery29.jpeg",
    "/Gallery30.jpeg",
    "/Gallery31.jpeg",
    "/Gallery32.jpeg",
    "/Gallery33.jpeg",
    "/Gallery34.jpeg",
    "/Gallery35.jpeg",
    "/Gallery36.jpeg",
    "/Gallery37.jpeg",
    "/Gallery38.jpeg",
    "/Gallery39.jpeg",
    "/Gallery40.jpeg",
    "/Gallery41.jpeg",
    "/Gallery42.jpeg",
    "/Gallery43.jpeg",
    "/Gallery44.jpeg",
    "/Gallery45.jpeg",
  ];

  return (
    <section className="pt-[200px] pb-20 px-4 bg-black text-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Gallery
      </h1>

      {/* <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Explore our catered events, authentic woodfire pizzas, and Pizzaiolo experience.
      </p> */}

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Zoom Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999] cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] max-w-5xl h-[80%]">
            <Image
              src={selectedImage}
              alt="Zoomed"
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

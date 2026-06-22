"use client";

import Image from "next/image";
import Link from "next/link";

export interface Villa {
  id: string;
  name: string;
  location: string;
  description: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  pricePerNight: number;
  image: string;
  rating: number;
}

export const villasData: Villa[] = [
  {
    id: "villa-alis",
    name: "Villa Alis",
    location: "Oia, Santorini",
    description: "A meticulously restored cave sanctuary carved directly into the high cliffs of Oia. Features a volcanic rock plunge pool and private sunset deck.",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    pricePerNight: 950,
    image: "/villa_1.png",
    rating: 4.9,
  },
  {
    id: "villa-thalassa",
    name: "Villa Thalassa",
    location: "Imerovigli, Santorini",
    description: "Perched on the highest point of the caldera balcony, this white-arched estate offers complete privacy and sweeping panoramic views.",
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    pricePerNight: 1250,
    image: "/villa_2.png",
    rating: 4.95,
  },
  {
    id: "villa-helios",
    name: "Villa Helios",
    location: "Fira, Santorini",
    description: "A grand contemporary estate combining volcanic stone features with an expansive infinity pool and outdoor fire pit terrace.",
    guests: 8,
    bedrooms: 4,
    bathrooms: 5,
    pricePerNight: 1500,
    image: "/villa_3.png",
    rating: 5.0,
  },
];

export default function FeaturedGrid() {
  return (
    <section id="villas" className="py-24 bg-slate-50 dark:bg-aegean-950/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-aegean-600 dark:text-aegean-400">
            Exclusive Collection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-aegean-900 dark:text-aegean-50 mt-2 mb-4">
            Featured Luxury Estates
          </h2>
          <div className="h-0.5 w-16 bg-aegean-500 dark:bg-aegean-400 mx-auto mb-6" />
          <p className="text-sm md:text-base text-aegean-600/80 dark:text-aegean-300/80 font-light">
            Every property is curated to the highest standard, offering private pools, panoramic caldera views, and exceptional comfort.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {villasData.map((villa) => (
            <div
              key={villa.id}
              className="group bg-white dark:bg-aegean-900/40 border border-slate-200/60 dark:border-aegean-800/30 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={villa.image}
                  alt={villa.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Location Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 dark:bg-aegean-950/95 backdrop-blur-sm text-aegean-850 dark:text-aegean-100 font-medium text-[10px] tracking-widest uppercase rounded shadow-sm">
                  {villa.location.split(",")[0]}
                </div>
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-aegean-950/80 backdrop-blur-sm text-aegean-300 font-medium text-[10px] tracking-widest uppercase rounded flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{villa.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl font-medium text-aegean-900 dark:text-aegean-50">
                    {villa.name}
                  </h3>
                  <span className="text-aegean-500 dark:text-aegean-400 font-serif text-lg font-light">
                    €{villa.pricePerNight}
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-sans tracking-normal">/nt</span>
                  </span>
                </div>

                <p className="text-sm text-aegean-600/80 dark:text-aegean-300/80 font-light mb-6 flex-grow leading-relaxed">
                  {villa.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-slate-100 dark:border-aegean-800/40 text-center text-xs text-slate-600 dark:text-slate-400 font-light mb-6">
                  <div>
                    <span className="block font-semibold text-aegean-700 dark:text-aegean-300">{villa.guests}</span>
                    Guests
                  </div>
                  <div className="border-x border-slate-150 dark:border-aegean-800/40">
                    <span className="block font-semibold text-aegean-700 dark:text-aegean-300">{villa.bedrooms}</span>
                    Bedrooms
                  </div>
                  <div>
                    <span className="block font-semibold text-aegean-700 dark:text-aegean-300">{villa.bathrooms}</span>
                    Baths
                  </div>
                </div>

                {/* Link CTA */}
                <Link
                  href={`/villas/${villa.id}`}
                  className="w-full text-center py-3 bg-transparent border border-aegean-650 hover:bg-aegean-600 hover:text-white dark:border-aegean-500 dark:hover:bg-aegean-500 dark:hover:text-aegean-950 text-aegean-850 dark:text-aegean-300 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded"
                >
                  Request to Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

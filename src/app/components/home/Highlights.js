"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function HighlightsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname === "/" && window.location.hash === "#highlights") {
      const el = document.getElementById("highlights");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]);

  return (
    <section
      id="highlights"
      className="w-full bg-[#fff] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute -top-12 -left-12 w-36 h-36 bg-pink-300 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-spin-slow"></div>

      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#b72960] mb-4">
          ✨ Highlights ✨
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We bring stories to life with joyful animations, a strong community, and magical storytelling that sparks imagination.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row md:justify-around md:items-start gap-12 relative z-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center transition-transform hover:-translate-y-3 duration-300">
          <div className="flex items-center justify-center w-24 h-24 bg-[#ffe0e6] rounded-full shadow-2xl mb-6 border-4 border-[#b72960]">
            <img src="https://img.icons8.com/fluency/48/000000/youtube-play.png" alt="Animations Icon" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#b72960] mb-2">
            Unique Animations 🎥
          </h3>
          <p className="text-gray-600 text-md px-4">
            Eye-catching, original animations that spark wonder and keep fans smiling.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center transition-transform hover:-translate-y-3 duration-300">
          <div className="flex items-center justify-center w-24 h-24 bg-[#fff6db] rounded-full shadow-2xl mb-6 border-4 border-yellow-400">
            <img src="https://img.icons8.com/color/48/000000/community-grants.png" alt="Community Icon" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#ff9900] mb-2">
            Vibrant Community 🤝
          </h3>
          <p className="text-gray-600 text-md px-4">
            A joyful, energetic family where ideas bounce, and creativity shines bright.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center transition-transform hover:-translate-y-3 duration-300">
          <div className="flex items-center justify-center w-24 h-24 bg-[#e0f7ff] rounded-full shadow-2xl mb-6 border-4 border-blue-400">
            <img src="https://img.icons8.com/color/48/000000/light-on--v2.png" alt="Storytelling Icon" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#3b82f6] mb-2">
            Creative Stories ✨
          </h3>
          <p className="text-gray-600 text-md px-4">
            Memorable tales brought to life with adorable characters and bright colors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function HighlightsSection() {
  return (
    <Suspense fallback={<div>Loading highlights...</div>}>
      <HighlightsContent />
    </Suspense>
  );
}

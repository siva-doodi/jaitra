export default function AnimationSection() {
  return (
    // <section className="relative w-full bg-[#E0D0E2] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
    //   <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#EAD9E8] rounded-full opacity-30 animate-bounce"></div>
    //   <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#EAD9E8] rounded-full opacity-30 animate-spin-slow"></div>
    //   <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-[#E3B23C] rounded-full opacity-20 animate-ping"></div>

    //   <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
    //     <div className="flex-1 relative order-2 md:order-1">
    //       <div className="absolute -top-5 -left-5 w-full h-full bg-[#EAF4FA] rounded-3xl z-0"></div>
    //       <img
    //         src="/images/digital-art-style-illustration-graphic-designer.jpg"
    //         alt="Creative animation illustration for kids"
    //         className="relative w-full rounded-3xl shadow-2xl z-10"
    //       />
    //     </div>

    //     <div className="flex-1 text-center md:text-left order-1 md:order-2">
    //       <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A2C2A] mb-6 leading-tight">
    //         Fun <span className="text-[#E3B23C]">Animation</span> for Everyone!
    //       </h2>
    //       <p className="text-[#5E4B56] text-lg mb-4">
    //         We create magical animations that spark joy and imagination for kids and young-at-heart fans worldwide. 🌈✨
    //       </p>
    //       <p className="text-[#5E4B56] text-lg mb-8">
    //         Dive into colorful stories, adorable characters, and playful adventures. Let’s learn and laugh together!
    //       </p>
    //     </div>
    //   </div>
    // </section>

    <section className="w-full bg-[#E0D0E2] py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-6 items-center">

      {/* Left Side - Image & Info Cards */}
      <div className="flex-1 flex gap-6 w-[60%]">
        {/* Left Column */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900">Strong Team</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet.Grid layout with one large image card and two small
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md">
            <img src="/images/unnamed.webp" alt="Luxury Room" className="w-full h-40 object-cover rounded-xl" />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src="/images/jaithra-media-1.webp" alt="Pool" className="w-full h-70 object-cover rounded-xl" />
          </div>

          <div className="bg-[#0C1220] p-6 rounded-xl text-white shadow-md">
            <h3 className="text-lg font-semibold mb-2">Luxury Room</h3>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>


      {/* Right Side - Content */}
      <div className="flex-1 relative w-[40%]">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
        <img src="/images/cityscape.jpg" alt="Cityscape" className="absolute inset-0 w-full h-full object-cover opacity-20" />

        <div className="relative z-20 max-w-md px-5 py-2">
          <p className="uppercase text-sm tracking-widest text-gray-400">About Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight my-4">
            Discover Our Underground.
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-primary-text hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </section>

  );
}

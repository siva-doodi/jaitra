export default function AnimationSection() {
  return (
    <section className="relative w-full bg-[#f5faff] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400 rounded-full opacity-30 animate-spin-slow"></div>
      <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-ping"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="flex-1 relative order-2 md:order-1">
          <div className="absolute -top-5 -left-5 w-full h-full bg-[#e0f2fe] rounded-3xl z-0"></div>
          <img
            src="/images/digital-art-style-illustration-graphic-designer.jpg"
            alt="Creative animation illustration for kids"
            className="relative w-full rounded-3xl shadow-2xl z-10"
          />
        </div>
        <div className="flex-1 text-center md:text-left order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#b72960] mb-6 leading-tight">
            Fun <span className="text-yellow-400">Animation</span> for Everyone!
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            We create magical animations that spark joy and imagination for kids and young-at-heart fans worldwide. 🌈✨
          </p>
          <p className="text-gray-700 text-lg mb-8">
            Dive into colorful stories, adorable characters, and playful adventures. Let’s learn and laugh together!
          </p>
          {/* <a
            href="#"
            className="inline-block bg-yellow-400 text-[#272939] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Explore Now 🚀
          </a> */}
        </div>
      </div>
    </section>
  );
}

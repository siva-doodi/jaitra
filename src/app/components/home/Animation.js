export default function AnimationSection() {
  return (
    <section className="w-full bg-[#E0D0E2] py-24 px-6 md:px-12 lg:px-24">
      
      {/* Title (optional – remove if not needed) */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A2C2A]">
          Our Creative Space
        </h2>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        {/* Top Row */}
        <div className="flex justify-center gap-6">
          <div className="w-[55%] h-[380px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/studioimg.jpg"
              alt="Studio"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[35%] h-[280px] rounded-3xl overflow-hidden shadow-lg self-end">
            <img
              src="/images/studioimg3.jpeg"
              alt="Creative Work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center gap-6">
          <div className="w-[35%] h-[280px] rounded-3xl overflow-hidden shadow-lg self-start">
            <img
              src="/images/studioimg5.jpeg"
              alt="Design Space"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[55%] h-[380px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/studioimg4.jpeg"
              alt="Team Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

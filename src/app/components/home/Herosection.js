"use client";
import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="bg-primary-bg w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 lg:px-24 ">
      <div className=" pt-20 md:text-left md:w-1/2 flex flex-col  md:order-1">
        <h1 className="text-6xl sm:text-4xl lg:text-6xl font-bold text-primary-text leading-tight">
          Explore Our

          <span className="text-3xl md:text-4xl font-normal text-white block pt-3">
            Animations & Stories 🎥✨
          </span>

        </h1>
        <p className="text-white text-sm pt-4 md:text-[16px] leading-relaxed leading-7 lg:text-left">
          We turn ideas into animated worlds that entertain and inspire.
          Join our creative journey and experience the power of storytelling through animation!
        </p>
        <div >
          <Link
            href="/animation"
          >
            <button className="bg-primary-text mt-6 px-6 py-3  text-white rounded-xl shadow-md  transition duration-300">
              Explore Now 🚀
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:w-1/2 md:flex justify-center items-center  md:order-2">
        <Image
          src="/images/Heroimg.png"
          alt="Hero Image"
          width={400}
          height={300}
        />
      </div>
    </section>
  );
}

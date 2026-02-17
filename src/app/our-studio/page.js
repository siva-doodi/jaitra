'use client'

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function OurStudioPage() {
  return (
    <main className="bg-primary-bg text-secondary-text">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full py-20 px-6 md:px-12 bg-[#E6DFE7] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary-text mb-6">
            Our Studio – Professional Shooting & Podcast Space
          </h1>

          <p className="text-[#5E4B56] text-md mb-12 max-w-2xl mx-auto">
            A fully equipped, aesthetic studio space designed for interviews,
            podcasts, reels, and professional video shoots. Just walk in,
            plug in, and start recording.
          </p>

          <p className="mt-4 text-sm md:text-base opacity-90 text-secondary-text">
            Available for hourly and full-day bookings.
          </p>

          <a
            href="#booking"
            className="inline-block mt-8 bg-white text-primary-text font-semibold px-8 py-3 rounded-full hover:scale-105 transition"
          >
            Book the Studio
          </a>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-text mb-6">
            About the Studio
          </h2>

          <p className="text-lg leading-relaxed">
            We have built a modern in-house production studio inside our office
            to support high-quality content creation. The studio is designed with
            professional lighting, acoustic treatment, and ready-to-use recording
            setups so that creators and businesses can shoot without technical hassle.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            Whether you are a YouTuber, business owner, politician, educator, or
            startup — you can book the studio and start recording immediately.
          </p>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary-text mb-10">
            Studio Gallery
          </h2>

          {/* Replace these with real images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Wide Angle Room',
              'Interview Setup',
              'Podcast Mic Setup',
              'Lighting Setup',
              'Background Wall',
              'Camera Setup',
              'Night Lighting'
            ].map((item, i) => (
              <div
                key={i}
                className="h-56 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-medium shadow"
              >
                {item} Photo
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FACILITIES ================= */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-bold text-primary-text mb-4">
              Studio Features
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Fully air-conditioned indoor studio</li>
              <li>Aesthetic background sets</li>
              <li>Acoustic sound treatment</li>
              <li>Noise-controlled environment</li>
              <li>Ready seating arrangements</li>
              <li>Makeup / Preparation area</li>
              <li>Power backup</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary-text mb-4">
              Recording Equipment
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>4K Cameras</li>
              <li>Professional condenser microphones</li>
              <li>Audio interface & mixer</li>
              <li>Softbox & key lighting setup</li>
              <li>RGB background lights</li>
              <li>Tripods & stands</li>
              <li>Monitor preview screen</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-bold text-primary-text mb-4">
              Available Services
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Podcast recording</li>
              <li>Interview shoots</li>
              <li>YouTube video recording</li>
              <li>Reels / Shorts creation</li>
              <li>Educational course recording</li>
              <li>Product shoots</li>
              <li>Political interviews</li>
              <li>Green screen recording (if available)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary-text mb-4">
              Optional Add-On Services (Paid)
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Camera operator</li>
              <li>Video editing</li>
              <li>Thumbnail design</li>
              <li>YouTube upload assistance</li>
              <li>Multi-camera recording</li>
              <li>Live streaming setup</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= WHO CAN USE ================= */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-text mb-8">
            Who Can Use This Studio
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'YouTubers & content creators',
              'Coaches & educators',
              'Startups & businesses',
              'Podcasters',
              'Interview channels',
              'Political media teams',
              'Social media influencers',
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow rounded-xl p-4 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOOKING SECTION ================= */}
      <section id="booking" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-text mb-6">
            Booking Information
          </h2>

          <p className="text-lg">Hourly booking available</p>
          <p className="text-lg">Half-day & full-day packages</p>
          <p className="text-lg">Prior appointment required</p>

          <p className="mt-4 text-lg">
            To check availability and pricing, please contact us directly.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-16 px-6 md:px-12 bg-secondary-bg text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Book the Studio</h2>

        <p className="mb-6 text-lg">
          For quick response, please contact us on WhatsApp.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
          <a className="flex items-center justify-center gap-2 bg-white text-secondary-bg px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Phone size={18} /> +91 XXXXX XXXXX
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="flex items-center justify-center gap-2 bg-green-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>

          <a className="flex items-center justify-center gap-2 bg-white text-secondary-bg px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Mail size={18} /> admin@Jaitra.com
          </a>
        </div>

        <p className="flex justify-center items-center gap-2">
          <MapPin size={18} /> Your Studio Address Here
        </p>
      </section>
    </main>
  )
}

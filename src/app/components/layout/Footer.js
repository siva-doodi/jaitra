'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-gray-100 text-black py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <Image src="/images/footerlogo.jpg" alt="Logo" width={144} height={60} className="mb-4 w-36 h-auto" />
          <p className="text-black text-sm">
            Jaitra Animation. Bringing stories to life with creativity and passion.
            Follow us on social media for the latest updates and animations!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/animation" className="hover:underline">Animation</Link>
         
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Get in Touch</h4>
          <a href="mailto:admin@Jaitra.com" className="text-black text-sm mb-2 block">admin@Jaitra.com</a>
          <p className="text-sm py-2">
            37/A, Susheela Sadan, Vengal Rao Nagar, Hyderabad, Telangana 500038
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#"><img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" className="w-8 h-8" /></a>
            <a href="#"><img src="https://img.icons8.com/color/48/twitter--v1.png" alt="Twitter" className="w-8 h-8" /></a>
            <a href="#"><img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" className="w-8 h-8" /></a>
            <a href="#"><img src="https://img.icons8.com/color/48/youtube-play.png" alt="YouTube" className="w-8 h-8" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm text-gray-600">
        © {year} Jaitra Media. All rights reserved.
      </div>
    </footer>
  );
}

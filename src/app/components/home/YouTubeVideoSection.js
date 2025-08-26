'use client'; // If you're using the App Router

import Image from 'next/image';

const videos = [
  {
    label: 'New',
    badgeColor: '#b72960',
    title: 'Anjali Tv',
    description: 'Discover how AI is transforming patient care and hospital operations in this insightful video.',
    thumbnail: '/images/telugu/Telugu Birds Stories.webp',
    link: 'https://www.youtube.com/@telugubirdsstories',
  },
  {
    label: 'Hot',
    badgeColor: '#db894f',
    title: 'Best Moral Stories',
    description: 'Learn how technology helps hospitals streamline patient bookings and reduce wait times.',
    thumbnail: '/images/telugu/Sitara tv Telugu.webp',
    link: 'https://www.youtube.com/@Sitaratvtelugu1',
  },
  {
    label: 'Top',
    badgeColor: '#db894f',
    title: 'Jabilli Kathalu',
    description: 'Explore how smart dashboards help track real-time data and enhance decision-making.',
    thumbnail: '/images/tamil/Channel logo.webp',
    link: 'https://www.youtube.com/@JaitratvTelugu',
  },
];

export default function YouTubeVideoSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#FBEDED] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-[#F7EBF0] rounded-full opacity-30 animate-ping"></div>

      <div className="max-w-7xl mx-auto text-center mb-14 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-text mb-4">
          🎥 Latest YouTube Videos
        </h2>
        <p className="text-[#5E4B56] text-md max-w-xl mx-auto">
          Catch our newest videos showcasing creative animations and innovations that will inspire you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 overflow-hidden relative group"
          >
            <div
              className="absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-full z-20 shadow-md"
              style={{ backgroundColor: video.badgeColor }}
            >
              {video.label}
            </div>

            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={video.thumbnail}
                alt={`${video.title} Thumbnail`}
                width={500}
                height={400}
                className="w-full h-[260px] object-cover"
              />
            </a>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-[#B2458C] mb-2">{video.title}</h3>
              <p className="text-[#5E4B56] text-sm mb-4 flex-1">{video.description}</p>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-[#E14531] text-white font-medium py-2 px-4 rounded-full hover:bg-[#C13B2C] transition duration-300"
              >
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}

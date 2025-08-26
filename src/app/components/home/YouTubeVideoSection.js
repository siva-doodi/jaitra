'use client'; // If you're using the App Router

import Image from 'next/image';

const videos = [
  {
    label: 'New',
    badgeColor: '#b72960',
    title: 'Anamika TV Atha Kodalu',
    description: 'Discover how AI is transforming patient care and hospital operations in this insightful video.',
    thumbnail: '/images/telugu/Anamika tv telugu atha kodal  new logo.webp',
    link: 'https://www.youtube.com/@anamikatvathakodalu',
  },
  {
    label: 'Hot',
    badgeColor: '#db894f',
    title: 'Stories Dunia',
    description: 'Learn how technology helps hospitals streamline patient bookings and reduce wait times.',
    thumbnail: '/images/telugu/storiesDunia.png',
    link: 'https://www.youtube.com/@storiesduniatelugu',
  },
  {
    label: 'Top',
    badgeColor: '#db894f',
    title: 'Anamika TV Mamiyar Marumagal',
    description: 'Explore how smart dashboards help track real-time data and enhance decision-making.',
    thumbnail: '/images/tamil/Anamika tv tamil  atha kodal  new logo.webp',
    link: 'https://www.youtube.com/@AnamikaTVMamiyarMarumagal',
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
          <a
            href={video.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden min-h-[386px]" // fixed height
          >
            <div className="w-full h-70">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-1">
              <h3 className="text-sm font-semibold line-clamp-2 mb-1">{video.title}</h3>
              <p className="text-xs text-gray-600  line-clamp-3 mb-2">{video.description}</p>
              <div className='flex justify-start'>
                <button
                  type="submit"
                  className="pointer flex justify-start gap-2 items-center shadow-md text-xs bg-gray-50 backdrop-blur-md font-medium isolation-auto border-gray-50 
                    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
                    before:rounded-full before:bg-emerald-500 hover:text-primary-text before:-z-10 before:aspect-square 
                    before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1.5 overflow-hidden border rounded-full group"
                >
                  Explore
                  <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-lg font-bold">
                    →
                  </span>

                </button>

              </div>
            </div>
          </a>
        ))}
      </div>
    </section>

  );
}

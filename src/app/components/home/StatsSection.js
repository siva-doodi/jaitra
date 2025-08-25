'use client'; // if using App Router

import { useEffect, useRef } from 'react';

export default function StatsSection() {
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;

    counters.forEach(counter => {
      const target = +counter.dataset.target;
      const startAttr = counter.dataset.start;
      const start = startAttr && startAttr !== '' ? +startAttr : Math.floor(target / 2);
      let current = start;

      const totalFrames = 100;
      const increment = (target - start) / totalFrames;

      const updateCount = () => {
        if (current < target) {
          current += increment;
          if (current > target) current = target;
          counter.innerText = Math.round(current).toLocaleString();
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            updateCount();
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(counter);
    });
  }, []);

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#fff0f5]">
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#b72960] mb-6">
          Animating Stories, Inspiring Millions
        </h2>
        <p className="text-gray-700 text-md mb-12 max-w-2xl mx-auto">
          Join our vibrant animation community and see how our channels are entertaining audiences worldwide.
        </p>

        <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] m-auto rounded-3xl mt-12 flex flex-col md:flex-row gap-6 p-8 justify-between items-center transition-all duration-300">
          {[
            { color: '#f59e0b', value: 50, start: 30, label: 'Channels', suffix: '+' },
            { color: '#e14531', value: 12, start: 5, label: 'Subscribers', suffix: 'M+' },
            { color: '#b2458c', value: 500, start: 300, label: 'Total Views', suffix: 'M+' },
            { color: '#008080', value: 5000, start: 3500, label: 'Stories', suffix: '+' }
          ].map((item, idx) => (
            <div
              key={item.label}
              className="flex flex-col items-center flex-1 px-4 md:border-r-2 border-[#b72960] last:border-none"
            >
              <div className="flex items-center">
                <p
                  ref={el => (countersRef.current[idx] = el)}
                  className="text-4xl font-extrabold mb-1 counter"
                  data-target={item.value}
                  data-start={item.start}
                  style={{ color: item.color }}
                >
                  0
                </p>
                <span className="text-4xl font-extrabold mb-1" style={{ color: item.color }}>
                  {item.suffix}
                </span>
              </div>
              <p className="text-gray-700 text-center mt-2 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

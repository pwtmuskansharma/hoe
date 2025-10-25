import React, { useState } from 'react';

const sportsData = {
  Summer: [
    { name: 'ARCHERY', img: '/images/sports-images/ARCHERY.webp', icon: '/images/icons/ARCHERY.png'},
    { name: 'ATHLETICS', img: '/images/sports-images/ATHLETICS.webp', icon: '/images/icons/ATHLETICS.png' },
    { name: 'BADMINTON', img: '/images/sports-images/BADMINTON.webp', icon: '/images/icons/BADMINTON.png' },
    { name: 'BASKETBALL', img: '/images/sports-images/BASKETBALL.webp', icon: '/images/icons/BASKETBALL.png' },
    { name: 'BOXING', img: '/images/sports-images/BOXING.webp', icon: '/images/icons/BOXING.png' },
    { name: 'CYCLING', img: '/images/sports-images/CYCLE.webp', icon: '/images/icons/CYCLE.png' },
    { name: 'FOOTBALL', img: '/images/sports-images/FOOTBALL.webp', icon: '/images/icons/FOOTBALL.png' },
    { name: 'SHOOTING', img: '/images/sports-images/SHOOTING.webp', icon: '/images/icons/SHOOTING.png' },
    { name: 'SWIMING', img: '/images/sports-images/SWIMING.webp', icon: '/images/icons/SWIMING.png' },
    { name: 'TABLE TENNIS', img: '/images/sports-images/TABLE TENNIS.webp', icon: '/images/icons/TABLE TENNIS.png' },
    { name: 'TENNIS', img: '/images/sports-images/TENNIS.webp', icon: '/images/icons/TENNIS.png' },
    { name: 'WEIGHTLIFTING', img: '/images/sports-images/WEIGHTLIFTING.webp', icon: '/images/icons/WEIGHTLIFTING.png' },
        { name: 'HANDBALL', img: '/images/sports-images/HENDBALL.webp', icon: '/images/icons/HENDBALL.png' },
    { name: 'HOCKEY', img: '/images/sports-images/HOCKEY.webp', icon: '/images/icons/HOCKEY.png' },
    { name: 'JUDO', img: '/images/sports-images/JUDO.webp', icon: '/images/icons/JUDO.png' },
    { name: 'KABADDI', img: '/images/sports-images/KABADDI.webp', icon: '/images/icons/KABADDI.png' },
    { name: 'VOLLEYBALL', img: '/images/sports-images/VOLLEYBALL.webp', icon: '/images/icons/VOLLEYBALL.png' },
    { name: 'WRESTLING', img: '/images/sports-images/WRESTLING.webp', icon: '/images/icons/WRESTLING.png' },
  ],
  Winter: [
    { name: 'SKIING', img: '/images/sports-images/skiing.webp', icon: '/images/icons/ARCHERY.png' },
    { name: 'ICE HOCKEY', img: '/images/sports-images/icehockey.webp', icon: '/images/icons/ARCHERY.png' },
    { name: 'SNOWBOARDING', img: '/images/sports-images/snowboarding.webp', icon: '/images/icons/ARCHERY.png' },
    { name: 'CURLING', img: '/images/sports-images/curling.webp', icon: '/images/icons/ARCHERY.png' },
  ],
};

const Sports: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Summer' | 'Winter'>('Summer');

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex justify-center">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-lg p-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-900">SPORTS</h1>

        {/* Tabs on top left */}
        <div className="flex justify-start mb-6 border-b border-gray-300">
          {(['Summer', 'Winter'] as const).map((season) => (
            <button
              key={season}
              onClick={() => setActiveTab(season)}
              className={`px-4 py-2 font-semibold transition-colors duration-200 ${
                activeTab === season
                  ? 'text-white bg-blue-900 rounded-t-md'
                  : 'text-blue-900 hover:bg-gray-200 rounded-t-md'
              }`}
            >
              {season}
            </button>
          ))}
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {sportsData[activeTab].map((sport) => (
            <div
              key={sport.name}
              className="relative group  overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon and Text Layer */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white font-bold text-lg md:text-xl tracking-wide opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <img
                  src={sport.icon}
                  alt={sport.name}
                  className="w-48 h-48 object-contain pointer-events-none mb-0 -mb-2"
                />
                <span className="-mt-10 leading-none">{sport.name}</span>
              </div>

              {/* Background Image */}
              <img
                src={sport.img}
                alt={sport.name}
                className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500 brightness-50 group-hover:brightness-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;
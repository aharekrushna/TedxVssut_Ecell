'use client';

import React, { useRef } from 'react';

// Speaker Data
const speakers = [
  {
    name: 'Mr. Arjun Roy',
    title: 'AI Researcher and CTO,',
    company: 'NextGen Tech',
    image: 'speakers/speaker1.jpg',
    about:
      'Arjun Roy is an AI pioneer who has been at the forefront of developing cutting-edge technologies to bridge the gap between humans and machines. With over 15 years of experience, he is passionate about building solutions that make life smarter and more efficient.',
  },
  {
    name: 'Mr. Arjun Roy',
    title: 'AI Researcher and CTO,',
    company: 'NextGen Tech',
    image: 'speakers/speaker1.jpg',
    about:
      'Arjun Roy is an AI pioneer who has been at the forefront of developing cutting-edge technologies to bridge the gap between humans and machines. With over 15 years of experience, he is passionate about building solutions that make life smarter and more efficient.',
  },
  {
    name: 'Mr. Arjun Roy',
    title: 'AI Researcher and CTO,',
    company: 'NextGen Tech',
    image: 'speakers/speaker1.jpg',
    about:
      'Arjun Roy is an AI pioneer who has been at the forefront of developing cutting-edge technologies to bridge the gap between humans and machines. With over 15 years of experience, he is passionate about building solutions that make life smarter and more efficient.',
  },
  {
    name: 'Mr. Arjun Roy',
    title: 'AI Researcher and CTO,',
    company: 'NextGen Tech',
    image: 'speakers/speaker1.jpg',
    about:
      'Arjun Roy is an AI pioneer who has been at the forefront of developing cutting-edge technologies to bridge the gap between humans and machines. With over 15 years of experience, he is passionate about building solutions that make life smarter and more efficient.',
  },
  {
    name: 'Mr. Arjun Roy',
    title: 'AI Researcher and CTO,',
    company: 'NextGen Tech',
    image: 'speakers/speaker1.jpg',
    about:
      'Arjun Roy is an AI pioneer who has been at the forefront of developing cutting-edge technologies to bridge the gap between humans and machines. With over 15 years of experience, he is passionate about building solutions that make life smarter and more efficient.',
  },
  {
    name: 'Mr. Arjun Roy',
    title: 'AI Researcher and CTO,',
    company: 'NextGen Tech',
    image: 'speakers/speaker1.jpg',
    about:
      'Arjun Roy is an AI pioneer who has been at the forefront of developing cutting-edge technologies to bridge the gap between humans and machines. With over 15 years of experience, he is passionate about building solutions that make life smarter and more efficient.',
  },
];

// Speaker Card Component
const SpeakerCard = ({ speaker }) => {
  return (
    <div className="flex-shrink-0  mt-5 bg-gray-800 rounded-lg overflow-hidden shadow-lg  w-[330px] h-[350px] transform transition-transform duration-300 hover:scale-110 hover:bg-opacity-90 hover:bg-black">
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-84 object-cover opacity-100 transition-opacity duration-300 hover:opacity-70"  // Image adjusted to fill the larger card height
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">{speaker.name}</h2>
        <p className="text-sm text-gray-400">{speaker.title}</p>
        <p className="text-sm text-gray-400">{speaker.company}</p>
        <p className="text-sm text-gray-300 absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-90">{speaker.about}</p>
      </div>
    </div>
  );
};

// Main Component
const Speaker = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen text-white p-4 md:p-10"
      style={{
        background: 'linear-gradient(to right, black, #100000 85%, #300000 100%)',
      }}
    >
      {/* Header Section */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold tracking-wide">
          MEET OUR <span className="text-red-600">SPEAKERS</span>
        </h1>
        <p className="mt-4 text-gray-400">
          Visionaries, innovators, and changemakers—all set to take the stage at{' '}
          <span className="text-red-600">TEDxVSSUT 2024</span>.
        </p>
        <p className="text-gray-400">
          Get ready to hear from an inspiring lineup of speakers who will share ideas that
          challenge perspectives and spark transformation.
        </p>
      </div>

      {/* Speaker Cards with Horizontal Scroll */}
      <div className="relative flex justify-center">
        <div
          className="flex overflow-x-scroll scrollbar-hide mx-auto space-x-6"
          ref={scrollContainerRef}
          style={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            maxWidth: 'calc(3* 350px)',
          }}
        >
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </div >
      
      {/* Navigation Buttons */}
      <div className='relative'>
        <div className="  flex space-x-4  justify-center mt-10">
          <button
            onClick={scrollLeft}
            className="px-6 py-1  bg-gray-700 rounded-full hover:bg-gray-600"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="px-6 py-1 bg-gray-700 rounded-full hover:bg-gray-600"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
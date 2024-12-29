import React, { useState, useEffect } from 'react';
import CrewCard from '../TedxVssut_Ecell/src/components/CrewCard';

const crewMembers = [
  {
    name: "Arab Mehtab",
    role: "Organising Team",
    description: "Organizing TEDxVSSUT was an inspiring journey! From coordinating speakers to perfecting details, it was a rewarding experience of teamwork, creativity, and bringing impactful ideas to life.",
    imageUrl: "/img.jpg",
  },
  {
    name: "Jane Smith",
    role: "Speaker",
    description: "Jane is a seasoned speaker known for her insightful talks on innovation and creativity.",
    imageUrl: "/img.jpg",
  },
  {
    name: "John Doe",
    role: "Technical Lead",
    description: "John oversees all technical aspects of the event, ensuring everything runs smoothly.",
    imageUrl: "/img.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Director",
    description: "Emily leads the marketing team, crafting strategies to spread the word about our event.",
    imageUrl: "/img.jpg",
  },
  {
    name: "Michael Brown",
    role: "Logistics Coordinator",
    description: "Michael manages all the logistics, making sure everything is in place for a successful event.",
    imageUrl: "/img.jpg",
  },
  {
    name: "Sophia Williams",
    role: "Creative Director",
    description: "Sophia oversees the creative aspects, ensuring the event is visually stunning and engaging.",
    imageUrl: "/img.jpg",
  },
  {
    name: "Paul Adams",
    role: "Event Planner",
    description: "Paul handles the event planning and scheduling, making sure everything runs on time.",
    imageUrl: "/img.jpg",
  },
  {
    name: "Lisa White",
    role: "Volunteer Coordinator",
    description: "Lisa coordinates all the volunteers, ensuring everyone knows their roles and responsibilities.",
    imageUrl: "/img.jpg",
  }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisible, setNumVisible] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNumVisible(1);
      } else {
        setNumVisible(4);
      }
    };

  
    handleResize();

   
    window.addEventListener('resize', handleResize);

    return () => {
     
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + numVisible) % crewMembers.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [numVisible]);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - numVisible + crewMembers.length) % crewMembers.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + numVisible) % crewMembers.length);
  };

  const visibleCrewMembers = crewMembers.slice(currentIndex, currentIndex + numVisible);

  return (
    <div className="crew-container">
      <h1 className="title">
        <span className="red-text">CREW</span> MEMBERS
      </h1>
      <p className="description">
        Behind every remarkable TEDx event is a passionate and dedicated team.<br />
        working tirelessly to bring ideas to life.
        Meet the individuals who are making<br />
        TEDxVSSUT 2025 a success.
      </p>
      <div className="slider">
        <div className="slides">
          {visibleCrewMembers.map((member, index) => (
            <CrewCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
        <div className="navigation">
          <button onClick={prevSlide} className="prev">‹</button>
          <button onClick={nextSlide} className="next">›</button>
        </div>
      </div>
      <style jsx>{`
        .crew-container {
          padding: 20px;
          text-align: center;
          background-color: black; /* Fully black background */
          color: white;
          min-height: 100vh;
        }
        .title {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .red-text {
          color: #ff0000; /* Red color for the "CREW" text */
        }
        .description {
          margin-bottom: 30px;
          font-size: 1.2rem;
          color: #bbb;
          line-height: 1.5rem; /* Adjust line height */
        }
        .slider {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .slides {
          display: flex;
          transition: transform 0.5s ease-in-out;
          gap: 20px; /* Add some gap between the slides */
        }
        .navigation {
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: space-between;
          top: 50%;
          transform: translateY(-50%);
        }
        .navigation button {
          background-color: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          padding: 10px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .slides {
            flex-wrap: nowrap; /* Keep slides in a single row */
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
















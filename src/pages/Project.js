import React, { useEffect, useRef, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./Project.css";

export default function LearningJourney() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const journeyRef = useRef(null);

  const data = [
    { label: "Dribble", status: "UI Design / HTML", project: "Web Layout Cloning", url: "https://github.com/pradhivetommy-droid/Dribble" },
    { label: "Figma", status: "UI/UX Mockup", project: "Figma App Clone", url: "https://github.com/pradhivetommy-droid/Figma" },
    { label: "igallery", status: "Python / Web", project: "Image Gallery Application", url: "https://github.com/pradhivetommy-droid/igallery" },
    { label: "restweb", status: "HTML/Web Basics", project: "Simple Restaurant Page", url: "https://github.com/pradhivetommy-droid/restweb" },
    { label: "MathServer", status: "Python / Server Logic", project: "Server-Side Computations", url: "https://github.com/pradhivetommy-droid/MathServer" },
  ];

  const handleLinkClick = (url) => window.open(url, "_blank");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    if (journeyRef.current) obs.observe(journeyRef.current);
    return () => journeyRef.current && obs.unobserve(journeyRef.current);
  }, []);

  return (
   <section id="journey" className="pt-0 pb-4 md:mb-[80px]" ref={journeyRef}>


      
      {/* Title */}
     <div className="text-[40px] md:text-[80px] pt-0 pb-2 font-semibold text-black">


        My Repositories
      </div>

      {/* Subtitle */}
      <div className="text-end text-gray-400 p-4">
        A snapshot of my recent GitHub projects (Click to View)
      </div>

      {/* List */}
      {data.map((o, index) => (
        <div
          key={index}
          onClick={() => handleLinkClick(o.url)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="md:pr-10 my-4">
            <div className="repo-item grid grid-cols-10 p-5 items-center">
              
              {/* Repo Name */}
              <div
                className={`col-span-3 text-2xl repo-label ${
                  hoveredIndex === index ? "translate-x-2" : ""
                } transition-all`}
              >
                {o.label}
              </div>

              {/* Status + Project + Arrow */}
              <div className="col-span-7 flex justify-between items-center">

                <div
                  className={`flex gap-4 ${
                    hoveredIndex === index ? "translate-x-2" : ""
                  } transition-all`}
                >
                  <span className="repo-status">{o.status}</span>
                  <span className="repo-project">({o.project})</span>
                </div>

                {/* Arrow */}
                <div
                  className={`arrow-glow ${
                    hoveredIndex === index ? "rotate-90" : "-rotate-45"
                  }`}
                >
                  <ArrowDownwardIcon fontSize="large" />
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

    </section>
  );
}

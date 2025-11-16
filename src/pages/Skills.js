import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
// Removed 'Progress' import as it wasn't used in the return structure
import MongoDb from "./../assets/MongoDB.jpg"; 
import VSCode from "./../assets/Vscode.jpg"; // VSCode is unused but kept for safety
import StarRating from "./Starrating";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef();

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.35,
    });

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  // --- UPDATED DATA ARRAY ---
  // Star to Percentage Mapping (Approximate): 
  // 5 Stars = 100%, 4 Stars = 80%, 3 Stars = 60%, 2 Stars = 40%, 1 Star = 20%
  const data = [
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-9294875-7578018.png?f=webp",
      label: "HTML 5",
      percent: 100, // Changed from 75 to 5 Stars (100%)
    },
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-css-9294881-7578024.png?f=webp",
      label: "CSS",
      percent: 60, // Changed from 65 to 3 Stars (60%)
    },
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png",
      label: "JavaScript",
      percent: 60, // Changed from 75 to 3 Stars (60%)
    },
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-python-9294865-7578008.png?f=webp", // New Python 3D icon
      label: "Python",
      percent: 80, // New: 4 Stars (80%)
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/226/226777.png", // New Java 3D icon
      label: "Java",
      percent: 60, // New: 3 Stars (60%)
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png", // New C 3D icon
      label: "C",
      percent: 60, // New: 3 Stars (60%)
    },
  ];
  // -----------------------------
  
  return (
    <section id="skill" className="p-4" ref={skillRef}>
      <div
        className={`text-[40px] md:text-[80px] p-4 font-semibold ${
          isVisible ? "tracking-in-contract-bck-top" : ""
        } `}
      >
        Skills
      </div>
      <div className="">
        <div className="p-2 border1">
          <div className="!z-20 w-full py-4">
            <div className="text-[20px] md:text-[30px] text-black p-4 text-center font-semibold">
              Technologies I Know{" "}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {data?.map((o, i) => (
                <div className=" flex items-center justify-center ">
                  <div class="flip-card" key={i}>
                    <div class="flip-card-inner">
                      <div class="flip-card-front flex items-center justify-center">
                        {/* Note: I'm using generic online icons for Python, Java, and C for consistency, 
                           as the local paths for these were not provided. */}
                        <img src={o?.img} className="h-full" alt={o?.label} />
                      </div>
                      <div class="flip-card-back flex flex-col items-center justify-center rounded-[40px]">
                        <h1 className="font-bold text1 p-4 text-[24px]">
                          {o?.label}
                        </h1>
                        <StarRating rating={o?.percent} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
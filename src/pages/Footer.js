import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./Footer.css";

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex1, setHoveredIndex1] = useState(null);

  const data = [
    {
      label: "Email",
      value: "ragulpradhive10@gmail.com",
      url: "mailto:ragulpradhive10@gmail.com?subject=Portfolio Inquiry",
    },
    {
      label: "Phone",
      value: "+91 8489690048",
      url: "https://api.whatsapp.com/send/?phone=918489690048&text=Hello%20Ragul,",
    },
  ];

  const data1 = [
    {
      label: "LinkedIn",
      value: "@ragul",
      url: "https://www.linkedin.com/in/ragul-ar-a9a95b374/",
    },
    {
      label: "Insta",
      value: "@ragul",
      url: "https://www.instagram.com/_.rxgul._10?igsh=MWc0bHZrYXh4MnIz&utm_source=qr",
    },
    {
      label: "Github",
      value: "@ragul",
      url: "https://github.com/pradhivetommy-droid",
    },
    {
      label: "Twitter / X",
      value: "@ragul",
      url: "https://x.com/ragul64301?s=11",
    },
  ];

  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    // Changed bg-black to bg-indigo-950 (or use custom hex in style)
    <section id="contact" className="pb-4 p-4 footer-neon-bg">
      {/* --- HEADER DESIGN: Text Fill Underline --- */}
      <div className="py-10 md:py-[60px] overflow-hidden">
        <div className="text-[40px] md:text-[80px] text-white font-extrabold uppercase text-fill-underline">
          Wanna start a
        </div>
        <div className="text-[40px] md:text-[80px] text-white font-extrabold uppercase md:pl-[450px] text-fill-underline">
          New project ?
        </div>
      </div>
      {/* --------------------------------------------- */}

      <div className="md:grid grid-cols-3 gap-10 pt-10">
        {/* --- MAP SECTION --- */}
        <div className="p-4 mb-8 md:mb-0">
          {/* Changed text-gray-400 to text-gray-300 for better visibility */}
          <div className="text-gray-300 text-2xl mb-4">Location</div> 
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.247667988714!2d78.5148491!3d11.2659659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babafa93669852b%3A0xa055b283fa41c397!2sUppiliapuram%2C%20Tamil%20Nadu%20621011!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="300"
            title="Coimbatore Location Map"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-2xl hover:scale-[1.03] transition duration-500"
          ></iframe>
        </div>
        {/* ----------------- */}

        {/* --- CONTACTS LIST --- */}
        <div className="p-4">
          <div className="text-gray-300 text-2xl">Contacts</div>
          {data?.map((o, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleProjectClick(o.url)}
            >
              <div className="pt-8">
                <div
                  className={`grid grid-cols-7 py-4 w-full link-skew-fill items-center text-gray-300`}
                >
                  <div className={`col-span-2 text-white contact-text`}>
                    {o?.label}
                  </div>
                  <div className="col-span-5 flex justify-between items-center">
                    <div className={`contact-text`}>{o?.value}</div>
                    <div
                      className={`text-gray-300 transition-all ${
                        hoveredIndex === index
                          ? "rotate-90 text-[#30e8ff]" // Updated hover color
                          : ""
                      } duration-500`}
                    >
                      <ArrowDownwardIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* --------------------- */}

        {/* --- SOCIAL LINKS --- */}
        <div className="p-4">
          <div className="text-gray-300 text-2xl">Social</div>
          {data1?.map((o, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onMouseEnter={() => setHoveredIndex1(index)}
              onMouseLeave={() => setHoveredIndex1(null)}
              onClick={() => handleProjectClick(o.url)}
            >
              <div className="pt-8">
                <div
                  className={`grid grid-cols-7 py-4 w-full link-skew-fill items-center text-gray-300`}
                >
                  <div className={`col-span-4 text-white contact-text`}>
                    {o?.label}
                  </div>
                  <div className="col-span-3 flex justify-between items-center">
                    <div className={`contact-text`}>{o?.value}</div>
                    <div
                      className={`text-gray-300 transition-all ${
                        hoveredIndex1 === index
                          ? "rotate-90 text-[#ff4081]" // Updated hover color
                          : ""
                      } duration-500`}
                    >
                      <ArrowDownwardIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* -------------------- */}
      </div>

      {/* --- FOOTER BOTTOM TEXT --- */}
      {/* Changed border-gray-700 for better contrast */}
      <div className="p-4 flex flex-col md:flex-row justify-between text-white items-center mt-12 pt-5 border-t-2 border-indigo-900">
        <div className="text-fill-underline-small mb-2 md:mb-0">
          @2025 India
        </div>
        <div className="text-fill-underline-small">
          Developed by : Ragul
        </div>
      </div>
      {/* -------------------------- */}
    </section>
  );
}
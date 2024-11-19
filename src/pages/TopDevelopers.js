import React, { useState } from "react";

const developers = [
  { name: "Azizi Developments", image: require("../assets/AZIZI_IMAGE.jpg") },
  { name: "BnW Developments", image: require("../assets/Aqua_arc_BNW.jpg") },
  { name: "DAMAC Properties", image: require("../assets/DAMAC_image.jpg") },
  { name: "Emaar Properties", image: require("../assets/EMAAR_IMAGE.jpg") },
  { name: "Danube Properties", image: require("../assets/Danube_image.jpg") },
  { name: "Sobha Realty", image: require("../assets/SOBHA_IMAGE.jpg") },
  {
    name: "Ellington Properties",
    image: require("../assets/Ellington_Belgrove_image.jpg"),
  },
  {
    name: "Prestige One Developments",
    image: require("../assets/Prestige_One-Seaside.jpg"),
  },
  {
    name: "Samana Developers",
    image: require("../assets/SAMANA_IBIZA_image.jpg"),
  },
];

const projects = [
  "Venice",
  "The Valley",
  "GolfHillSide",
  "Marina Cove",
  "The Suncity",
  "Violet Hills-2",
  "DAMAC-Islands",
  "One River Point",
  "Mercer House",
  "Belgrove Residences",
  "Palaya Del Sol",
  "The Highgrove",
  "Solis",
  "Ibiza",
  "Aqua Arc",
  "SeaSide",
];

const developer = [
  "Emaar Properties",
  "Azizi Developments",
  "DAMAC Properties",
  "Sobha Realty",
  "Ellington Properties",
  "Samana Developers",
  "BnW Developments",
  "Prestige One Developments",
  "Danube Properties",
];

const Footer = ({ projects, developers }) => {
  return (
    <div className="mt-16 text-white text-left">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-yellow-400 pb-3">
          | Dubai Projects
        </h2>
        <p className="text-sm">
          {projects.map((project, index) => (
            <span key={index}>• {project} </span>
          ))}
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold text-yellow-400 pb-3">
          | Top Developers
        </h2>
        <p className="text-sm">
          {developers.map((developer, index) => (
            <span key={index}>• {developer} </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const TopDevelopers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const developersPerPage = 6;

  // Slice developers based on the current page and developersPerPage
  const currentDevelopers = developers.slice(
    (currentPage - 1) * developersPerPage,
    currentPage * developersPerPage
  );

  const handleNext = () => {
    if (currentPage < Math.ceil(developers.length / developersPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <p className="text-white font-normal mb-6 text-yellow-400">
        CHOOSE YOUR DEVELOPER
      </p>
      <p className="text-white text-3xl sm:text-5xl font-normal mb-12">
        TOP DEVELOPERS
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentDevelopers.map((developer, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg border-2 border-yellow-700"
          >
            <img
              src={developer.image}
              alt={developer.name}
              className="w-full h-56 object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">
                {developer.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md"
        >
          &gt;
        </button>
      </div>

      {/* Render the Footer only on the second page */}
      {currentPage === 2 && (
        <Footer projects={projects} developers={developer} />
      )}
    </div>
  );
};

export default TopDevelopers;

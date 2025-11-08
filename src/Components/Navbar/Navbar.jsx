import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const [activeSection, setActiveSection] = useState(false);
  const [isscrolled, setIsscrolled] = useState(false);

  //Check scroll and change navbar Background

  useEffect(() => {
    const handleScroll = () => {
      setIsscrolled(window.scrollY > 50);

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll",handleScroll)
    };
  },  []);

  //smooth transiction

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const menuItems = [
    {
      id: "about",
      label: "About",
    },
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "work",
      label: "Work",
    },
    {
      id: "education",
      label: "Education",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw]
        ${
          isscrolled
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* logo */}

        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Sakshi</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Kharche</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

{/* Social media icon */}

          <div className="hidden md:flex space-x-4">
            <a href="#" target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]">

            <FaGithub size={24}/>

            </a>
            <a href="#" target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]">

            <FaLinkedin size={24}/>

            </a>


          </div>


          {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isopen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsopen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsopen(true)}
            />
          )}
        </div>
     {/* Mobile Menu Items */}
      {isopen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}

      </div>
    </nav>
  );
};

export default Navbar;

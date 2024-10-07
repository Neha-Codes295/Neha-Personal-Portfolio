import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            FIND ME ON
          </h2>
          <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/neha-iiitu/" target="_blank" rel="noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/Neha-Codes295/" target="_blank" rel="noreferrer">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>

          <a href="https://www.instagram.com/itsneha_295/" target="_blank" rel="noreferrer">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          </div>
        </div>
        {/* <br/> */}
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div> 
        </div> */}
      </div>
  )
}

export default Media
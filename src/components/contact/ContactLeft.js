import React from 'react'
import {  FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Neha</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack MERN Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Thank you for having a look at my portfolio! 🌟
        <br/>
         I'm always open to new opportunities and collaborations and let's embark on this exciting journey together!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9876331860</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">
            <a href="mailto:neha.contact295@gmail.com" className="text-lightText hover:underline">neha.contact295@gmail.com</a>
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">FIND ME ON</h2>
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
    </div>
  );
}

export default ContactLeft;

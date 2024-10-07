import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Programmer", "MERN Stack Enthusiast", "UI Designer", "Open Source Contributor"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Welcome to My World</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Neha</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Greetings! 👋 
        <br/>
I'm a dedicated Web Developer and Tech Enthusiast with a strong background in Computer Science Engineering. I specialize in full-stack development, particularly using the MERN stack, where I excel at turning concepts into seamless, interactive digital solutions. My passion lies in crafting user-centric applications that address real-world challenges, and I continuously strive to expand my knowledge and expertise in emerging technologies. Let's collaborate to create innovative solutions and make a lasting impact in the tech world!
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Campus Ambassador"
            subTitle="IIT Bombay (July 2024 - Present)"
            result="💼"
            des="Promoted IIT Bombay's events and programs within campus and local communities. Coordinated outreach efforts and collaborated with student organizations for event participation."
          />
          {/* Other experience cards can go here */}
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Tech Skills</h2>
        </div>
        <div className="mt-6 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Languages"
            subTitle="C/C++, JavaScript, Python"
            result="🌐"
            des="Proficient in various programming languages essential for software development."
          />
          <ResumeCard
            title="Full-Stack (MERN)"
            subTitle="HTML, CSS, MongoDB, React, Node.js, Express.js"
            result="👩🏻‍💻"
            des="Experienced in building full-stack applications using the MERN stack."
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Positions of Responsibility</h2>
        </div>
        <div className="mt-6 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Women Office Representative"
            subTitle="Astronomy Club, IIIT Una (2024 - Present)"
            result="🌟"
            des="Representing the interests of women in the Astronomy Club and promoting inclusivity."
          />
          <ResumeCard
            title="Women Office Representative Member"
            subTitle="Entrepreneurship Cell, IIIT Una (2023 - Present)"
            result="💼"
            des="Assisting in promoting women’s participation in entrepreneurship initiatives."
          />
          <ResumeCard
            title="Decoration Team Head"
            subTitle="EPMOC, IIIT Una (2022 - Present)"
            result="🎨"
            des="Leading the decoration team for events, ensuring a creative and appealing atmosphere."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

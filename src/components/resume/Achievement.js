import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p> */}
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Silver Medal - Revise DSA Challenge"
            subTitle="ProElevate with Arsh Goyal (Aug, 2024)"
            result="Silver Medal"
            des="Secured the Silver Medal in the 'Revise DSA Challenge,' showcasing proficiency in data structures and algorithms."
          />
          <ResumeCard
            title="Second Position - MIC DROP 2.0"
            subTitle="EUNOIA, IIIT Una (Feb, 2024)"
            result="Second Position"
            des="Achieved second place in MIC DROP 2.0, a public speaking event held at IIIT Una."
          />
          <ResumeCard
            title="DIVA Position - DSA Coding Challenge"
            subTitle="AlgoUniversity (Aug, 2023)"
            result="DIVA Position"
            des="Secured the prestigious DIVA position in the DSA Coding Challenge organized by AlgoUniversity."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;

import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="B.Tech - Computer Science & Engineering"
            subTitle="Indian Institute of Information Technology, Una (2022-Present)"
            result="8.06 (Current)"
            des="Currently pursuing my B.Tech in Computer Science at IIIT Una, where I have developed a strong foundation in software development, data structures, and algorithms."
          />
          <ResumeCard
            title="Senior Secondary Education (CBSE)"
            subTitle="C.A.K.F.M.S.S. School, Nangal, Punjab (2022)"
            result="93%"
            des="Completed my senior secondary education with a focus on science. Excelled in Mathematics, English, and Physical Education."
          />
          <ResumeCard
            title="Secondary Education (CBSE)"
            subTitle="C.A.K.F.M.S.S. School, Nangal, Punjab (2020)"
            result="94%"
            des="Built a solid academic base with particular strengths in subjects like Mathematics and Science."
          />
        </div>
      </div>

      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
  title="Campus Ambassador"
  subTitle="IIT Bombay (July 2024 - Present)"
  result=""
  des="Promoted IIT Bombay's events and programs within campus and local communities. Coordinated outreach efforts and collaborated with student organizations for event participation."       /> */}
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
          />
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy." */}
        </div>
    </motion.div>
  );
}

export default Education
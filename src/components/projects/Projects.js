import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY GITHUB AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Shopper"
          des="An e-commerce platform built using the MERN stack, featuring product listings, a dynamic cart system, and user authentication to provide a seamless shopping experience."
          src={projectOne}
          githubLink="https://github.com/Neha-Codes295/ShopSmart"
        />
        <ProjectsCard
          title="FoodFlyers"
          des="A food delivery website that connects users with local restaurants. It offers features like user authentication, dynamic menus, order processing, and real-time order tracking."
          src={projectTwo}
          githubLink="https://github.com/Neha-Codes295/FoodFlyers"
        />
        <ProjectsCard
          title="GradeBook"
          des="A web application designed for students and teachers to manage academic records efficiently. It includes features for tracking grades, attendance, and assignments."
          src={projectThree}
          githubLink="https://github.com/Neha-Codes295/GradeBook"
        />
      </div>
    </section>
  );
}

export default Projects;

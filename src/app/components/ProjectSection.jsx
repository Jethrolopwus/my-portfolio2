/* eslint-disable react/jsx-key */
"use client";
import React, {useState, useRef} from 'react'
import ProjectCards from './ProjectCards'
import ProjectTag from './ProjectTag';
import {motion, useInView} from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Infinity Gem",
        description: "An EdTech solution with over 100 students",
        image: "/images/infinity-gem.png",
        gitUrl: "https://ig.bluehouseng.com/",
        previewUrl: "https://ig.bluehouseng.com/",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Bluehouseng",
        description: "Bluehouse website",
        image: "/images/bluehouseng.png",
        gitUrl: "https://www.bluehouseng.com/",
        previewUrl: "https://www.bluehouseng.com/",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "Jos Techfest",
        description: "A website to regiter for  tech festival in Jos Plateau state",
        image: "/images/jostechfest.png",
        gitUrl: "https://tech-fest.bluehouseng.com/",
        previewUrl: "https://tech-fest.bluehouseng.com/",
        tag: ["All", "Web"]
    },
    {
        id: 4,
        title: "Fitness app",
        description: "Your best fitness web application",
        image: "/images/fitness-app.png",
        gitUrl: "https://physical-fitness-web-app.vercel.app/",
        previewUrl: "https://physical-fitness-web-app.vercel.app/",
        tag: ["All", "Web"]
    },
    {
        id: 5,
        title: "Cyfrin frontend",
        description: "This is a block chain company that is into web3 training Just their home page",
        image: "/images/cyfrin.png",
        gitUrl: "https://cyfrin-frontend.vercel.app/",
        previewUrl: "https://cyfrin-frontend.vercel.app/",
        tag: ["All", "Web"]
     },
    {
        id: 6,
        title: "Meta",
        description: "A simple revenue landing page for Metadata",
        image: "/images/revenue.png",
        gitUrl: "https://revenue-app-frontend.vercel.app/",
        previewUrl: "https://revenue-app-frontend.vercel.app/",
        tag: ["All", "Web"]
    }
]

const ProjectSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
const [tag, setTag] = useState("All");
const handleTagChange = (newTag) =>{
    setTag(newTag);
};

const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
);
const cardVariants = {
    initial: {y: 50, opacity: 0.5},
    animate: {y: 0, opacity: 1},
}; 

  return (
    <section >
        <h2 className='mt-4 text-white text-center text-xl font-bold'>My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-8 py-6">
           <ProjectTag onClick={handleTagChange} name="All"
            isSelected={tag ==="All"}
             />
           <ProjectTag onClick={handleTagChange} name="Web"
            isSelected={tag ==="Web"}
             />
           <ProjectTag onClick={handleTagChange} name="Mobile"
            isSelected={tag ==="Mobile"}
             />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
                <motion.li 
                key={index} 
                variants={cardVariants} 
                initial="initial"
                 animate={isInView ? "animate" : "initial"}
                 transition={{duration:0.3,delay: index * 0.4}}
                 >
                    <ProjectCards
                    key={project.id} 
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    />
                </motion.li> 
             ))}
        </ul>
        <hr />
    </section>
  )
}

export default ProjectSection
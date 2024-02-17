"use client";
import React from 'react'
import ProjectCards from './ProjectCards'

const projectData = [
    {
        id: 1,
        title: "Infinity Gem",
        description: "project 1 description",
        image: "/src/app/images/infinity-gem.png",
        tag: ["All", "web"]
    },
    {
        id: 2,
        title: "Bluehouseng",
        description: "project 2 description",
        image: "/src/app/images/bluehouseng.png",
        tag: ["All", "web"]
    },
    {
        id: 3,
        title: "Jos Techfest",
        description: "project 3 description",
        image: "/src/app/images/jostechfest.png",
        tag: ["All", "web"]
    },
    {
        id: 4,
        title: "Fitness app",
        description: "project 4 description",
        image: "/src/app/images/fitness-app.png",
        tag: ["All", "web"]
    },
    {
        id: 5,
        title: "Cyfrin frontend",
        description: "project 5 description",
        image: "/src/app/images/cyfrin.png",
        tag: ["All", "web"]
    },
    {
        id: 6,
        title: "Meta",
        description: "project 6 description",
        image: "/src/app/images/revenue.png",
        tag: ["All", "web"]
    }
]



const ProjectSection = () => {
  return (
    <>
    <h2>My Projects</h2>
    <div>
        {projectData.map((project) => (
        <ProjectCards
         key={project.id} 
         title={project.title}
        description={project.description}
        imgUrl={project.image}
         /> ))};
         </div>

    </>
  )
}

export default ProjectSection
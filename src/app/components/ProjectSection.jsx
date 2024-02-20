"use client";
import React, {useState} from 'react'
import ProjectCards from './ProjectCards'
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Infinity Gem",
        description: "project 1 description",
        image: "/images/infinity-gem.png",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Bluehouseng",
        description: "project 2 description",
        image: "/images/bluehouseng.png",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "Jos Techfest",
        description: "project 3 description",
        image: "/images/jostechfest.png",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All", "Web"]
    },
    {
        id: 4,
        title: "Fitness app",
        description: "project 4 description",
        image: "/images/fitness-app.png",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All", "Web"]
    },
    {
        id: 5,
        title: "Cyfrin frontend",
        description: "project 5 description",
        image: "/images/cyfrin.png",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All", "Web"]
     },
    {
        id: 6,
        title: "Meta",
        description: "project 6 description",
        image: "/images/revenue.png",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All", "Web"]
    }
]

const ProjectSection = () => {
const [tag, setTag] = useState("All");
const handleTagChange = (newTag) =>{
    setTag(newTag);
};

const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
);

  return (
    <>
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
        <div>
            {filteredProjects.map((project) => (
            <ProjectCards
            key={project.id} 
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            /> ))}
        </div>
        <hr />
    </>
  )
}

export default ProjectSection
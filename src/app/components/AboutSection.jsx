"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import dell from "@/app/images/dell.png";
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Tailwindcss</li>
        <li>typescript</li>
        <li>React</li>
        <li>Nextjs</li>
      </ul>
    )
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Code Plateau</li>
        <li>Bluehouse Technologies</li>
        <li>Plateau State University</li>

      </ul>
    )
  },
  {
    title: "certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Digital Skills Certification, Code Plateau</li>
        <li>Digita Marketing Google for Africa</li>
        <li>Front end Developer at Bluehouse Technologies</li>
        <li>Bsc. Chemistry </li>
       
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition ] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white' id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
           <div>
            <Image 
            src={dell} alt="about-section" 
            className="border-2  border-slate-900 " width={400} height={300}
             />
           </div>
           <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className='text-base md:text-lg'>I am a front end  web developer with a passion in creating interactive and responsive web application.
                I have experience working with HTML , CSS, JavaScript, TailwindCSS, Typescript,  Git, React, Nextjs. I am an adict learner
                looking to expand my knowledge and skill set. I am also a teram player and I am excited to work with others to create amazing applications. 
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton 
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}
                > {" "}
                 Skills {" "}
              </TabButton>
              <TabButton 
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"}
                > {" "}
                 Education {" "}
              </TabButton>
              <TabButton 
                selectTab={() => handleTabChange("certification")} 
                active={tab === "certification"}
                > {" "}
                 Certification {" "}
              </TabButton>
            </div>
              <div className="mt-8"> {TAB_DATA.find((t) => t.id === tab).content}

              </div>
           </div>
        </div>
    </section>
  )
}

export default AboutSection
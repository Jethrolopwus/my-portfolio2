import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyle = isSelected
    ? "text-white  border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:text-white"

  return (
    <button className={`${buttonStyle}"rounded-full border-2 text-xl px-3 py-3 cursor-pointer"`}
    onClick={() =>onClick(name)}>
       {name}
    </button>

  )
}

export default ProjectTag
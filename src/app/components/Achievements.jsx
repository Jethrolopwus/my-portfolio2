import React from 'react'

const Achievements = () => {

    const AchievementsList = [
        {
            metric: "projects",
            value: "20+",
        },
        {
            metric: "Users",
            value: "100+",
        },
        {
            metric: "Years",
            value: "3+",
        }
    ]

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row  items-center justify-between">
        {
            AchievementsList.map((Achievements, index ) => {
                return(
                    <div key={index} className="flex flex-col items-center justify-center mx-4" >
                        <h2 className='text-white text-4xl font-bold'>{Achievements.value}</h2>
                        <p className="text-[#ADB7BE] text-base">{Achievements.metric}</p>
                    </div>
                )

            })
        }
        </div>
    </div>
  )
}

export default Achievements
"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => {return import("react-animated-numbers");
},
// {ssr: false}
);

const Achievements = () => {

    const AchievementsList = [
        {
            metric: "projects",
            value: "20",
            postfix: "+",
        },
        {
            prefix: "~",
            metric: "Users",
            value: "1000",
        },
        {
            metric: "Years",
            value: "3",
            postfix: "+",
        }
    ]

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row  items-center justify-between">
        {
            AchievementsList.map((Achievements, index ) => {
                return(
                    <div key={index} className="flex flex-col items-center justify-center mx-4" >
                        <h2 className='text-white text-4xl font-bold'>
                            {Achievements.prefix}
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={parseInt(Achievements.value)}
                            locale="en-US"
                            className="text-white text-4xl font-bold flex flex-row"
                            configs={((_, index) =>{
                                return{
                                    mass: 1,
                                    friction: 100,
                                    tension: 140 * (index + 1), 
                                }
                            })}
                            />
                            {Achievements.postfix}
                            </h2>
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
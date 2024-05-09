"use client";
import React from 'react';


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
    function addComma(number) {
        // Convert the number to a string
        let strNumber = String(number);
    
        // Split the string into integer and fractional parts (if any)
        let parts = strNumber.split('.');
    
        // Add commas to the integer part
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
        // Join the integer and fractional parts (if any)
        return parts.join('.');
    }
    
    

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row  items-center justify-between">
        {
            AchievementsList.map((Achievements, index ) => {
                return(
                    <div key={index} className="flex flex-col items-center justify-center mx-4" >
                        <h2 className='text-white text-4xl font-bold'>
                            {Achievements.prefix}
                            <p
                            className="text-white text-4xl font-bold flex flex-row"
                            >{addComma(Achievements.value)}</p>
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
import React from 'react'

import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timelineImage from '../../../assets/Images/boxoffice.png'

const timeline = [
  {
    Logo:Logo1,
    heading:"Leadership",
    description:"Fully commited to the success company",
  },

  {
    Logo:Logo2,
    heading:"Responsibility",
    description:"Students will always be our top priority",
  },

  {
    Logo:Logo3,
    heading:"Flexibility",
    description:"The ability to switch is an important skills",
  },

  {
    Logo:Logo4,
    heading:"Solving the real time problems ",
    description:"Code your way to a solution",
  }

]

const TimeLineSection = () => {
  return (
    <div>
      <div className="flex flex-row gap-16 items-center h-full">
        <div className="w-[45%] flex flex-col gap-7 items-center">
          {
            timeline.map((element,index)=>{
              return(
                <div className="flex flex-row gap-6 " key={index}>

                  <div className="w-[50px] h-[50px] bg-white flex items-center">
                    <img src={element.Logo}/>
                  </div>

                  <div className="ml-[-1rem]">

                    <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                    <p className='text-base'>{element.description}</p>

                  </div>

                </div>
              )
            })
          }
        </div>

        <div className="relative shadow-blue-200">
          <img src={timelineImage} alt="" className='shadow-lg h-[20rem] ml-[-70px] object-cover hover:scale-105 hover:z-10 duration-500 transition-all cursor-pointer ease-in-out  shadow-black'/>
        </div>

       <div className="absolute bg-caribbeangreen-700 flex flex-row mt-[26rem] ml-[41.25rem] z-[-10] text-white uppercase py-10">
        
        <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-8">
          <p className='text-3xl font-bold'>10</p>
          <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
        </div>

        <div className="flex gap-5 items-center px-7">
        <p className='text-3xl font-bold'>250</p>
        <p className='text-caribbeangreen-300 text-sm'>Types of Courses</p>
        </div>

        </div> 

      </div>
    </div>
  )
}

export default TimeLineSection

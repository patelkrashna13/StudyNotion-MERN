import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_your_lesson from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from '../HomePage/Button'
const LearningLanguageSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 mt-[7rem] items-center">

        <div className="text-4xl font-semibold text-center">
          Your Swiss Knife for
          <HighlightText text={" learning any language"}/>
        </div>

        <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">
          Using spin making learning multiple languages easy, with 20+ languages realistic voice-over,
          progress tracking, custom schedule and more.
        </div>

        <div className="flex flex-row items-center justify-center mt-5 ">
        <img src={know_your_progress} alt="KnowYourProgress" className='object-contain h-[22rem] hover:h-[22.5rem]  hover:shadow-black duration-500 transition-all -mr-28 cursor-pointer'/>
        <img src={compare_with_others} alt="KnowYourProgress" className='object-contain h-[25rem] hover:h-[25.5rem] duration-500 transition-all cursor-pointer'/>
        <img src={plan_your_lesson} alt="KnowYourProgress" className='object-contain h-[25rem] hover:h-[25.5rem] duration-500 transition-all -ml-36 cursor-pointer'/>
        </div>

        <div className="">
          <CTAButton active={true} linkto={'/signup'} className="hover:shadow-lg shadow-black">
          <div >
            Learn More
          </div>
          </CTAButton>
        </div>
        <div className="h-[50px]"></div>

      </div>
    </div>
  )
}

export default LearningLanguageSection

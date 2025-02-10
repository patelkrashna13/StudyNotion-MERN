import React from 'react'
import Instructor from '../../../assets/Images/instructor.jpg'
import HighlightText from './HighlightText'
import CTAButton from '../HomePage/Button'
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16'>
        <div className="flex flex-row  items-center">

            <div className="w-[50%]">
                <img src={Instructor} className='shadow-blue-50 shadow-xl h-[30rem] w-[25rem]'/>
            </div>

            <div className="w-[50%] flex flex-col gap-10">
                <div className="text-4xl font-semibold">
                    Become an 
                    <HighlightText text={" Instructor"}></HighlightText> 
                </div>

                <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
                Instructors from around the world teach millions of students of StudyTech . We provide
                the tools and  skills to teach what you love.
                </p>

                <div className="w-fit">
                <CTAButton active={true} linkto={'/signup'}>
                <div className="flex flex-row gap-2">
                    Start Learning Today
                    <FaArrowRight className='mt-[4px]'/>
                </div>
                </CTAButton>
                </div>

                
            </div>


        </div>
      
    </div>
  )
}

export default InstructorSection

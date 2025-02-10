import React from 'react'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa' 
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimeLineSection from '../components/core/HomePage/TimeLineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import CourseCard from '../components/core/HomePage/CourseCard'

const Home = () => {
 
  return (
    <div>
      {/* Section 1 */}

      <div className="relative mx-auto h-full  flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        
      <Link to={"/signup"}>
 
      <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
        <div className='flex flex-row items-center gap-2 rounded-full px-8 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
          <p className='text-yellow-50'>Became an Instructor</p>
          <FaArrowRight />
        </div>

      </div>
      
      </Link>
      
      <div className="text-center text-4xl font-semibold mt-7 ">
        Empower Your Future with 
        <HighlightText text={" Coding Skills"}/>
      </div>

      <div className="mt-4 w-[90%] text-center text-md font-bold text-richblack-300">
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources , including hands-on projects, quizzes and personalized feedback from instructors. 
      </div>

      <div className="flex flex-row gap-7 mt-8">

        <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>

        <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>

      </div>

      <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-100 ">
          <video
            className=" h-[20rem] overflow-hidden rounded-2xl"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
      </div>

      {/* Code Section 1 */}
      <div className="">
        <CodeBlocks position={"lg:flex-row"} 
        heading = {
        <div className='text-4xl font-semibold'>Unlock Your
        <HighlightText text={" Coding potential "}/>
        with our online courses
        </div>
        }
        
        subheading={
          "Our courses are designed and taught by industry experts who years of experience in coding and are passionate about sharing their knowledge with you."
        }

        ctabtn1={
          {
            btnText:"try it yourself",
            linkto:"/signup",
            active:true,
          }
        }

        ctabtn2={
          {
            btnText:"learn more",
            linkto:"/login",
            active:false,
          }
        }

        codeblock={`<<!Doctype html>\n <html> \n <head> \n <title>Example</title> \n <linkrel="stylesheet" href="style.css">\n<\head>\n <body>\n <p>Hello StudyTech</p> \n </head> \n </body> \n </html>`}
        codeColor={"text-yellow-25"}
        />

      </div>

      {/* Code Section 2 */}
      <div className="">
        <CodeBlocks position={"lg:flex-row-reverse"} 
        heading = {
        <div className='text-4xl font-semibold'>Start
        <HighlightText text={" Coding "}/>
        <br />
        in seconds

        </div>
        }
        
        subheading={
          "Go ahead , Give it a Try . Our hands-on learning environment means you'll be writing real code from your very first lesson"
        }

        ctabtn1={
          {
            btnText:"try it yourself",
            linkto:"/signup",
            active:true,
          }
        }

        ctabtn2={
          {
            btnText:"learn more",
            linkto:"/login",
            active:false,
          }
        }

        codeblock={`<<!Doctype html>\n <html> \n <head> \n <title>Example</title> \n <linkrel="stylesheet" href="style.css">\n<\head>\n <body>\n <p>Hello StudyTech</p> \n </head> \n </body> \n </html>`}
        codeColor={"text-yellow-25"}
        
        />

      </div>

      <ExploreMore/>
      
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        
      <div className="homepage_bg h-[310px] ">

        <div className="w-11/12 max-w-maxContent flex justify-center items-center gap-5 mx-auto ">
        <div className="h-[325px]"></div>
        
        <CTAButton active={true} linkto={"/signup"}>
        <div className="flex items-center gap-3 mt">
        Explore full catalog
        <FaArrowRight/>
        </div>
        
        </CTAButton>

        <CTAButton active={false} linkto={"/signup"}>
        <div className="text-white">
          Learn more
        </div>
        </CTAButton>
        </div>

      </div>

      <div className="w-11/12 max-w-maxContent flex items-center gap-7 mx-auto justify-between mt-[-10rem]">

      <div className="flex flex-row gap-10 mb-10 ml-[60px] mt-[95px]">
        <div className="text-4xl font-semibold w-[45%]">
          Get the Skills you need for a 
          <HighlightText text={" Job that is in demand"}/>
      </div>

      <div className="flex flex-col gap-10 w-[40%] items-start">
      <div className="text-[16px]">
      The modern StudyNotion is the dictates its own terms. Today, to be a competitive 
      specialists requires more than extra skills.
      </div>
      <CTAButton active={true} linkto={"/signup"}>
      <div className="">
        Learn more
      </div>
      </CTAButton>
      </div>
      </div>





      </div>

      <TimeLineSection/>
      <LearningLanguageSection/>
      {/* <div className="h-[250px]"></div> */}
      



      </div>

      {/* Section 3 */}
      <div className="w-11/12  mx-auto max-w-maxContent flex-col items-center justify-between gap-8 forst-letter bg-richblack-900 text-white">
      
      <InstructorSection/>
      <h2 className='text-center text-4xl font-semibold mt-10'>Review from Other Learners</h2>

      </div>

      {/* Footer */}
      <Footer/>
      </div>

  )
}

export default Home
import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { apiConnector } from '../services/apiconnector';
import { categories } from '../services/apis';
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import Course_Card from '../components/core/Catalog/Course_Card';
import CourseSlider from '../components/core/Catalog/CourseSlider';
import { useSelector } from "react-redux"
import Error from "./Error"

import { motion } from 'framer-motion';



const Catalog = () => { 

  const navigate = useNavigate()

const handleNavigate = () =>{
  navigate('/')
}
  
    const { loading } = useSelector((state) => state.profile)
    const { catalogName } = useParams()
    const [active, setActive] = useState(1)
    const [catalogPageData, setCatalogPageData] = useState(null);
    const [categoryId, setCategoryId] = useState("");

    
    
    //Fetch all categories
    useEffect(()=> {
        const getCategories = async() => {
            const res = await apiConnector("GET", categories.CATEGORIES_API);
            const category_id = 
            res?.data?.data?.find((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName[0].id);
            setCategoryId(category_id);
        }
        getCategories();
    },[catalogName]);

    useEffect(() => {
        const getCategoryDetails = async() => {
            try{
                const res = await getCatalogaPageData(categoryId);
                console.log("Printing res: ", res);
                setCatalogPageData(res);
            }
            catch(error) {
                console.log(error)
            }
        }

        if(categoryId) {
            getCategoryDetails();
        }
        
    },[categoryId]);

    if (loading || !catalogPageData) 
    {
        return (
          <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
            <div className="spinner text-white">
              <Course_Card/>
              <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md"> 
                <header className="text-center mb-6"> 
                  <motion.h1 className="text-5xl font-bold text-gray-800" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} > Web Development </motion.h1> </header> <motion.div className="flex justify-center mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} > </motion.div> <motion.div className="space-y-4 text-gray-700" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50, delay: 1 }} > <p> Welcome to the fascinating world of Web Development! This dynamic field is all about creating and maintaining websites and web applications. As a web developer, you have the power to build interactive experiences that engage users and bring ideas to life on the internet. </p> <p> Web Development encompasses a wide range of technologies and tools. From the basics of HTML, CSS, and JavaScript to advanced frameworks like React, Angular, and Vue, there's always something new to learn and explore. Whether you're building a simple personal blog or a complex e-commerce platform, web development offers endless possibilities for creativity and innovation. </p> <p> By mastering Web Development, you can create websites that are not only visually appealing but also highly functional and user-friendly. So, dive in, embrace the challenge, and start building the web of tomorrow today! </p> </motion.div> <motion.div className="flex justify-center mt-6" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} > <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 shadow-lg mx-2" onClick={handleNavigate}> Learn More </button> <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-700 shadow-lg mx-2"> Get Started </button> </motion.div> </div>
            </div>
          </div>
        )
    }

      if (!loading && !catalogPageData.success)
      {
        return <Error />
      }
    
      return (
        <>
          {/* Hero Section */}
          <div className=" box-content bg-richblack-800 px-4">
            <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
              <p className="text-sm text-richblack-300">
                {`Home / Catalog / `}
                <span className="text-yellow-25">
                  {catalogPageData?.data?.selectedCategory?.name}
                  
                </span>
              </p>

              <p className="text-3xl text-richblack-5">
                {catalogPageData?.data?.selectedCategory?.name}
              </p>

              <p className="max-w-[870px] text-richblack-200">
                {catalogPageData?.data?.selectedCategory?.description}
              </p>

            </div>

          </div>
    
          {/* Section 1 */}
          <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="section_heading">Courses to get you started</div>
            <div className="my-4 flex border-b border-b-richblack-600 text-sm">
              <p
                className={`px-4 py-2 ${
                  active === 1
                    ? "border-b border-b-yellow-25 text-yellow-25"
                    : "text-richblack-50"
                } cursor-pointer`}
                onClick={() => setActive(1)}
              >
                Most Populer
              </p>
              <p
                className={`px-4 py-2 ${
                  active === 2
                    ? "border-b border-b-yellow-25 text-yellow-25"
                    : "text-richblack-50"
                } cursor-pointer`}
                onClick={() => setActive(2)}
              >
                New
              </p>
            </div>
            <div>
              <CourseSlider
                Courses={catalogPageData?.data?.selectedCategory?.courses}
              />
            </div>
          </div>
          {/* Section 2 */}
          <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="section_heading">
              Top courses in {catalogPageData?.data?.differentCategory?.name}
            </div>
            <div className="py-8">
              <CourseSlider
                Courses={catalogPageData?.data?.differentCategory?.courses}
              />
            </div>
          </div>
    
          {/* Section 3 */}
          <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="section_heading">Frequently Bought</div>
            <div className="py-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {catalogPageData?.data?.mostSellingCourses
                  ?.slice(0, 4)
                  .map((course, i) => (
                    <Course_Card course={course} key={i} Height={"h-[400px]"} />
                  ))}
              </div>
            </div>
          </div>

          <Footer />
        </>
      )
    }
    
export default Catalog

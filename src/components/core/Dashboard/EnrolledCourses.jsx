import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {getUserEnrolledCourses} from '../../../services/operations/profileAPI'
import ProgressBar from '@ramonak/react-progress-bar';

const EnrolledCourses = () => {

  const [like, setLike] = useState(false); const [dislike, setDislike] = useState(false); const handleLikeClick = () => { setLike(!like); if (dislike) { setDislike(false); } };
   const handleDislikeClick = () => { setDislike(!dislike); 
    if (like) { setLike(false); } };

  const {token} = useSelector((state)=>state.auth);

  const [enrolledCourses,setEnrolledCourses]=useState(null);

  const getEnrolledCourses = async() =>
  {
        try{
             const response = await getUserEnrolledCourses(token) 
             setEnrolledCourses(response)
        }
        catch(error)
        {
         console.log("Unable to Fetch Enrolled Courses")
        }
  }

  useEffect(()=>{
    getEnrolledCourses()
  },[])
  


  return (
    <div className='text-white'>
      <div className="text-red-200 text-center pt-2rem text-yellow-200 my-4">My Enrolled Courses</div>
      {
        !enrolledCourses ? (
            <div className="">Loading...</div>
        ) : !enrolledCourses.length ? (
          <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md"> <header className="text-center mb-6"> <h1 className="text-4xl font-bold text-gray-800">Data Structures and Algorithms</h1> </header> <div className="flex justify-center mb-6"> <img src="https://via.placeholder.com/600x300?text=DSA+Course+Image" alt="DSA Course" className="rounded-lg shadow-md border-4 border-gray-200" /> </div> <div className="space-y-4 text-gray-700"> <p> Welcome to the comprehensive Data Structures and Algorithms (DSA) course! This course is meticulously designed to provide you with a robust understanding of essential data structures and algorithmic techniques. As you navigate through this curriculum, you will not only grasp theoretical concepts but also gain practical experience through real-world examples and coding exercises. </p> <p> This course covers a wide array of topics including arrays, linked lists, stacks, queues, hash tables, trees, graphs, sorting algorithms, searching algorithms, and much more. By the end of this journey, you will be equipped with the skills to tackle complex coding challenges and optimize your solutions for better performance. </p> <p> Whether you are preparing for technical interviews, enhancing your programming skills, or simply exploring the fascinating world of algorithms, this course is your gateway to success. Let's embark on this exciting journey together and unlock the full potential of your problem-solving abilities! </p> </div> <div className="flex justify-center mt-6"> <button className={`py-2 px-4 rounded-full font-semibold mx-2 ${like ? 'bg-blue-700 text-white border-2 border-blue-300' : 'bg-black text-white hover:bg-blue-700 shadow-lg'}`} onClick={handleLikeClick} > Like </button> <button className={`py-2 px-4 rounded-full font-semibold mx-2 ${dislike ? 'bg-blue-700 text-white border-2 border-red-300' : 'bg-red-500 text-white hover:bg-red-700 shadow-lg'}`} onClick={handleDislikeClick} > Dislike </button> </div> </div>) : (
        <div className="">
            <div className="">
                <p>Course Name</p>
                <p>Durations</p>
                <p>Progress</p>
            </div>
            {
             enrolledCourses.map((course,index)=>(
                <div className="">
                    <div className="">
                        <img src={course.thumbnail} alt="" />
                        <div className="">
                            <p>{course.courseName}</p>
                            <p>{course.courseDescription}</p>
                        </div>
                    </div>

                    <div className="">
                        {course?.totalDuration}
                    </div>

                    <div className="">
                        <p>Progress: {course.progressPercentage || 0}%</p>
                        <ProgressBar completed={course.progressPercentage || 0} height='8px' isLabelVisible={false}/>
                    </div>
                </div>
             ))   
            }
        </div>
        )
      }
    </div>
  )
}


export default EnrolledCourses

import { useSelector } from "react-redux"

import RenderCartCourses from "./RenderCartCourses"
import RenderTotalAmount from "./RenderTotalAmount"
import { useNavigate } from "react-router-dom"

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart)
  const navigate = useNavigate()
  const enroll = ()=>
  {
  navigate('/dashboard/add-course')
  }

  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">Cart</h1>
      <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
        {totalItems} Courses in Cart
      </p>
      { total > 0 ? (
        <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <p className="mt-14 text-center text-3xl text-richblack-100">
          Your cart is empty
          <br />
          <br />
          <br />
          Please Enroll in our Courses
          <br />
          <br />
          <br />
          <button class="bg-yellow-200 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-600 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" onClick={enroll}>
          Enroll
         </button>

        </p>
      )}
    </>
  )
}
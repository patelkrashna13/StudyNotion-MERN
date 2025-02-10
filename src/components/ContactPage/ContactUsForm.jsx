import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiConnector } from '../../services/apiconnector';
import { contactusEndpoint } from '../../services/apis';
import CountryCode from "../../data/countrycode.json"

const ContactUsForm = () => {

  const[loading,setLoading]=useState(false);
  const{
       register,
       handleSubmit,
       reset,
       formState:{errors,isSubmitSuccessful}
  } = useForm();

  const submitContactForm = async(data)=>{
    console.log("Logging data",data)
    try{
        setLoading(true);
        // const response = await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data)
        const response = {status:"OK"};
        console.log("Logging response",response);
        setLoading(false);
    }
    catch(error)
    {
    console.log(error.message);
    setLoading(false)
    }

  }

  useEffect(()=>
  {
   if(isSubmitSuccessful)
   {
    reset(
        {
            email:"",
            firstname:"",
            lastname:"",
            message:"",
            phoneNo:"",
        }
    )
   }
  },[reset,isSubmitSuccessful]
)
    
  return (
        <form onSubmit={handleSubmit(submitContactForm)}>

        <div className="flex flex-col gap-14">
        <div className=" flex gap-5">
                {/* firstName */}
                <div className="flex flex-col">
                    <label htmlFor='firstname'>First Name</label>
                    <input type="text" name='firstname' id='firstname' placeholder='Enter first Name'
                    {...register("firstname",{required:true})} className='text-black'/>

                    {
                        errors.firstname && (
                            <span>
                                Please Enter Your Name
                            </span>
                        )
                    }
                </div>

                {/* lastName */}
                <div className="flex flex-col">
                    <label htmlFor='lastname'>Last Name</label>
                    <input type="text" name='lastname' id='lastname' placeholder='Enter last Name'
                    {...register("lastname")} className='text-black'/>
                </div>

                </div>

                {/* email */}
                <div className="flex flex-col">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder='Enter Email Address'
                    {...register("email",{required:true})} className='text-black'/>
                    {
                        errors.email && (
                        <span>
                            Please enter your email address
                        </span>
                        )
                    }
                </div>

                {/* phoneNo */}
                <div className="flex flex-col gap-x-10">

                <label htmlFor="phonenumber">Phone Number</label>

                <div className="flex flex-row gap-5  justify-betwee">
                    {/* dropdown */}
                    <div className="flex w-[15%] gap-5">

                    <select name="dropdown" id="dropdown" {...register("countrycode",{required:true})}>

                    {
                        CountryCode.map((element,index)=>{
                        return (
                            <option  key={index} value={element.code}>
                                {element.code} -{element.country}
                            </option>
                        )
                        })
                    }

                    </select>

                    </div>

                    <div className="w-[80%]">
                        <input type="number" name="phonenumber" id="phonenumber" placeholder='12345 67890' className='text-black'
                        {...register("phoneNo",{required:{value:true, message:"Please Enter Phone Number"} , maxLength:{value:10,message:"Invalid Phone Number"},
                        minLength:{value:8,message:"Invalid Phone Number"}})}/>
                    </div>
                </div>

                { 
                    errors.phoneNo && (
                        <span>
                            {
                                errors.phoneNo.message 
                            }
                        </span>
                    )
                }

                
                </div>

                {/* message */}
                <div className="flex flex-col">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" cols="30" rows="7"
                      placeholder='Enter your message here' className='text-black'
                      {...register("message",{required:true})}/>

                      {
                        errors.message && (
                        <span>Please enter your message.</span>
                        )
                      }
                </div>
            

            <button type='submit' className='rounded-md bg-yellow-50 text-center py-4 px-6 text-[18px] font-semibold text-black'>
                Send Message
            </button>

        </div>

        </form>
  )
}

export default ContactUsForm

import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className='font-black text-[20px]'>
      We are passionate about revolutionizing the way we learn. Our innovative platform 
      <HighlightText text={" combines technnology"}/>

      <span className='text-orange-100'>
      {" "}
      expertise
      </span>
      , and community to create an
      <span className='text-orange-100'>
      {" "}
        unparalled educational experience.
      </span>
      
    </div>
  )
}

export default Quote

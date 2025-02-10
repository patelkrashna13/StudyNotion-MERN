import React from 'react'
import Button from '../core/HomePage/Button'

const IconBtn = ({text,onclick,children,disabled,outline=false,customClasses,type}) => {
  return (
    <button disabled={disabled} onClick={onclick} type={type}>
        {
            children ?  (
            <>
            <span>{text}</span>
            {children}
            </>    
        ) : (text)
        }
    </button>
  )
}

export default IconBtn

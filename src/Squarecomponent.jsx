import React from 'react'

const Squarecomponent = (props) => {
    const name= props.className ? `${props.className} square ` : "square"
    
  return (
   <span className={name}>X</span>
  )
}

export default Squarecomponent

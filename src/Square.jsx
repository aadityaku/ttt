import React from 'react'
import Squarecomponent from './Squarecomponent'

export const Square = () => {
  const changeTurn = () => {
    return(
      ""
    )
  }
  return (
    <div className="App-header">
    <h1 className="heading">TI</h1>
    <div className="row ">
        <Squarecomponent className="border-bottom-right"/>
        <Squarecomponent className="border-bottom-right"/>
        <Squarecomponent className="border-bottom"/>
        
    </div>
    <div className="row ">
        <Squarecomponent className="border-bottom-right"/>
        <Squarecomponent className="border-bottom-right"/>
        <Squarecomponent className="border-bottom"/>
        
    </div>
    <div className="row ">
        <Squarecomponent className="border-right"/>
        <Squarecomponent className="border-right"/>
        <Squarecomponent />
        
    </div>
    

    
  </div>
  )
}

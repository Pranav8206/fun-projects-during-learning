import React from 'react'

// const Card = (props) => {   this and below both the lines are 100% correct and work
const Card = ({item, price="0.444"}) => {
    // console.log( "Props", props);
    
  return (
    <div className='relative justify-center m-2 flex items-center bg-gray-300 h-[400px] w-[400px] rounded-md '>
        <div className=''>
            {/* <div>{props.item}</div>
            <div>{props.price || 0.9}</div> */}
            
            <div>{item}</div>
            <div>{price }</div>
            <div>Till tomorrow.</div>
        </div>
      
    </div>
  )
}

export default Card

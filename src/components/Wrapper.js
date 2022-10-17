import React from 'react'

const Wrapper = (props) => {
  return (
    <div className='max-w-sm rounded border-2 border-red-700 overflow-hidden shadow-lg'>
        {props.children}
    </div>
  )
}

export default Wrapper
import React from 'react'

const Navigation = () => {
  return (
    <div className='flex justify-between bg-teal-700'>
        <div>
            <h1>Name of Company</h1>
        </div>
        <div className='flex justify-between px-10'>
            <h1 className='mx-10'>BUTTON1</h1>
            <h1 className='mx-10'>BUTTON2</h1>
        </div>
    </div>
  )
}

export default Navigation
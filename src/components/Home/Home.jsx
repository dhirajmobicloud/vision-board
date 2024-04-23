import React from 'react'

const Home = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='mb-4'>
            <img src="https://cdn.dribbble.com/users/372006/screenshots/2325846/media/a091c2fdf00cfe108982ed8066acc925.gif" alt="" srcset="" />
        </div>
        <div >
            <button className='bg-amber-300 text-black py-2 px-4 rounded-full cursor-pointer transition duration-0 hover:duration-150 ease-in-out'>Get Started</button>
        </div>
    </div>
  )
}

export default Home

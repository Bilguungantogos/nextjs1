import React from 'react'
import Button from '@mui/material/Button';
import { Typewriter } from 'react-simple-typewriter'

const Section = () => {
  return (
    <div className='flex flex-col items-center mt-40 gap-4 '>
        <div className='w-40'><img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/></div>
        <h1 className='text-2xl'>I Am 
            <span className='text-lime-600'><Typewriter
                    words={[" Fullstack Developer", " a Photographer"]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}/>
            </span>
        </h1>
        <p className='w-[600px]'>Hello I'm Bilguun Gantogos. Web Developer with over half year of experience. Experienced with all stages of the development cycle for dynamic web projects</p>
        <Button className='bg-black mt-6' variant="contained">Download CV</Button>
    </div>
  )
}

export default Section
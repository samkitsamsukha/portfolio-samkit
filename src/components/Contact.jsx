import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="bg-gradient-to-b from-black to-gray-800 w-full h-screen p-4">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className='pb-8'>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Contact</p>
            <p className='text-xl py-6'>Submit the form below to get in touch with me.</p>
        </div>

        <div className='flex justify-center items-center'>
            <form method='POST' action="https://getform.io/f/pamqgqwa" className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 text-white rounded-md focus:outline-none'/>
                <input type="text" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 text-white rounded-md focus:outline-none'/>
                <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button type='submit' className='bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-auto flex items-center rounded-md hover:scale-105 duration-300 mt-4'>Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

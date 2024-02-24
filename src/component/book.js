import React from 'react'
import img from './Mern-Stack.png'

export default function Book() {
  return (
    <div>
    <section className="text-gray-600 body-font bg-gray-300">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded border-zinc-950 border-2 shadow-2xl" alt="hero" src={img}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our MERN course
        
      </h1>
    <div className='font-semibold text-lg my-5' >
      <li> 100+ project with source code  </li>
      <li> 50+ backend project with source code  </li>
      <li> 25+ Rivision Notes  </li>
      <li> 300+ Placement Question   </li>
      </div>
      <div className="flex justify-center">
      <a href='https://imjo.in/mZbubS'>
        <button data-aos="zoom-in-up" className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">

Get Now At &nbsp; <span className="line-through md:inline"> ₹899</span> &nbsp;₹499/- Only</button>
</a>  </div>
    </div>
  </div>
</section>

    </div>
  )
}

import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
// 
export default function Whoshouldbuy() {
  return (
    <div>

<section class="text-gray-600 body-font bg-gray-300 py-6">
  <div class="container px-5 py-1 mx-auto">
    <div class="flex flex-col text-center w-full mb-10">
      {/* <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Who Should Buy this EBook?</h1>
      
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col border-blue-600 border-4 shadow-xl ">
          <div class="flex items-center mb-3 border-b-4 border-gray-950 rounded-md">
           
            <h2 class="text-gray-900 text-lg title-font  font-bold ">Students</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-left">Computer science, software engineering, and web development students seeking to gain practical skills in web development.</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col border-blue-600 border-4 shadow-xl ">
          <div class="flex items-center mb-3 border-b-4 border-gray-950 rounded-md">
           
            <h2 class="text-gray-900 text-lg title-font font-bold ">Web Developer</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-left">Both beginners and experienced developers looking to expand their skills or learn how to build web applications using the MERN stack.
        </p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col border-blue-600 border-4 shadow-xl ">
          <div class="flex items-center mb-3 border-b-4 border-gray-950 rounded-md">
           
            <h2 class="text-gray-900 text-lg title-font font-bold ">Freelancer</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-left">Freelance developers aiming to broaden their service offerings by becoming full-stack developers.</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col border-blue-600 border-4 shadow-xl ">
          <div class="flex items-center mb-3 border-b-4 border-gray-950 rounded-md">
           
            <h2 class="text-gray-900 text-lg title-font font-bold ">Tech Enthusiasts</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-left">Individuals passionate about technology and interested in understanding the MERN stack for personal or side projects.</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col border-blue-600 border-4 shadow-xl ">
          <div class="flex items-center mb-3 border-b-4 border-gray-950 rounded-md">
           
            <h2 class="text-gray-900 text-lg title-font font-bold ">Anyone Interested in Web Development</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-left">People curious about web development and its technologies can use the eBook as a valuable learning resource.</p>
           
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
  <div className="flex justify-center my-6">
        <a href='https://imjo.in/mZbubS'>
        <button data-aos="zoom-out-up" className="inline-flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">

Get Now At &nbsp; <span class="line-through md:inline"> ₹899</span> &nbsp;₹499/- Only</button>
</a>
<button data-aos="zoom-out-up" className="ml-4 inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Frontend Course &nbsp;<span class="line-through md:inline"> ₹699</span>&nbsp; 299/- Only </button>

      </div>
</section>
    </div>
  )
}

import React from 'react'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'
import five from './5.png'
import six from './6.png'

export default function Premium() {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="flex flex-col text-center w-full mb-10">
      {/* <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
      <h1 class="sm:text-3xl text-2xl font-bold title-font text-blue-400">Buy now & Get Premium Bonuses worth ₹5000</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-bold my-2"><b>Supercharge</b> your Web Development Skills with these Bonuses</p>

    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4  border-blue-500 shadow-2xl rounded-lg overflow-hidden">
          <img class=" w-full object-cover object-center" src={one} alt="blog"/>
        
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4 border-blue-500 shadow-2xl rounded-lg overflow-hidden">
          <img class=" w-full object-cover object-center" src={two} alt="blog"/>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4 border-blue-500 shadow-2xl rounded-lg overflow-hidden">
          <img class=" w-full object-cover object-center" src={three} alt="blog"/>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4 border-blue-500 shadow-2xl rounded-lg overflow-hidden">
          <img class=" w-full object-cover object-center" src={four} alt="blog"/>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4 border-blue-500 shadow-2xl rounded-lg overflow-hidden">
          <img class=" w-full object-cover object-center" src={five} alt="blog"/>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4 border-blue-500 shadow-2xl rounded-lg overflow-hidden">
          <img class=" w-full object-cover object-center" src={six} alt="blog"/>
         
        </div>
      </div>
    </div>
    <div className="flex justify-center my-6">
        <a href='https://imjo.in/mZbubS'>
        <button  className="inline-flex text-white bg-red-700 border-4 shadow-xl border-cyan-400 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">

Get Now At &nbsp; <span class="line-through md:inline"> ₹899</span> &nbsp;₹499/- Only</button>
</a>
<button class="ml-4 inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Frontend Course &nbsp;<span class="line-through md:inline"> ₹699</span>&nbsp; 299/- Only </button>

      </div>
  </div>
</section>
    </div>  )
}

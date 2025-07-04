import React from 'react'

function InfoSection2() {
  return (
    <div><section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt=""
            src="https://i.pinimg.com/originals/d1/24/ab/d124ab63d4d28b4f2beb4ba20b4b72a4.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
  
          <p className="mt-4 text-gray-600">
          Lamborghini is an iconic Italian manufacturer known for its high-performance sports cars, often
           associated with luxury, speed, and distinctive design. Founded by Ferruccio Lamborghini in 1963, the company 
           originally aimed to compete with Ferrari
           after a less-than-satisfactory experience with a Ferrari vehicle. The first model, the 350 GT
          </p>
  
          <a
            href="#"
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default InfoSection2
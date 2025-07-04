

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoSection from '@/components/infosection'
import InfoSection2 from '@/components/InfoSection2'
import Category from '@/components/ui/Category'
import Hero from '@/components/ui/Hero'
import MostSearchedCar from '@/components/ui/MostSearchedCar'



import React from 'react'

export default function Home() {
  return (
    <div  className=' bg-gray-400'>
      {/*  Header section  */}
       <Header/> 
       {/*  Hero*/}
 <Hero/> 
 {/* Category */}
 <Category/>
 
<MostSearchedCar/>
<InfoSection/>
<InfoSection2/>
<Footer/>
</div>
  )
}

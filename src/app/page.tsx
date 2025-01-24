import Banner from '@/components/Banner'
import BottomBar from '@/components/BottomBar'
import Faqs from '@/components/Faqs'
import Hero from '@/components/Hero'
import NewArrivals from '@/components/Newarrivals'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <Banner />
      <Faqs />
      <Testimonial />
      <BottomBar />
      
    </div>
  )
}

export default Page

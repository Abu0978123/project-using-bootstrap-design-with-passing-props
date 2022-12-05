import React from 'react'
import Card from './Card'
import appDev from './images/app-dev.jpg'
import pic2 from './images/pic2.png'
import network from './images/design.jpg'
import mobApp from './images/mob-app.jpeg'
import SEO from './images/services.webp'
import education from './images/education.webp'


export default function Services() {
  return (
    <div className='container my-5 '>
      <h2 className="text-center services ">
       <i>Our Services</i> 
      </h2>
      <div className="row">
        <div className="col-md-12 display mx-auto gy-3">
         
         <Card 
         imgURL={appDev}
         title={'App Development'}
         price={6000}
         data={'This card is about to app development'}
         />
         <Card 
         imgURL={network}
         title={'Networking'}
         price={4000}
         data={'This card is about to Networking'}
         />
         <Card 
         imgURL={mobApp}
         title={'Mobile App'}
         price={9000}
         data={'This card is about to Mobile app development'}
         />
           <Card 
         imgURL={SEO}
         title={'App Development'}
         price={12000}
         data={'This card is about to SEO Services'}
         />
           <Card 
         imgURL={education}
         title={'Education Management'}
         price={43000}
         data={'This card is about to Education Management'}
         />
         <Card 
         imgURL={pic2}
         title={'Professional Behivours'}
         price={4320}
         data={'This card is about to Professional Behivours'}
         />

        </div>
      </div>
      
      
    </div>
  )
}

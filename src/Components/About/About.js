import React from 'react'
import './About.css'

function About() {
   return(
      <section className='about-section about-background'>
         <h2>About<span>.</span></h2>
         <div className='about-flex'>
            <div className='headshot-wrapper'>
               <img className='headshot' 
                  src={require('../../Images/Braswell_Headshot.jpg')} 
                  alt='head shot'>
               </img>
            </div>
            <div className='statement-wrapper'>
            
               <p className='first-p'>I enjoy the elegance of transforming code into a designed experience for the end-user. Balancing visual 
               concerns alongside technical requirements is a welcomed validation of my time spent working professionally 
               in the arts. However, what I truly love more than anything is the on-going challenge to find efficiency 
               in a world of endless possibilities.</p> 

               <p>In a previous life, I worked as a studio-based photographer for many brands that are household names. 
               Working alongside important stakeholders within fast-paced production environments provided the opportunity 
               to develop a level of expertise in creative design and an ability to remain focused under pressure that few 
               programmers share.</p>

               <p>I am equally comfortable working individually on a sprint, in group, or in direct contact with clients. 
               I truly enjoy being pushed by a difficult situation. I love working on teams because I really enjoy sharing 
               the experience of looking back to say "WOW! We did THAT..."</p>

               <p>When I am not working, I enjoy exploring new places with my camera in hand and designing the most productive 
               hydroponic tomato system imaginable. What can I say? It's a favorite activity for my two cats and I really 
               like to build things...</p>

            </div>

         </div>     
      </section>

   )
}

export default About


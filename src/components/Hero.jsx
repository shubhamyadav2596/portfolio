import React from 'react'
import hero from '../assets/Hero.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import leetcode  from '../assets/leetcode.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'
import github from '../assets/Github.png'
import Resume from '../assets/Resume.pdf'


const Hero = () => {
  const socialLinks = [
    { link: "https://github.com/shubhamyadav2596", icon: github },
    { link: "https://www.linkedin.com/in/shubh-ydv96/", icon: linkedin },
    { link: "https://www.instagram.com/_s_h_u_b_b_u___/?hl=en", icon: instagram },
    { link: "https://leetcode.com/u/shubbu_96/", icon: leetcode },
  ];
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-6xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Shubham <span className='text-red-500'>Yadav</span></h1>
               <p className='md:text-2xl text-xl mb-4'>Frontend Developer</p>
               <p className='mb-4'>I am a Frontend Developer with a passion for building responsive, user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, and modern frameworks like React. Strong focus on UI/UX design, optimizing user experiences, and collaborating with cross-functional teams to deliver seamless web applications. Let's connect and create something amazing together</p>
               <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href={Resume} download target='_blank'>Download CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={hero} alt="" className='lg:h-[90vh] h-96' />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-1/2 bg-gray-100/20 py-3 rounded-full -translate-x-1/2 flex gap-3'> 
      {
        socialLinks.map((link, index) => (
          <a
          key={index}
            href={link.link}
            target="_blank"
            className="text-foreground/60 hover:text-foreground/80"
          >
          <img src={link.icon} alt="" className='w-10'/>
          </a>
        ))
      }
 
      </div>
    </section>
  )
}

export default Hero

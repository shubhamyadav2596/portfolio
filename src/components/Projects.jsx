import React from 'react'
import movie from '../assets/movie.png'
import ecom from '../assets/ecom.png'
import spotyfy from '../assets/spotify.png'
import youtube from '../assets/youtube.png'
import ecomMern from '../assets/ecom_mern.png'
import netflix from '../assets/netflix.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Movie App',
          desc: 'This is a basic prototype of a movie search web application built with React.js. It demonstrates the ability to fetch movie data from the TMDB API and display it in a simple, responsive user interface. This is a prototype and may not include all error handling or optimizations that would be present in a production application. The emphasis is on demonstrating the ability to work with React.js and API integration to build a simple web application.',
          image: movie,
         link: "https://movie-app-e7afe2.netlify.app/",
        github: "https://github.com/shubhamyadav2596/movie_app"
        },
        {
          title: "Ecommerce Site frontend",
          desc: "Built a responsive and feature-rich e-commerce frontend using React, React Router DOM, Tailwind CSS, and PostCSS. Designed a dynamic product catalog with real-time filtering and implemented seamless navigation with nested and dynamic routes like /product/:id. Developed a fully functional shopping cart with real-time updates and an intuitive checkout flow. Leveraged Tailwind for a consistent, responsive design across devices. Optimized CSS using PostCSS for better performance in production. Delivered a scalable and visually appealing application, showcasing modern web development practices.",
          image: ecom,
          technologies: ["React", "Redux","Tailwind", "PostCSS"],
          link: "https://ecommerce-site-demo-5cc84b.netlify.app/",
          github: "https://github.com/shubhamyadav2596/Ecommerce-frontend/tree/main"
      },
      {
          title: "Spotify Clone",
          desc: "Developed a visually appealing Spotify-inspired user interface using React and Tailwind CSS. Built reusable components like Sidebar, Header, Player, and Playlist for a modular and maintainable design. Implemented a responsive layout using Tailwind’s grid and flex utilities, ensuring seamless adaptation across devices. Created dynamic playlist sections with hover effects, transitions, and a sticky player bar for an immersive user experience. Leveraged React's state management to handle UI interactions, such as toggling menus and playlist selections. Delivered a pixel-perfect, modern music streaming interface that mimics Spotify's aesthetic and usability.",
          image: spotyfy,
          technologies: ["React", "Tailwind", "React-Router-DOM"],
          link: "https://verdant-madeleine-4835c0.netlify.app/",
          github: "https://github.com/shubhamyadav2596/spotify-clone-UI/tree/main"
      },
      {
          title: "Youtube Clone UI",
          desc: "Created a responsive YouTube-inspired user interface using React, Bootstrap, and a REST API. Designed key components like Navbar, Sidebar, VideoCard, and VideoPlayer to mimic YouTube’s layout and functionality. Integrated a REST API to dynamically fetch and display video data, including thumbnails, titles, and channel details. Leveraged Bootstrap for consistent styling and a responsive grid system to ensure seamless performance across devices. Implemented features like a search bar, video categories, and a dynamic video player page using React’s component-based architecture. Delivered a modern, scalable interface replicating YouTube’s core design principles and user experience",
          image: youtube,
          technologies: ["React", "RestAPI", "Bootstrap"],
          link: "https://stellular-pegasus-71b3c4.netlify.app/",
          github: "https://github.com/shubhamyadav2596/yt-clone"
      },
      {
          title: "Ecommerce MERN",
          desc: "Built a full-stack e-commerce website using React, Redux, Node.js, Express, MongoDB, and Tailwind CSS. Designed responsive product pages, a dynamic cart, and a secure checkout flow with React and Redux for state management. Developed RESTful APIs with Express and Node.js for handling authentication, product management, and orders. Used MongoDB to store user, product, and order data, ensuring scalability. Styled the application with Tailwind CSS, delivering a modern and user-friendly interface. Created a seamless shopping experience with efficient frontend-backend integration",
          image: ecomMern,
          technologies: ["React", "Redux", "Tailwind", "Node.js", "MongoDB", "express"],
          link: "https://mern-ecommerce-1-y0xf.onrender.com",
          github: "https://github.com/shubhamyadav2596/MERN_ECOMMERCE"
      },
      {
          title: "Netflix Clone",
          desc: "Built a responsive Netflix-inspired application using React, TMDB API, Firebase, and Tailwind CSS. Integrated TMDB API to dynamically fetch and display trending movies, TV shows, and detailed content. Used Firebase for secure user authentication, enabling login and registration features. Styled the UI with Tailwind CSS, implementing carousels, hover effects, and a modern layout. Designed key sections like a hero banner, row sliders, and a user dashboard. Delivered an interactive, real-world streaming platform with dynamic data and a secure backend.",
          image: netflix,
          technologies: ["React", "Tailwind", "Firebase"],
          link: "https://moonlit-starlight-63b2b9.netlify.app/",
          github: "https://github.com/shubhamyadav2596/netflix_clone/tree/main"
      }
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards key={items.title} item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects

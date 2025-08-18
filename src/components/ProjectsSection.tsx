import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import urlShortenerImg from '@/assets/project-url-shortener.jpg'
import mazeGameImg from '@/assets/project-maze-game.jpg'
import todoAppImg from '@/assets/project-todo-app.jpg'
import calculatorAppImg from '@/assets/project-calculator-app.jpg'
import ecommerceWebsiteImg from '@/assets/project-ecommerce-website.jpg'
import trelloCloneImg from '@/assets/project-trello-clone.jpg'

const projects = [
  {
    title: "URL Shortener",
    description: "A URL shortening application built using HTML, CSS, JavaScript, Python(Flask), and MySQL. It allows users to shorten long URLs and provides a user-friendly interface for managing shortened links.",
    image: urlShortenerImg,
    techStack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Samraj5413/url-shortener"
  },
  {
    title: "Maze Game",
    description: "A fun, interactive maze game built using only HTML, CSS, and JavaScript. This full JavaScript-based project allows users to navigate through a randomly generated maze and reach the exit.",
    image: mazeGameImg,
    techStack: ["HTML", "CSS", "JavaScript"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Samraj5413/Maze-Game"
  },
  {
    title: "To-Do List App",
    description: "A simple and interactive To-Do List application built using React.js and TailwindCSS. It allows users to add, edit, and delete tasks, with persistent storage using browser local storage.",
    image: todoAppImg,
    techStack: ["React.js", "TailwindCSS", "Local Storage"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Samraj5413/ToDo-List-App"
  },
  {
    title: "Calculator App",
    description: "A simple and responsive calculator built using React.js and TailwindCSS. It supports basic arithmetic operations, percentage calculations, and features a modern dark-themed UI.",
    image: calculatorAppImg,
    techStack: ["React.js", "TailwindCSS"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Samraj5413/Calculator-App"
  },
  {
    title: "E-Commerce Website",
    description: "A modern and responsive e-commerce web application built using React.js, TypeScript, and TailwindCSS. This project provides a smooth shopping experience with an interactive UI and real-time cart functionality.",
    image: ecommerceWebsiteImg,
    techStack: ["React.js", "TailwindCSS"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Samraj5413/E-Commerce-Project"
  },
  {
    title: "Trello Clone App",
    description: "A Trello-style task management application built with Next.js, Supabase, and Clerk. Features real-time collaboration, drag-and-drop functionality, authentication, billing integration, and advanced filtering capabilities.",
    image: trelloCloneImg,
    techStack: ["Next.js", "Supabase", "Clerk", "dnd-kit", "TailwindCSS", "TypeScript"],
    // demoUrl: "#",
    githubUrl: "#"
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in modern web development, 
            machine learning, and creative problem-solving.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/Samraj5413"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-lg text-primary-foreground hover:shadow-glow-primary transition-all duration-300"
          >
            <span>View All Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
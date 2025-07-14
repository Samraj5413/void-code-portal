import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import aiTaskmanagerImg from '@/assets/project-ai-taskmanager.jpg'
import cryptoDashboardImg from '@/assets/project-crypto-dashboard.jpg'
import portfolioImg from '@/assets/project-3d-portfolio.jpg'
import ecommerceImg from '@/assets/project-ecommerce.jpg'
import mlClassifierImg from '@/assets/project-ml-classifier.jpg'
import socialAnalyticsImg from '@/assets/project-social-analytics.jpg'

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A modern task management application with AI-driven priority suggestions and smart categorization. Built with React, TypeScript, and integrates with OpenAI API.",
    image: aiTaskmanagerImg,
    techStack: ["React", "TypeScript", "Node.js", "OpenAI", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Cryptocurrency Dashboard",
    description: "Real-time crypto trading dashboard with portfolio tracking, price alerts, and advanced charting. Features WebSocket connections for live data.",
    image: cryptoDashboardImg,
    techStack: ["Next.js", "WebSocket", "Chart.js", "Redux", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "3D Portfolio Website",
    description: "Interactive 3D portfolio showcasing projects with Three.js animations, particle systems, and immersive user experience.",
    image: portfolioImg,
    techStack: ["Three.js", "React", "GSAP", "WebGL", "Blender"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard. Scalable microservices architecture.",
    image: ecommerceImg,
    techStack: ["React", "Express.js", "PostgreSQL", "Stripe", "Docker"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "ML Image Classifier",
    description: "Machine learning web app for image classification using TensorFlow.js. Real-time inference with 95% accuracy on custom dataset.",
    image: mlClassifierImg,
    techStack: ["TensorFlow.js", "Python", "Flask", "CNN", "OpenCV"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Analytics",
    description: "Social media analytics dashboard with sentiment analysis, engagement tracking, and automated reporting for content creators.",
    image: socialAnalyticsImg,
    techStack: ["Vue.js", "D3.js", "Python", "NLP", "AWS"],
    demoUrl: "#",
    githubUrl: "#"
  }
]

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
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
            href="#"
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
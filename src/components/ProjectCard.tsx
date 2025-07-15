import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
  index: number
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  techStack, 
  demoUrl, 
  githubUrl,
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="bg-card/40 backdrop-blur-md border-primary/20 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Tech Stack Overlay */}
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="px-2 py-1 bg-primary/20 backdrop-blur-sm text-xs rounded-full border border-primary/30">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-neon bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-muted/50 text-xs rounded-full border border-border hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            {demoUrl && (
              <Button variant="cyber" size="sm" className="flex-1">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" size="sm" className="w-full">
                  <Github className="h-4 w-4" />
                  Code
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
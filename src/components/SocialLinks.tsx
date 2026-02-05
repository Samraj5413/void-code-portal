import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, Twitter } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Samraj5413',
    color: 'hover:text-foreground'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/sam-raj-69033a24a/',
    color: 'hover:text-primary'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:samraj6083@gmail.com',
    color: 'hover:text-accent'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/its_sam._____?igsh=MW1vcWlqN2xmZjZocg==',
    color: 'hover:text-neon-pink'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://x.com/Samraj5413',
    color: 'hover:text-secondary'
  }
]

export default function SocialLinks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-t from-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Always open to discussing new opportunities, collaborations, and exciting projects. 
            Feel free to reach out!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                boxShadow: "var(--glow-primary)"
              }}
              whileTap={{ scale: 0.9 }}
              className={`
                p-4 bg-card/40 backdrop-blur-md rounded-full border border-primary/20 
                text-muted-foreground transition-all duration-300 
                hover:border-primary/50 hover:shadow-glow-primary
                ${social.color}
              `}
              viewport={{ once: true }}
            >
              <social.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="p-8 bg-card/20 backdrop-blur-md rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm currently looking for new opportunities and exciting projects to work on. 
            Let's create something incredible together!
          </p>
          
          <motion.a
            href="mailto:samraj6083@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-neon rounded-lg text-primary-foreground hover:shadow-glow-accent transition-all duration-300 font-semibold"
          >
            <Mail className="h-5 w-5" />
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
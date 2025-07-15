import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin, Building2 } from 'lucide-react'

const experiences = [
  {
    company: "BASE Automation Technologies",
    role: "Intern Trainee",
    duration: "Aug - Sep 2024",
    location: "Chennai, India",
    description: "Completed an internship at Base Automation Technologies, gaining hands-on exposure to industrial automation systems, control panels, and real-time PLC-HMI integration.",
    achievements: [
      "Assisted in the assembly and testing of control panels used in automated systems.",
      "Gained hands-on experience working with Human Machine Interfaces (HMIs) for system monitoring.",
      "Supported the integration of relays and PLCs into industrial automation solutions.",
      "Collaborated with the team to troubleshoot and ensure the smooth operation of control systems."
    ],
    
  },
  
]

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Building impactful solutions through internships and real-world projects
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-8 ml-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[35px] top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow-primary" />
              
              <Card className="bg-card/40 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary group">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                        <Building2 className="h-4 w-4 text-secondary" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-accent">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 block w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-muted/50 text-xs rounded-full border border-border hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
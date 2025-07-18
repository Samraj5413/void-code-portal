import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTailwindcss, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiMysql, 
  SiGit, 
  SiFastapi, 
  SiFirebase,
  SiTypescript,
  SiMongodb
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

const skills = [
  { name: 'React', category: 'Frontend', icon: SiReact },
  // { name: 'TypeScript', category: 'Language', icon: SiTypescript },
  { name: 'JavaScript', category: 'Language', icon: SiJavascript },
  { name: 'TailwindCSS', category: 'Styling', icon: SiTailwindcss },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs },
  { name: 'Python', category: 'Language', icon: SiPython },
  { name: 'Java', category: 'Language', icon: FaJava },
  { name: 'Express.js', category: 'Framework', icon: SiExpress },
  { name: 'FastAPI', category: 'Framework', icon: SiFastapi },
  { name: 'MySQL', category: 'Database', icon: SiMysql },
  // { name: 'MongoDB', category: 'Database', icon: SiMongodb },
  { name: 'Firebase', category: 'Cloud', icon: SiFirebase },
  { name: 'AWS', category: 'Cloud', icon: FaAws },
  { name: 'Git', category: 'Version Control', icon: SiGit },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
            <IconComponent className="w-6 h-6 text-primary" />
          </div>
          
          {/* Skill name */}
          <h3 className="font-semibold text-foreground text-sm">
            {skill.name}
          </h3>
          
          {/* Category */}
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {skill.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
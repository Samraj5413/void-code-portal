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
  SiFirebase 
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

const skills = [
  { name: 'React', category: 'Frontend', icon: SiReact, color: 'from-cyan-400 to-blue-600' },
  { name: 'TailwindCSS', category: 'Styling', icon: SiTailwindcss, color: 'from-cyan-400 to-cyan-600' },
  { name: 'JavaScript', category: 'Language', icon: SiJavascript, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: 'from-green-400 to-green-600' },
  { name: 'Express.js', category: 'Framework', icon: SiExpress, color: 'from-gray-400 to-gray-600' },
  { name: 'Python', category: 'Language', icon: SiPython, color: 'from-blue-400 to-yellow-500' },
  { name: 'Java', category: 'Language', icon: FaJava, color: 'from-red-400 to-orange-600' },
  { name: 'MySQL', category: 'Database', icon: SiMysql, color: 'from-blue-400 to-orange-500' },
  { name: 'Git', category: 'Version Control', icon: SiGit, color: 'from-red-500 to-orange-700' },
  { name: 'AWS', category: 'Cloud', icon: FaAws, color: 'from-orange-400 to-yellow-500' },
  { name: 'FastAPI', category: 'Framework', icon: SiFastapi, color: 'from-teal-400 to-green-600' },
  { name: 'Firebase', category: 'Cloud', icon: SiFirebase, color: 'from-yellow-400 to-red-500' },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.08, 
        rotateY: 10,
        z: 50,
        transition: { duration: 0.4, type: "spring", stiffness: 300 }
      }}
      className="group perspective-1000 magnetic-element"
    >
      <div className="relative">
        {/* Enhanced glowing background */}
        <motion.div
          className={`absolute -inset-2 bg-gradient-to-br ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Outer glow ring */}
        <motion.div
          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `conic-gradient(from 0deg, transparent, hsl(var(--cyber-blue)), transparent, hsl(var(--neon-green)), transparent)`,
            filter: 'blur(1px)',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Main card */}
        <motion.div 
          className="relative bg-card/10 backdrop-blur-xl border border-primary/30 rounded-xl p-6 hover:border-cyber-blue/60 transition-all duration-500 transform-gpu overflow-hidden"
          whileHover={{
            boxShadow: [
              "0 0 0 rgba(var(--cyber-blue), 0)",
              "0 0 30px rgba(var(--cyber-blue), 0.5)",
              "0 10px 50px rgba(var(--cyber-blue), 0.3)"
            ]
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-transparent to-neon-green/20" />
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--cyber-blue),0.1),transparent_50%)]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          {/* 3D holographic overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 rounded-xl`}
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* 3D Icon container */}
            <motion.div 
              className="w-16 h-16 mx-auto mb-4 relative"
              whileHover={{
                rotateY: 180,
                transition: { duration: 0.6, type: "spring" }
              }}
            >
              {/* Icon glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl blur-md opacity-60`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main icon */}
              <div className={`relative w-full h-full bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              
              {/* Holographic effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.h3 
              className="text-lg font-bold text-foreground mb-2 group-hover:text-cyber-blue transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {skill.name}
            </motion.h3>
            
            <motion.p 
              className="text-sm text-muted-foreground group-hover:text-neon-green/80 transition-colors duration-300"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              {skill.category}
            </motion.p>
          </div>
          
          {/* Animated data streams */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-0 group-hover:opacity-100"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-neon-green to-transparent opacity-0 group-hover:opacity-100"
            animate={{
              x: ['100%', '-100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
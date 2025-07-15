import { motion } from 'framer-motion';

const skills = [
  { name: 'React', category: 'Frontend', color: 'from-blue-400 to-blue-600' },
  { name: 'TailwindCSS', category: 'Styling', color: 'from-cyan-400 to-cyan-600' },
  { name: 'JavaScript', category: 'Language', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Node.js', category: 'Backend', color: 'from-green-400 to-green-600' },
  { name: 'Express.js', category: 'Framework', color: 'from-gray-400 to-gray-600' },
  { name: 'Python', category: 'Language', color: 'from-blue-400 to-blue-500' },
  { name: 'Java', category: 'Language', color: 'from-red-400 to-red-600' },
  { name: 'MySQL', category: 'Database', color: 'from-orange-400 to-orange-600' },
  { name: 'Git', category: 'Version Control', color: 'from-red-500 to-red-700' },
  { name: 'AWS', category: 'Cloud', color: 'from-orange-400 to-orange-500' },
  { name: 'FastAPI', category: 'Framework', color: 'from-teal-400 to-teal-600' },
  { name: 'Firebase', category: 'Cloud', color: 'from-yellow-400 to-orange-500' },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
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
        scale: 1.05, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="group perspective-1000"
    >
      <div className="relative">
        {/* Glowing background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main card */}
        <div className="relative bg-card/20 backdrop-blur-md border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 transform-gpu">
          {/* 3D effect overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 rounded-xl`} />
          
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon placeholder with gradient */}
            <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">
                {skill.name.charAt(0)}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {skill.name}
            </h3>
            
            <p className="text-sm text-muted-foreground">
              {skill.category}
            </p>
          </div>
          
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30"
            initial={false}
            animate={{
              boxShadow: [
                "0 0 0 rgba(var(--primary), 0)",
                "0 0 20px rgba(var(--primary), 0.3)",
                "0 0 0 rgba(var(--primary), 0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
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
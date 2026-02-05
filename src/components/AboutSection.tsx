import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-card/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-sm"></div>
            
            <div className="relative bg-card/10 backdrop-blur-md border border-primary/20 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                I'm a tech enthusiast with a diverse interest in{' '}
                <span className="text-accent font-semibold">web development</span>,{' '}
                <span className="text-secondary font-semibold">cybersecurity</span>, and{' '}
                <span className="text-primary font-semibold">cloud computing</span>. 
                With a foundation in Electronics and Communication Engineering, I tackle challenges 
                with a problem-solving mindset and a passion for innovation. I thrive in dynamic 
                environments that encourage continuous learning and exploration, whether it's working 
                on serverless architectures, diving into ethical hacking, or experimenting with the 
                latest tech trends.
              </p>
              
              {/* Animated accent lines */}
              <div className="mt-8 flex justify-center space-x-4">
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  viewport={{ once: true }}
                ></motion.div>
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-accent to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
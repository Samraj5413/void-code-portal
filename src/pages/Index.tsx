import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import SocialLinks from '@/components/SocialLinks'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="experience">
          <ExperienceSection />
        </div>
        
        <div id="contact">
          <SocialLinks />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/20 bg-card/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Your Name. Built with React, Three.js, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

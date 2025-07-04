import { motion } from "framer-motion";
import TypingAnimation from "@/components/typing-animation";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/ChatGPT Image Jul 4, 2025, 07_38_38 PM_1751641930188.jpeg";

export default function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* CS-themed animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Binary rain elements */}
        <div className="absolute top-0 left-10 binary-rain" style={{animationDelay: '0s'}}>01001001</div>
        <div className="absolute top-0 left-32 binary-rain" style={{animationDelay: '2s'}}>11001010</div>
        <div className="absolute top-0 right-20 binary-rain" style={{animationDelay: '4s'}}>01010101</div>
        <div className="absolute top-0 right-40 binary-rain" style={{animationDelay: '6s'}}>10110010</div>
        
        {/* Glowing particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500/40 rounded-full animate-pulse glow-effect"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-green-400/30 rounded-full animate-pulse delay-1000 glow-effect"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-yellow-400/35 rounded-full animate-pulse delay-500 glow-effect"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-red-400/40 rounded-full animate-pulse delay-1500 glow-effect"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-400/45 rounded-full animate-pulse delay-750 glow-effect"></div>
        
        {/* Code symbols */}
        <div className="absolute top-20 left-20 text-green-400/20 text-2xl code-text">{'</>'}‌</div>
        <div className="absolute bottom-20 right-20 text-red-400/20 text-2xl code-text">{'{}'}‌</div>
        <div className="absolute top-40 right-32 text-yellow-400/20 text-xl code-text">[]</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block portfolio-text-muted">SALMAN</span>
              <span className="block portfolio-accent">HAMZO</span>
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl mb-8 h-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="portfolio-text-muted">I'm a passionate </span>
              <TypingAnimation />
            </motion.div>
            
            <motion.p 
              className="text-lg portfolio-text-muted mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting digital experiences through code. Transforming innovative ideas into powerful 
              applications with clean architecture and modern technologies. Ready to bring your next 
              project to life with precision and creativity.
            </motion.p>
            
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                onClick={() => handleNavClick("#contact")}
                className="portfolio-accent-bg hover:portfolio-accent-hover text-white px-8 py-3 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 via-yellow-500/30 to-green-500/30 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={profileImage}
                alt="Salman Hamzo - Professional Portrait"
                className="relative rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg transform group-hover:scale-105 transition-all duration-500 border-4 border-red-500/40 terminal-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl group-hover:from-black/20 transition-all duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

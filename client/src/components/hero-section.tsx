import { motion } from "framer-motion";
import TypingAnimation from "@/components/typing-animation";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block portfolio-text-muted">SHAHZAIB</span>
              <span className="block portfolio-accent">FAISAL</span>
            </h1>
            
            <div className="text-xl md:text-2xl mb-8 h-16">
              <span className="portfolio-text-muted">I'm a passionate </span>
              <TypingAnimation />
            </div>
            
            <p className="text-lg portfolio-text-muted mb-8 max-w-xl leading-relaxed">
              I'm a passionate Frontend developer + Backend developer focused on crafting beautiful and 
              user-friendly websites. With expertise in React, JavaScript, and modern CSS, I love turning 
              creative ideas into interactive digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => handleNavClick("#contact")}
                className="portfolio-accent-bg hover:portfolio-accent-hover text-white px-8 py-3 rounded-lg font-medium"
              >
                Let's Connect
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleNavClick("#about")}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional developer workspace"
                className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

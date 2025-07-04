import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const toolboxItems = [
    { name: "Swift", icon: "🍎", color: "text-red-400" },
    { name: "SwiftUI", icon: "📱", color: "text-yellow-400" },
    { name: "React.js", icon: "⚛️", color: "text-red-500" },
    { name: "JavaScript", icon: "🟨", color: "text-yellow-400" },
    { name: "Java", icon: "☕", color: "text-red-400" },
    { name: "Python", icon: "🐍", color: "text-green-400" },
    { name: "HTML & CSS", icon: "🌐", color: "text-orange-400" },
    { name: "C Language", icon: "🔧", color: "text-red-500" },
  ];

  const personalInfo = [
    { label: "Name", value: "Salman Hamzo" },
    { label: "Location", value: "Karachi, Pakistan" },
    { label: "Phone", value: "+923333656164" },
    { label: "Email", value: "salmanhamza2580@gmail.com" },
    { label: "Experience", value: "Junior Level" },
    { label: "Status", value: "Available" },
    { label: "LinkedIn", value: "linkedin.com/in/salman-h-32101b216", link: "https://www.linkedin.com/in/salman-h-32101b216" },
    { label: "Languages", value: "English, Urdu, Sindhi" },
  ] as Array<{ label: string; value: string; link?: string }>;

  return (
    <section id="about" className="py-20 portfolio-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text">About Me</h2>
          <div className="w-20 h-1 portfolio-accent-bg mx-auto"></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 portfolio-accent">My Toolbox</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {toolboxItems.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="terminal-glow border-red-500/30 card-hover cyber-border bg-black/50">
                    <CardContent className="p-4 text-center">
                      <div className={`text-3xl mb-2 ${tool.color}`}>{tool.icon}</div>
                      <p className="text-sm portfolio-text font-medium code-text">{tool.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 portfolio-accent">About Me.</h3>
            <p className="portfolio-text-muted mb-6 leading-relaxed">
              Hi, I am Salman Hamzo, a dynamic Junior Software Engineer in my third year of Computer Science 
              at SZABIST University. I have completed a rigorous iOS Development internship, gaining hands-on 
              experience with cutting-edge tools and high-quality mobile applications. My solid foundation in 
              software engineering principles and various programming languages, coupled with strong problem-solving 
              skills, prepares me well for the tech industry. I am passionate about technology, innovation, and 
              committed to applying my skills while collaborating with professionals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex justify-between"
                >
                  <span className="font-semibold portfolio-accent">{info.label}:</span>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="portfolio-text hover:portfolio-accent transition-colors duration-200 underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="portfolio-text">{info.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

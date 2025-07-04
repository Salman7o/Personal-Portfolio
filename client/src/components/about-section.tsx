import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const toolboxItems = [
    { name: "React.js", icon: "⚛️", color: "text-blue-400" },
    { name: "JavaScript", icon: "🟨", color: "text-yellow-400" },
    { name: "Mongo DB", icon: "🍃", color: "text-green-400" },
    { name: "Express", icon: "🚀", color: "text-purple-400" },
    { name: "Git", icon: "🔧", color: "text-orange-400" },
    { name: "React-Native", icon: "📱", color: "text-blue-300" },
    { name: "HTML", icon: "🌐", color: "text-red-400" },
    { name: "CSS", icon: "🎨", color: "text-blue-500" },
  ];

  const personalInfo = [
    { label: "Name", value: "Shahzaib Faisal" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Phone", value: "03323482085" },
    { label: "Email", value: "shahzaibfaisal44@gmail.com" },
    { label: "Experience", value: "+2 Years" },
    { label: "Freelance", value: "Available" },
    { label: "LinkedIn", value: "shahzaib-faisal-o" },
    { label: "Language", value: "English/Urdu" },
  ];

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
                  <Card className="portfolio-bg-alt border-slate-600 card-hover">
                    <CardContent className="p-4 text-center">
                      <div className={`text-3xl mb-2 ${tool.color}`}>{tool.icon}</div>
                      <p className="text-sm portfolio-text">{tool.name}</p>
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
              Hi i am Shahzaib Faisal and I began using HTML & CSS when first began. I've spent most of my 
              waking hours for the last four years designing, programming and operating React.js sites go beyond 
              with exclusive designer. Apart from this I love to travel, mentor designers, review design portfolios 
              & read books on everything related to design.
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
                  <span className="portfolio-text">{info.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

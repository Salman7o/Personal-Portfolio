import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function EducationSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "SZABIST University",
      period: "2022 - 2026",
      description: "Currently pursuing a CS degree with a strong focus on web development, AI integration, and full-stack technologies. Gained hands-on experience through academic projects involving MERN stack, Python, and React Native."
    },
    {
      title: "Intermediate in Computer Science",
      institution: "Commerce College",
      period: "2020 - 2022",
      description: "Built a solid foundation in mathematics and logic, which helped develop a structured and analytical mindset for programming and problem-solving."
    },
    {
      title: "Matriculation (Science)",
      institution: "Karachi Public School",
      period: "2018 - 2020",
      description: "Completed matric with distinction in science subjects. Developed early interest in computing, leading to exploration of HTML, CSS, and basic JavaScript."
    }
  ];

  const experienceData = [
    {
      title: "Frontend Developer Intern",
      company: "Freelance",
      period: "Remote — 2024",
      description: "Developed multiple responsive websites using React and plain CSS. Gained experience in reusable component structures and integrating REST APIs."
    },
    {
      title: "AI Project — HealthWise",
      company: "ZAB-E-FEST Project",
      period: "2025",
      description: "Designed a real-world health prediction app using AI algorithms like k-NN and Decision Tree. Built with Flask, React, and chart visualizations to present meaningful health stats."
    },
    {
      title: "Portfolio Website Developer",
      company: "Personal Project",
      period: "2025",
      description: "Built a modern, single-page React portfolio showcasing skills, projects, and contact info. Implemented animations, sliders, and keyboard typing effects."
    }
  ];

  return (
    <section id="education" className="py-20 portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text">Education & Experience</h2>
          <div className="w-20 h-1 portfolio-accent-bg mx-auto"></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 portfolio-accent">Education</h3>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="portfolio-bg-alt border-slate-600 card-hover">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-2 portfolio-text">{edu.title}</h4>
                      <p className="portfolio-accent mb-2">{edu.institution} / {edu.period}</p>
                      <p className="portfolio-text-muted text-sm leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 portfolio-accent">Experience</h3>
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="portfolio-bg-alt border-slate-600 card-hover">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-2 portfolio-text">{exp.title}</h4>
                      <p className="portfolio-accent mb-2">{exp.company} / {exp.period}</p>
                      <p className="portfolio-text-muted text-sm leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

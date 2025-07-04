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
      description: "Currently pursuing a CS degree with strong focus on software engineering, mobile development, and AI integration. Gained hands-on experience through academic projects involving iOS development, Java, and full-stack technologies."
    },
    {
      title: "Intermediate in General Science",
      institution: "DHACSS SKBZ Campus",
      period: "2019 - 2021",
      description: "Built a solid foundation in mathematics and science subjects, which helped develop a structured and analytical mindset for programming and problem-solving."
    }
  ];

  const experienceData = [
    {
      title: "iOS Developer Intern",
      company: "Analog Mutations",
      period: "July 2023 - October 2023",
      description: "Applied modern design patterns to ensure high performance and scalability. Designed and implemented multiple iOS applications using Swift and Objective-C. Utilized Xcode and Interface Builder to create user interfaces. Developed and maintained unit tests for iOS applications."
    },
    {
      title: "Co-founder - StudyMate Platform",
      company: "Startup Project",
      period: "2024 - Present",
      description: "Co-founded StudyMate, Pakistan's first open-access peer tutoring platform built by students, for students. Developed a working prototype using React.js, designed the revenue model, and led the startup pitch at SZABIST's ZAB E Fest 2025."
    },
    {
      title: "Competition Participant & Finalist",
      company: "ZAB E Fest - SZABIST Karachi",
      period: "2024 - 2025",
      description: "Qualified and participated in multiple competitions including UI/UX Design Competition (2024 & 2025), Startup Blueprint with StudyMate platform, and AI Competition with innovative AI-based concept."
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

import { motion } from "framer-motion";
import SkillBar from "@/components/skill-bar";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function SkillsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    { name: "HTML", percentage: 90, color: "bg-red-400", icon: "🌐" },
    { name: "CSS", percentage: 90, color: "bg-blue-400", icon: "🎨" },
    { name: "React", percentage: 89, color: "bg-blue-300", icon: "⚛️" },
    { name: "JavaScript", percentage: 80, color: "bg-yellow-400", icon: "🟨" },
    { name: "Mongo DB", percentage: 70, color: "bg-green-400", icon: "🍃" },
    { name: "Express", percentage: 74, color: "bg-purple-400", icon: "🚀" },
    { name: "Visual Studio Code", percentage: 88, color: "bg-blue-500", icon: "💻" },
    { name: "Python", percentage: 43, color: "bg-yellow-300", icon: "🐍" },
  ];

  return (
    <section id="skills" className="py-20 portfolio-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text">Skills</h2>
          <div className="w-20 h-1 portfolio-accent-bg mx-auto"></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillBar
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                icon={skill.icon}
                isVisible={isIntersecting}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

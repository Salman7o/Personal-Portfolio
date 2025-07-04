import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  icon: string;
  isVisible: boolean;
}

export default function SkillBar({ name, percentage, color, icon, isVisible }: SkillBarProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-xl mr-3">{icon}</span>
          <span className="font-semibold portfolio-text">{name}</span>
        </div>
        <span className="portfolio-accent font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <motion.div
          className={`progress-bar ${color} h-2 rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${animatedPercentage}%` }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

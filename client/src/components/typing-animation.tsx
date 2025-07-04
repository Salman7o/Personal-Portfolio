import { useState, useEffect } from "react";

export default function TypingAnimation() {
  const texts = [
    "iOS Developer",
    "Junior Software Engineer", 
    "Full Stack Developer",
    "Mobile App Developer",
    "React.js Developer",
    "Problem Solver"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
        
        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
        
        if (currentCharIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [currentTextIndex, currentCharIndex, isDeleting, texts]);

  return (
    <span className="portfolio-accent typing-animation font-semibold">
      {displayText}
    </span>
  );
}

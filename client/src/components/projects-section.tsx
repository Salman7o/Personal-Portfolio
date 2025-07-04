import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      title: "StudyMate Peer Learning Platform",
      description: "Co-founded Pakistan's first open-access peer tutoring platform built by students, for students. Features smart matching, session tracking, and simulated POS payment system to empower financially constrained students.",
      technologies: ["React.js", "JavaScript", "Node.js", "Payment Integration"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      category: "Startup Project",
      status: "Live",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Library Management System",
      description: "Comprehensive library management system built with Java and MySQL. Features book management, member registration, transaction handling, and efficient database operations.",
      technologies: ["Java", "MySQL", "Database Design", "Object-Oriented Programming"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      category: "Academic Project",
      status: "Completed",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Eater and Passer Game",
      description: "Console-based game developed in C featuring roles for consuming and moving objects. Implemented efficient game logic, user interface, and memory management.",
      technologies: ["C Language", "Game Development", "Memory Management", "Algorithms"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      category: "Game Development",
      status: "Completed",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Number Guessing Game",
      description: "Java-based interactive game project reinforcing core Java concepts including object-oriented programming, user input handling, and control structures with comprehensive error handling.",
      technologies: ["Java", "OOP", "Error Handling", "User Interface"],
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      category: "Educational Project",
      status: "Completed",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text">Featured Projects</h2>
          <div className="w-20 h-1 portfolio-accent-bg mx-auto mb-6"></div>
          <p className="portfolio-text-muted max-w-2xl mx-auto">
            A showcase of my development journey through innovative projects, from startup ventures to academic achievements.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="portfolio-bg-alt border-slate-600 overflow-hidden h-full transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${project.color} text-white border-none`}>
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={project.status === "Live" ? "default" : "secondary"} className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 portfolio-text group-hover:portfolio-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="portfolio-text-muted text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs portfolio-border">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <button className="flex items-center gap-2 portfolio-accent hover:portfolio-accent-hover transition-colors text-sm font-medium">
                      <ExternalLink size={16} />
                      View Project
                    </button>
                    <button className="flex items-center gap-2 portfolio-text-muted hover:portfolio-text transition-colors text-sm">
                      <Github size={16} />
                      Source Code
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
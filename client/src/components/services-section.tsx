import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with focus on user experience, accessibility, and modern design principles.",
      icon: "🎨",
      bgColor: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
      iconColor: "text-red-400"
    },
    {
      title: "Web Development",
      description: "Building responsive, performant web applications using React.js, JavaScript, and modern web technologies with clean, maintainable code.",
      icon: "🌐",
      bgColor: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400"
    },
    {
      title: "Mobile App Development",
      description: "Developing native iOS applications with Swift and SwiftUI, focusing on performance, user experience, and App Store guidelines.",
      icon: "📱",
      bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications, APIs, and database solutions with focus on scalability, security, and performance optimization.",
      icon: "⚙️",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    }
  ];

  return (
    <section id="services" className="py-20 portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text code-text">Services</h2>
          <div className="w-20 h-1 portfolio-accent-bg mx-auto mb-6"></div>
          <h3 className="text-xl font-semibold mb-4 portfolio-text code-text">CRAFTING DIGITAL SOLUTIONS WITH PRECISION</h3>
          <p className="portfolio-text-muted max-w-2xl mx-auto">
            Delivering comprehensive software solutions from concept to deployment, specializing in modern web technologies, mobile applications, and user-centered design.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`terminal-glow border-red-500/30 card-hover h-full ${service.bgColor} cyber-border bg-black/50 backdrop-blur-sm`}>
                <CardContent className="p-6 text-center">
                  <div className={`text-6xl mb-4 ${service.iconColor} glow-effect`}>
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 portfolio-accent code-text">{service.title}</h4>
                  <p className="portfolio-text-muted text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

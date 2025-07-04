import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const services = [
    {
      title: "iOS App Development",
      description: "I specialize in creating native iOS applications using Swift and SwiftUI, focusing on performance, user experience, and modern design patterns.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "iOS app development on iPhone"
    },
    {
      title: "Full Stack Development",
      description: "I develop complete web applications using modern technologies like React.js, JavaScript, and backend integration with focus on scalability.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Full stack web development"
    },
    {
      title: "Software Engineering",
      description: "I provide comprehensive software engineering solutions including system design, code optimization, and implementing best practices for maintainable applications.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Software engineering and coding"
    },
    {
      title: "Problem Solving & Innovation",
      description: "I excel at analyzing complex problems, developing innovative solutions, and implementing efficient algorithms to solve real-world challenges.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Problem solving and innovation"
    }
  ];

  return (
    <section id="services" className="py-20 portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text">Services</h2>
          <div className="w-20 h-1 portfolio-accent-bg mx-auto mb-6"></div>
          <h3 className="text-xl font-semibold mb-4 portfolio-text">BUILDING DIGITAL PRODUCTS WITH A BETTER EXPERIENCE</h3>
          <p className="portfolio-text-muted max-w-2xl mx-auto">
            My mission is to create innovative, user-centric digital products that combine design, 
            functionality, and user satisfaction.
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
              <Card className="portfolio-bg-alt border-slate-600 card-hover h-full">
                <CardContent className="p-6 text-center">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h4 className="text-lg font-semibold mb-2 portfolio-accent">{service.title}</h4>
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

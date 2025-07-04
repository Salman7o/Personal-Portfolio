import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const services = [
    {
      title: "UI/UX Design",
      description: "I specialize in creating intuitive and visually engaging designs to ensure an optimal user experience across all platforms.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "UI/UX design mockups and wireframes"
    },
    {
      title: "UX Research",
      description: "My UX research methods help in understanding the user behavior and ensuring designs are tailored to their needs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "UX research process and user analysis"
    },
    {
      title: "Web Development",
      description: "I develop responsive, fast, and scalable web applications using the latest technologies such as React, Node.js, and Python.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Programming code on computer screen"
    },
    {
      title: "AI Solutions",
      description: "I provide AI-driven solutions, including machine learning models, data analytics, and automation to help businesses make data-driven decisions.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "AI and machine learning data visualization"
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

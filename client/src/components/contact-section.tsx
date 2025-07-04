import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white text-xl" />,
      title: "EMAIL",
      value: "salmanhamza2580@gmail.com",
    },
    {
      icon: <Phone className="text-white text-xl" />,
      title: "PHONE",
      value: "+923333656164",
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/salman-h-32101b216", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/salmanhamzo", label: "GitHub" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/salmanhamzo", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 portfolio-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text code-text">Get In Touch</h2>
          <div className="w-20 h-1 portfolio-accent-bg mx-auto mb-6"></div>
          <h3 className="text-xl font-semibold portfolio-text code-text">CONNECT AND COLLABORATE</h3>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="portfolio-accent-bg p-4 rounded-full">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg portfolio-text">{info.title}</h4>
                  <p className="portfolio-text-muted">{info.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex space-x-4 mt-8"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="portfolio-bg hover:portfolio-accent-bg p-3 rounded-full transition-colors portfolio-text hover:text-white"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="portfolio-bg border-slate-600">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="portfolio-text">Name</Label>
                      <Input
                        id="name"
                        {...form.register("name")}
                        className="portfolio-bg-alt border-slate-600 portfolio-text focus:border-cyan-400"
                        placeholder="Your name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="portfolio-text">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        className="portfolio-bg-alt border-slate-600 portfolio-text focus:border-cyan-400"
                        placeholder="Your email"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="portfolio-text">Subject</Label>
                    <Input
                      id="subject"
                      {...form.register("subject")}
                      className="portfolio-bg-alt border-slate-600 portfolio-text focus:border-cyan-400"
                      placeholder="Message subject"
                    />
                    {form.formState.errors.subject && (
                      <p className="text-red-400 text-sm mt-1">{form.formState.errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="portfolio-text">Message</Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      rows={5}
                      className="portfolio-bg-alt border-slate-600 portfolio-text focus:border-cyan-400"
                      placeholder="Your message"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full portfolio-accent-bg hover:portfolio-accent-hover text-white py-3 px-6 rounded-lg font-medium"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

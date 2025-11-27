import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { GraduationCap, Code, Cpu } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Pursuing Computer Engineering with focus on software development and embedded systems"
    },
    {
      icon: Code,
      title: "Development",
      description: "Experience in full-stack development, building scalable and efficient applications"
    },
    {
      icon: Cpu,
      title: "Hardware",
      description: "Knowledge in digital design, microprocessors, and hardware-software integration"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated computer engineering student with a passion for creating innovative solutions
            and pushing the boundaries of technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card hover:bg-secondary/50 transition-colors border-border card-elevated h-full">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            I'm constantly learning and exploring new technologies, from web development and mobile apps
            to embedded systems and IoT devices. My goal is to leverage my skills to create meaningful
            solutions that make a positive impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

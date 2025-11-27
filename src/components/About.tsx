import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { GraduationCap, Code, Cpu } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BTech in Computer Engineering from D Y Patil College, graduating in 2026 with strong foundation in software development"
    },
    {
      icon: Code,
      title: "Development",
      description: "Proficient in Java, Python, C, and C++, with experience in building interactive applications and efficient algorithms"
    },
    {
      icon: Cpu,
      title: "Problem Solving",
      description: "Analytical mindset with passion for data analysis and turning ideas into practical, impactful solutions"
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
            Final-year Computer Engineering student at D Y Patil College of Engineering and Technology, Ambi, graduating in 2026.
            Passionate about turning code into impactful solutions and solving real-world problems.
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
            My coding journey began with Java, Python, C, and C++, enabling me to approach problems from multiple angles. 
            My academic experience has equipped me with technical knowledge and instilled a pragmatic approach to problem-solving. 
            I'm eager to apply my skills, collaborate with teams, and contribute to meaningful projects that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

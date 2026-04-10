import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Tech Company XYZ",
      period: "Jan 2025 - Present",
      description: "Working on full-stack web development projects using modern technologies.",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Final Year Engineering Student",
      company: "D Y Patil College of Engineering",
      period: "2022 - 2026",
      description: "Pursuing BTech in Computer Engineering with focus on software development and problem-solving.",
      skills: ["Java", "Python", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="hover-highlight bg-card border-border">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

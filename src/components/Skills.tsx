import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "C", "C++"]
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "JavaFX"]
    },
    {
      category: "Database",
      skills: ["MySQL"]
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Problem Solving", "Analytical Thinking", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern software and hardware solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <h3 className="font-heading text-xl font-bold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-secondary text-foreground rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

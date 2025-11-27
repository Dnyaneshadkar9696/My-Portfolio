import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Animal Quiz",
      description: "Developed an interactive quiz app to help users learn about different animals through engaging multiple-choice questions and score tracking",
      tags: ["Java", "JavaFX", "MySQL"],
      github: "https://github.com/Dnyaneshadkar9696",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building practical solutions that combine technical skills with creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card hover:bg-secondary/50 transition-all duration-300 border-border card-elevated h-full flex flex-col group">
                <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

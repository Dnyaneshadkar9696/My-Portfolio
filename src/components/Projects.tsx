import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "QuizMaster Pro",
      description: "Smart Online Evaluation System - Developed a scalable web-based quiz system with dynamic question rendering and real-time evaluation. Implemented backend logic in Java for answer validation, score calculation, and result processing. Integrated MySQL database using JDBC for efficient data storage and retrieval. Designed responsive user interfaces using HTML, CSS, and JavaScript. Optimized database queries to improve system performance.",
      tags: ["Java", "JDBC", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Dnyaneshadkar9696",
      demo: "#"
    },
    {
      title: "ExpenseIQ",
      description: "Intelligent Expense Tracker - Built an expense tracking system to monitor and categorize daily financial transactions. Implemented JDBC connectivity with MySQL for reliable database management. Designed features to generate reports and analyze spending patterns. Used Java Collections for efficient data handling and processing. Developed CRUD operations for managing expense records effectively.",
      tags: ["Java", "JDBC", "MySQL"],
      github: "https://github.com/Dnyaneshadkar9696",
      demo: "#"
    }
  ];

  return (
    <section id="work" className="pt-24 pb-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold">
            <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="hover-highlight bg-card border border-border h-full flex flex-col">
        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col h-full">
          <div className="flex items-start justify-between mb-6">
            <h3 className="font-heading text-2xl font-bold text-foreground flex-1">
              {project.title}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/20 transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-border/20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/10 flex items-center gap-2 px-0 h-auto p-0 text-sm"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;

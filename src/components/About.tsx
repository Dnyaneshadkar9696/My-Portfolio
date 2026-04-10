import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-32 pb-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">
            <span className="text-gradient">About Me</span>
          </h2>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl"
        >
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              I'm a <span className="text-foreground font-bold">Java Full Stack Developer</span> with a strong passion for building clean, responsive, and user-friendly web applications. I enjoy turning ideas into real-world digital experiences, with a focus on writing scalable code and creating interfaces that are both functional and visually appealing.
            </p>
            
            <p className="text-muted-foreground">
              I take pride in paying attention to detail and continuously improving the user experience through thoughtful design and efficient implementation. My work combines development and design, allowing me to build applications that are both technically strong and easy to use.
            </p>
            
            <p className="text-muted-foreground">
              Currently, I am focused on strengthening my skills in full-stack development, working with technologies like <span className="text-foreground font-bold">Java</span>, <span className="text-foreground font-bold">Spring Boot</span>, and modern frontend tools. I enjoy building projects that solve real-world problems and help me grow as a developer.
            </p>

            <p className="text-muted-foreground">
              Beyond coding, I actively explore new technologies, improve my problem-solving skills, and work on projects that enhance my portfolio. I am always eager to learn, collaborate, and contribute to building impactful digital solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

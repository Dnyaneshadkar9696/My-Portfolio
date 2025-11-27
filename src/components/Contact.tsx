import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-xl border border-border card-elevated"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1">Email</h3>
                <a 
                  href="mailto:dnyaneshadkar@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  dnyaneshadkar@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1">Location</h3>
                <p className="text-muted-foreground">Pune, India</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-border">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow flex items-center gap-2"
              onClick={() => window.location.href = 'mailto:dnyaneshadkar@gmail.com'}
            >
              <Mail className="w-5 h-5" />
              Send Email
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="flex items-center gap-2"
              onClick={() => window.open('https://github.com/Dnyaneshadkar9696', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="flex items-center gap-2"
              onClick={() => window.open('https://linkedin.com/in/dnyaneshadkar96', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

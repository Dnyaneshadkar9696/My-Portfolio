import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
      {/* Background with theme matching other pages */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background using design system colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        
        {/* Animated decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-80 h-80 bg-primary rounded-full mix-blend-screen blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
          >
            <span className="block text-foreground">HI, I'M</span>
            <span className="text-gradient font-black">
              DNYANESH
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-2xl text-muted-foreground mb-12 font-light tracking-wide"
          >
            Java Full Stack Developer
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Hero;

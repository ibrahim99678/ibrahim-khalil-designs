import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const useTypingEffect = (text: string, speed: number = 100, delay: number = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const startTyping = () => {
      let i = 0;
      const type = () => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};

const jobTitles = [
  "IT Manager",
  "ERP Specialist", 
  "Infrastructure Architect",
  "Software Engineer",
  "System Administrator"
];

const useCyclingTypewriter = (texts: string[], typingSpeed: number = 80, pauseDuration: number = 2000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentIndex];

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentIndex, texts, typingSpeed, pauseDuration]);

  return displayedText;
};

const Hero = () => {
  const { displayedText: nameText, isComplete: nameComplete } = useTypingEffect(
    "Mohammad Ibrahim Khalil",
    80,
    500
  );
  const { displayedText: phoneText } = useTypingEffect(
    "01911848073",
    100,
    nameComplete ? 0 : 2500
  );
  const jobTitle = useCyclingTypewriter(jobTitles, 80, 2000);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-6"
          >
            IT Infrastructure & Software Engineering
          </motion.p>

          {/* Main headline with typing effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="inline-block min-h-[1.2em]">
              {nameText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </motion.h1>

          {/* Mobile number with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-lg md:text-xl text-primary mb-6"
          >
            <Phone size={20} className="text-primary" />
            <span className="font-mono tracking-wider">
              {phoneText}
              {!nameComplete && <span className="opacity-0">|</span>}
              {nameComplete && <span className="animate-pulse text-primary">|</span>}
            </span>
          </motion.div>

          {/* Rotating Job Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary font-medium mb-6 h-10"
          >
            <span>{jobTitle}</span>
            <span className="animate-pulse">|</span>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            15+ years driving enterprise IT excellence through ERP implementation, 
            infrastructure architecture, and innovative software solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium glow-effect"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary px-8 py-6 text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Chat
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/mohammad-ibrahim-khalil-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/ibrahim99678"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="/Mohammad_Ibrahim_Khalil_IT.pdf"
              download
              className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 text-sm"
              aria-label="Download Resume"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
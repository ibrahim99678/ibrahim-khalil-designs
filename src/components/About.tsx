import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-3" />
                <img
                  src={profilePhoto}
                  alt="Mohammad Ibrahim Khalil"
                  className="relative rounded-2xl object-cover w-full h-full shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-2xl" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-primary text-sm tracking-widest uppercase mb-4">
                About Me
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Building Technology That{" "}
                <span className="text-gradient">Empowers Business</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Results-driven IT Manager with over 15 years of progressive experience leading 
                  enterprise IT operations across pharmaceuticals, retail chains, manufacturing, 
                  and diversified group companies. Proven expertise in ERP implementation, 
                  IT infrastructure management, cybersecurity, and large-scale network operations, 
                  ensuring up to <span className="text-foreground font-medium">99.99% system uptime</span>.
                </p>
                <p>
                  Highly skilled in aligning technology with business strategy, leading cross-functional 
                  IT teams, managing vendors and budgets, and driving digital transformation initiatives 
                  that improve efficiency, data accuracy, and operational resilience. Notable achievements 
                  include deploying ERP systems for <span className="text-foreground font-medium">100+ retail outlets</span>, 
                  managing <span className="text-foreground font-medium">30+ physical and virtual servers</span>, 
                  and reducing IT operational costs by <span className="text-foreground font-medium">15% annually</span>.
                </p>
                <p>
                  Certified in CCNA, MTCRE, MTCNA, and Cybersecurity. Holding a B.Sc. in Computer 
                  Science & Engineering from Darul Ihsan University, and currently pursuing a 
                  Postgraduate Diploma in Microsoft Web Application from Washington University of 
                  Science and Technology.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                <div>
                  <p className="font-display text-3xl font-bold text-gradient">15+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-gradient">100+</p>
                  <p className="text-sm text-muted-foreground mt-1">Outlets Deployed</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-gradient">1000+</p>
                  <p className="text-sm text-muted-foreground mt-1">Users Supported</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
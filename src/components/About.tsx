import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.png";

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
                  With over 15 years of experience in enterprise IT, I've led transformative 
                  projects across pharmaceuticals, diagnostics, retail, corporate sectors, 
                  ISPs, and healthcare networks.
                </p>
                <p>
                  My expertise spans ERP implementation, server/network administration, 
                  and healthcare IT system integration. Notable achievements include deploying 
                  centralized ERP systems for <span className="text-foreground font-medium">52 AKS Pharmacy outlets</span>, 
                  HIS integration for <span className="text-foreground font-medium">12 AKS Healthcare Diagnostics Centers</span>, 
                  and full IT infrastructure setup for <span className="text-foreground font-medium">Islami Bank Hospitals</span> and 
                  <span className="text-foreground font-medium"> Jamuna Fertilizer Company Ltd</span>.
                </p>
                <p>
                  Certified in Ubuntu/Linux Server and CCNA, holding a B.Sc. in Computer 
                  Science & Engineering, and currently pursuing a Postgraduate Diploma in 
                  Software Engineering. Passionate about continuous improvement, data protection, 
                  and scalable system design.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                <div>
                  <p className="font-display text-3xl font-bold text-gradient">15+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-gradient">52+</p>
                  <p className="text-sm text-muted-foreground mt-1">Outlets Deployed</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-gradient">12+</p>
                  <p className="text-sm text-muted-foreground mt-1">Centers Integrated</p>
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
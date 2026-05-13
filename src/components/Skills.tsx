import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "IT Strategy & Leadership", items: ["IT Strategy & Roadmap", "IT Infrastructure Planning", "IT Budget & Vendor Management", "Team Leadership & Mentoring"], level: 95 },
  { category: "ERP/CRM Implementation", items: ["ERP Deployment & Customization", "CRM & Business Systems", "Inventory, Finance & HR Modules", "Data Integrity & Reporting"], level: 93 },
  { category: "Enterprise Network Architecture", items: ["LAN/WAN, TCP/IP, DHCP, DNS", "OSPF, NAT, VPN", "MikroTik (MTCNA, MTCRE)", "CCNA Routing & Switching"], level: 95 },
  { category: "Server & Datacenter Administration", items: ["Windows Server", "Linux Server", "Active Directory & Domain Controller", "Microsoft 365 (Exchange, Teams, SharePoint)"], level: 92 },
  { category: "Cybersecurity & Governance", items: ["Firewall & Access Control", "Antivirus, DLP, VPN", "IT Policy Enforcement", "Backup & Disaster Recovery"], level: 90 },
  { category: "Software Development", items: ["C# / .NET 8", "ASP.NET Core MVC", "Angular & TypeScript", "OOP & Design Patterns"], level: 85 },
  { category: "Databases", items: ["MS SQL Server", "PostgreSQL", "MySQL", "Oracle SQL & DBA (In Progress)"], level: 88 },
  { category: "Cloud, DevOps & AI Tools", items: ["Microsoft Azure App Services", "IIS Deployment", "ChatGPT, Claude, Gemini, DeepSeek", "Cursor AI, Lovable, n8n MCP"], level: 88 },
];

const hiringRoles = [
  "IT Manager",
  "Head of IT",
  "Infrastructure Manager",
  "ERP Manager",
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
          {skill.category}
        </h4>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="progress-bar mb-3">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="text-xs px-2.5 py-1 bg-secondary text-muted-foreground rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-widest uppercase mb-4">
              Tech Stack & Skillset
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set spanning infrastructure, development, and enterprise solutions.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <SkillBar key={skill.category} skill={skill} index={index} />
            ))}
          </div>

          {/* Hiring For Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-gradient rounded-2xl p-8 md:p-10 border border-border"
          >
            <h3 className="font-display text-xl md:text-2xl font-bold mb-6 text-center">
              Looking For Opportunities In
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {hiringRoles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-full font-medium text-sm md:text-base hover:bg-primary/20 transition-colors cursor-default"
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
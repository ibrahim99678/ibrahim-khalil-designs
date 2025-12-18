import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Server, Database, Monitor, Network } from "lucide-react";

const projects = [
  {
    title: "AKS Pharmacy ERP System",
    category: "ERP Implementation",
    description: "Centralized ERP deployment for 52 pharmacy outlets with real-time inventory sync, POS integration, and automated reporting.",
    icon: Database,
    tech: ["C#", "ASP.NET Core", "MS SQL", "Angular"],
    metrics: "52 Outlets | 99.9% Uptime",
  },
  {
    title: "AKS Healthcare HIS Integration",
    category: "Healthcare IT",
    description: "Hospital Information System integration for 12 diagnostics centers, including PACS, LIS, and patient management modules.",
    icon: Monitor,
    tech: ["HL7", "FHIR", "MySQL", "REST APIs"],
    metrics: "12 Centers | 50K+ Patients/Month",
  },
  {
    title: "Mir Telecom Group IT Infrastructure",
    category: "Enterprise Systems",
    description: "Led enterprise-wide IT infrastructure supporting 5+ business units across manufacturing, distribution, and retail sectors with 30+ physical and virtual servers.",
    icon: Server,
    tech: ["Windows Server", "Linux", "VMware", "ERP Systems"],
    metrics: "5+ Business Units | 99.99% Uptime",
  },
  {
    title: "ACI Logistics (Shwapno) Operations",
    category: "Retail Operations",
    description: "Supervised daily operations across multiple retail outlets with end-to-end supply chain coordination, inventory control, and operational SOP implementation.",
    icon: Network,
    tech: ["Supply Chain", "Inventory Management", "POS", "ERP"],
    metrics: "20% Sales Efficiency | 98% Stock Accuracy",
  },
  {
    title: "Islami Bank Hospital IPTSP Infrastructure",
    category: "Infrastructure",
    description: "Complete IT infrastructure setup including network design, server deployment, security implementation, and disaster recovery.",
    icon: Server,
    tech: ["VMware", "Linux", "Windows Server", "Cisco"],
    metrics: "500+ Endpoints | Zero Downtime Migration",
  },
  {
    title: "Jamuna Fertilizer IPTSP Systems",
    category: "Enterprise Systems",
    description: "Enterprise-wide IT infrastructure modernization with ERP integration, network redesign, and security hardening.",
    icon: Network,
    tech: ["SAP Integration", "Active Directory", "VLAN", "Firewall"],
    metrics: "1000+ Users | Multi-site Deployment",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group card-gradient rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-500"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="text-primary" size={24} />
        </div>
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Metrics */}
      <p className="text-primary text-sm font-medium mb-4">
        {project.metrics}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 bg-secondary text-muted-foreground rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-4 border-t border-border">
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
        >
          <ExternalLink size={16} />
          <span>Case Study</span>
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
        >
          <Github size={16} />
          <span>Details</span>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-card">
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
              Featured Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Projects & Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-level implementations that delivered measurable business impact.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
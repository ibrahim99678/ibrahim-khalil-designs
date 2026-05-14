import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Server, Database, Monitor, Network, Code2, ShoppingCart, Hotel, Stethoscope, MessageSquare, Boxes } from "lucide-react";

const projects = [
  {
    title: "Update Interior BD Limited",
    category: "IT Management",
    description: "Lead end-to-end IT operations for a multi-location interior solutions company, overseeing ERP/CRM implementation, cybersecurity, and infrastructure with 99.9% uptime.",
    icon: Server,
    tech: ["ERP", "CRM", "Firewalls", "Cloud Tools", "Biometric Systems"],
    metrics: "30% Efficiency Gain | 70% Security Risk Reduction",
  },
  {
    title: "AKS Khan Healthcare Limited",
    category: "ERP & Healthcare IT",
    description: "Spearheaded ERP system implementation across 100+ retail outlets and manufacturing units, improving data processing by 25% and reducing inventory discrepancies by 30%.",
    icon: Database,
    tech: ["Windows/Linux Servers", "Firewalls", "VPN", "MS SQL", "PostgreSQL"],
    metrics: "100+ Outlets | 99.9% Uptime | 1000+ Users",
  },
  {
    title: "Mir Group of Companies Limited",
    category: "Enterprise Systems",
    description: "Designed, deployed, and maintained enterprise IT infrastructure supporting 5+ business units with 30+ physical and virtual servers, achieving 99.99% uptime.",
    icon: Server,
    tech: ["Windows Server", "Linux", "VMware", "ERP Integration", "Cybersecurity"],
    metrics: "5+ Business Units | 25% Faster Reporting | 20% Error Reduction",
  },
  {
    title: "Interface IT Limited",
    category: "IT Support Engineering",
    description: "Provided technical support for hardware, software, and network systems, resolving Level 1 and Level 2 tickets with a 98% SLA resolution rate and 95%+ customer satisfaction.",
    icon: Monitor,
    tech: ["Hardware", "Networking", "Routers & Switches", "Desktop Support"],
    metrics: "30 Tickets/Day | 98% SLA | 95%+ CSAT",
  },
  {
    title: "Islami Bank Hospital IPTSP Infrastructure",
    category: "Infrastructure",
    description: "Complete IT infrastructure setup including network design, server deployment, security implementation, and disaster recovery for healthcare facilities.",
    icon: Server,
    tech: ["VMware", "Linux", "Windows Server", "Cisco", "Network Design"],
    metrics: "500+ Endpoints | Zero Downtime Migration",
  },
  {
    title: "Jamuna Fertilizer IPTSP Systems",
    category: "Enterprise Systems",
    description: "Enterprise-wide IT infrastructure modernization with ERP integration, network redesign, and security hardening for manufacturing operations.",
    icon: Network,
    tech: ["SAP Integration", "Active Directory", "VLAN", "Firewall"],
    metrics: "1000+ Users | Multi-site Deployment",
  },
];

const softwareProjects = [
  {
    title: "Asset Management System",
    stack: "ASP.NET Core .NET 8",
    url: "http://103.86.193.112:2040/",
    github: "https://github.com/ibrahim99678",
    icon: Boxes,
  },
  {
    title: "E-Commerce Platform",
    stack: "ASP.NET Core MVC + EF Core",
    url: "http://103.86.193.112:2085/",
    github: "https://github.com/ibrahim99678/ShopSphereCommerce",
    icon: ShoppingCart,
  },
  {
    title: "Hotel Management System",
    stack: "ASP.NET Core .NET 8",
    url: "http://103.86.193.112:2080/",
    github: "https://github.com/ibrahim99678/HotelManagementSystem",
    icon: Hotel,
  },
  {
    title: "Dental ERP System",
    stack: "ASP.NET Core .NET 8",
    url: "http://103.86.193.112:2070/",
    github: "https://github.com/ibrahim99678/DentalERP",
    icon: Stethoscope,
  },
  {
    title: "Question & Answer Platform",
    stack: "ASP.NET Core .NET 8",
    url: "http://querynest.2bd.net:2060/",
    github: "https://github.com/ibrahim99678/QueryNestForum",
    icon: MessageSquare,
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

          {/* Software Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <p className="text-primary text-sm tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                <Code2 size={16} /> Software Projects
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Live Applications I've Built
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                Click any project to visit the live deployment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {softwareProjects.map((sp, i) => {
                const Icon = sp.icon;
                return (
                  <motion.div
                    key={sp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                    className="group card-gradient rounded-xl p-5 border border-border hover:border-primary/40 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                        {sp.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">{sp.stack}</p>
                      <p className="text-xs text-primary/80 truncate font-mono mb-3">{sp.url}</p>
                      <div className="flex gap-3 pt-3 border-t border-border">
                        <a
                          href={sp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-xs"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={sp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-xs"
                        >
                          <Github size={14} />
                          <span>Source</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
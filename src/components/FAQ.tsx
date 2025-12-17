import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of projects do you specialize in?",
    answer: "I specialize in enterprise IT infrastructure, ERP implementation, healthcare IT systems (HIS, PACS, LIS), and custom software development. My experience spans pharmaceuticals, retail chains, corporate networks, ISPs, and healthcare organizations.",
  },
  {
    question: "What is your approach to ERP implementation?",
    answer: "I follow a structured methodology: thorough needs assessment, solution design, phased implementation, comprehensive testing, user training, and post-deployment support. This approach ensures minimal disruption and maximum ROI for businesses.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Absolutely. I believe in building long-term relationships. Post-deployment support includes monitoring, maintenance, troubleshooting, and continuous optimization to ensure systems perform at their best.",
  },
  {
    question: "What certifications do you hold?",
    answer: "I'm certified in Ubuntu/Linux Server Administration and CCNA (Cisco Certified Network Associate). I hold a B.Sc. in Computer Science & Engineering and am currently pursuing a Postgraduate Diploma in Software Engineering.",
  },
  {
    question: "How do you ensure data security in your projects?",
    answer: "Security is paramount in all my implementations. I follow industry best practices including encryption, access controls, regular audits, backup strategies, and compliance with relevant regulations like HIPAA for healthcare projects.",
  },
  {
    question: "Are you available for remote or on-site work?",
    answer: "I'm flexible with both arrangements. I've successfully managed remote teams and on-site deployments. The choice depends on project requirements and client preferences.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container px-6">
        <div ref={ref} className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm tracking-widest uppercase mb-4">
              FAQ
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions about my work and expertise.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-gradient border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
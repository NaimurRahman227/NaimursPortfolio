import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, Cpu, Cloud, Smartphone, ShieldCheck } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["React", "Next.js","JavaScript", "TypeScript", "Tailwind CSS" ,"Framer Motion"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Express", "Python","MySQL", "MongoDB", "Redis"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    category: "DevOps",
    icon: <Cloud className="w-6 h-6" />,
    items: ["Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD", "Terraform"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    category: "Tools & Others",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Git", "GraphQL", "WebSockets", "TDD", "System Design", "Microservices"],
    color: "from-purple-500/20 to-pink-500/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface-muted/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Technical Knowledge</h2>
            <h3 className="text-4xl md:text-5xl font-bold">My Tech Stack.</h3>
            <p className="text-text-muted mt-6 text-lg">
              I use a modern and proven set of tools to build scalable, high-performance applications. 
              My expertise spans across the entire development lifecycle.
            </p>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-sm font-mono">
            <Code2 className="w-4 h-4" />
            <span>Full Stack Proficiency</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-primary/30 transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold mb-6">{skill.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full bg-white/5 border border-border text-sm text-text-muted group-hover:text-text-base transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Experience Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase font-bold tracking-wider">Security</p>
                <p className="font-medium">OWASP Top 10 Aware</p>
              </div>
           </div>
           <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase font-bold tracking-wider">Mobile</p>
                <p className="font-medium">Responsive First Design</p>
              </div>
           </div>
           <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase font-bold tracking-wider">Data</p>
                <p className="font-medium">ACID Compliant Systems</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

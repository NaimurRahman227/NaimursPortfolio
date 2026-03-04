import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Terminal, Code2, Database, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-gradient"
          >
            Crafting Digital <br /> 
            <span className="text-primary italic">Excellence</span> Through Code.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed"
          >
            Full Stack Developer specializing in building high-performance web applications. 
            I bridge the gap between complex backend systems and intuitive frontend experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-text-base text-surface font-semibold rounded-full hover:opacity-90 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-3 px-2">
              <a href="https://github.com/NaimurRahman227" className="p-3 rounded-full border border-border hover:bg-white/5 transition-colors text-text-muted hover:text-text-base">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/naimur7rahman/" className="p-3 rounded-full border border-border hover:bg-white/5 transition-colors text-text-muted hover:text-text-base">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:nmrahman1652@gmail.com" className="p-3 rounded-full border border-border hover:bg-white/5 transition-colors text-text-muted hover:text-text-base">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Tech Badges */}
      <div className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 space-y-6">
        {[
          { icon: <Globe className="w-5 h-5" />, label: 'Frontend Architecture' },
          { icon: <Database className="w-5 h-5" />, label: 'Scalable Backends' },
          { icon: <Terminal className="w-5 h-5" />, label: 'DevOps & Cloud' },
          { icon: <Code2 className="w-5 h-5" />, label: 'Clean Code' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            className="glass px-6 py-4 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-colors cursor-default"
          >
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              {item.icon}
            </div>
            <span className="font-medium text-sm">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

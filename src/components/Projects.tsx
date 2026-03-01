import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "QuantumFlow Dashboard",
    description: "A real-time analytics platform for high-frequency trading data. Built with Next.js, WebSockets, and D3.js for complex visualizations.",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "React"],
    image: "https://picsum.photos/seed/trading/800/600",
    link: "https://dashboard-psi-orpin-50.vercel.app/",
    github: "https://github.com/NaimurRahman227/Dashboard"
  },
  {
    title: "EcoSphere E-Commerce",
    description: "A sustainable marketplace platform with advanced filtering, real-time inventory tracking, and integrated carbon footprint calculation.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://picsum.photos/seed/eco/800/600",
    link: "https://naimurrahman227.github.io/First_Sip_Coffee/",
    github: "https://github.com/NaimurRahman227/First_Sip_Coffee"
  },
  {
    title: "Nexus Collaborative Editor",
    description: "A real-time document editing tool supporting multi-user collaboration, version history, and rich text formatting using CRDTs.",
    tags: ["React", "Socket.io", "MongoDB", "Express"],
    image: "https://picsum.photos/seed/collab/800/600",
    link: "https://naimurrahman227.github.io/BikersZone/",
    github: "https://github.com/NaimurRahman227/BikersZone"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects.</h3>
          <p className="text-text-muted text-lg">
            A collection of projects that demonstrate my ability to solve complex problems 
            and deliver high-quality software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.3,
                ease: "easeOut"
              }}
              className="group relative glass rounded-[2.5rem] overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative `aspect-16/10` overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                   <a href={project.link} className="p-4 bg-text-base text-surface rounded-full hover:scale-110 transition-transform">
                      <ExternalLink className="w-6 h-6" />
                   </a>
                   <a href={project.github} className="p-4 bg-text-base text-surface rounded-full hover:scale-110 transition-transform">
                      <Github className="w-6 h-6" />
                   </a>
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                  <ArrowUpRight className="w-6 h-6 text-text-muted group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-text-muted mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-border text-xs font-medium text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* See More Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02, 
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="glass rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center border-dashed border-2 border-border hover:border-primary/50 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Github className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold mb-4">More on GitHub</h4>
            <p className="text-text-muted mb-8 max-w-xs">
              Check out my other repositories and open-source contributions.
            </p>
            <a href="https://github.com/NaimurRahman227" className="text-primary font-bold flex items-center gap-2 group-hover:underline">
              Visit my profile <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

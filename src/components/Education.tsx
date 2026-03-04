import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: "BSc (Engg.) in Electronics and Communication Engineering",
    institution: "Hajee Mohammad Danesh Science & Technology University",
    period: "2020 - 2024",
    location: "Bangladesh, Dinajpur",
    description: "Specialized in Embeded Systems, Artificial Intelligence and Networking.",
    achievements: ["Winner Software Exhibition 2023", "Research Assistant in AI Lab"]
  },
  {
    degree: "Database (MySQL/Oracle/SQL Server)",
    institution: "Bangladesh Computer Council , ICT Division",
    period: "2023- 2024",
    location: "HSTU, Bangladesh",
    description: "Focused on MySQL , Oracle.",
    achievements: ["First Class Honors" , "Built Real Life Project"]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-surface-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">My Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Education.</h3>
          <p className="text-text-muted text-lg">
            A solid academic foundation that fuels my technical expertise and problem-solving approach.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group"
            >
              {/* Decorative Background Icon */}
              <GraduationCap className="absolute -right-8 -bottom-8 w-48 h-48 text-text-base/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 text-primary font-bold mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{item.degree}</h4>
                  <div className="flex items-center gap-2 text-text-muted text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <div className="lg:col-span-8">
                  <p className="text-xl text-text-base/80 mb-8 leading-relaxed">
                    {item.institution}
                  </p>
                  <p className="text-text-muted mb-8">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 text-sm text-primary">
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

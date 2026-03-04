import { Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight"> Naimur's DevCraft</span>
          </div>

          <p className="text-text-muted text-sm">
            © {currentYear} DevCraft. All rights reserved. Built with precision.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com/NaimurRahman227" className="text-text-muted hover:text-text-base transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/naimur7rahman/" className="text-text-muted hover:text-text-base transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-muted hover:text-text-base transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:nmrahman1652@gmail.com" className="text-text-muted hover:text-text-base transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

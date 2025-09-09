import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-md text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       
        <div className="text-gray-300 text-sm">
          © 2025 / Vishal Kumar Subramanian
        </div>
        
       
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/vishalkmr1395" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/vishalkmr1395" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:bounce transition-all duration-300" />
          </a>
          
          <a 
            href="mailto:vish.k1395@gmail.com"
            className="text-gray-300 hover:text-red-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
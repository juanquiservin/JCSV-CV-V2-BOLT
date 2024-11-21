import { motion } from 'framer-motion';
import { User, Mail, Github, Linkedin } from 'lucide-react';

export default function ProfilePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="backdrop-blur-md bg-black/30 rounded-lg p-6 border border-green-500/20"
    >
      <div className="relative mb-6">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-2 border-green-500"
        />
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <span className="px-4 py-1 bg-green-500 text-black text-sm rounded-full">
            Available for hire
          </span>
        </div>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Juan Carlos Servin</h1>
        <p className="text-green-300">Full Stack Developer</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5" />
          <span>Based in Mexico</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5" />
          <a href="mailto:servinvargasjc@gmail.com" className="hover:text-green-300 transition-colors">
            servinvargasjc@gmail.com
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Github className="w-5 h-5" />
          <a href="https://github.com/juancarlosservin" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
            github.com/juancarlosservin
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Linkedin className="w-5 h-5" />
          <a href="https://www.linkedin.com/in/juancarlosservin-growth" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
            linkedin.com/in/juancarlosservin-growth
          </a>
        </div>
      </div>
    </motion.div>
  );
}
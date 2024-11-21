import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-md bg-black/30 border-b border-green-500/20"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center space-x-8">
          {[
            { icon: Home, label: 'Home' },
            { icon: User, label: 'About' },
            { icon: Briefcase, label: 'Projects' },
            { icon: Mail, label: 'Contact' }
          ].map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-green-500/10 rounded-lg transition-colors group flex flex-col items-center"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
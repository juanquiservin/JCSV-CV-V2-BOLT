import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { motion } from 'framer-motion';
import { Terminal, Code2, User, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import Scene from './components/Scene';
import ProfilePanel from './components/ProfilePanel';
import Navigation from './components/Navigation';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen w-full bg-black text-green-400 overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Scene />
          <OrbitControls enableZoom={false} />
          <EffectComposer>
            <Bloom luminanceThreshold={0.5} intensity={2} />
            <ChromaticAberration offset={[0.002, 0.002]} />
          </EffectComposer>
        </Canvas>
      </div>

      <Navigation />

      <div className="relative z-20 h-full overflow-y-auto pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProfilePanel />
            
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-black/30 rounded-lg p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Code2 className="mr-2" />
                  Technical Skills
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-green-300">Frontend</h3>
                    <ul className="space-y-2">
                      {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                        <li key={skill} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-green-300">Backend</h3>
                    <ul className="space-y-2">
                      {['Node.js', 'Express', 'MongoDB', 'PostgreSQL'].map((skill) => (
                        <li key={skill} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md bg-black/30 rounded-lg p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Terminal className="mr-2" />
                  Featured Projects
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'E-commerce Platform',
                      description: 'Full-stack e-commerce solution with real-time inventory management and secure payment processing.'
                    },
                    {
                      title: 'Task Management System',
                      description: 'Collaborative task management platform with real-time updates and team collaboration features.'
                    },
                    {
                      title: 'Analytics Dashboard',
                      description: 'Interactive analytics dashboard with data visualization and real-time metrics tracking.'
                    }
                  ].map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="border border-green-500/20 rounded-lg p-4 hover:border-green-500/40 transition-all duration-300 backdrop-blur-md"
                    >
                      <h3 className="text-xl font-semibold text-green-300">{project.title}</h3>
                      <p className="text-sm mt-2 text-green-100/80">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
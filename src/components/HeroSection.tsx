
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const HeroSection = () => {
  const name = "John Doe";
  const title = "Full-Stack Developer";
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-breathe"></div>
        <div className="absolute bottom-0 left-[15%] w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center relative">
          {/* Name Section integrated here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mb-8"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-25"></div>
            <div className="relative px-8 py-6 bg-white rounded-lg shadow-xl">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                {name}
              </h2>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={cn(
              "inline-block px-4 py-1.5 bg-blue-50 rounded-full text-blue-600",
              "text-sm md:text-base font-medium tracking-wider mb-6 shadow-sm"
            )}
          >
            {title}
          </motion.p>
          
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-xs font-medium tracking-wider mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            FULL-STACK DEVELOPER
          </div>
          
          <h1 className="section-title max-w-4xl mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Creating <span className="text-blue-500">digital experiences</span> that make a difference
          </h1>
          
          <p className="section-subtitle opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            I build elegant, high-performance applications and websites with clean code and intuitive user experiences. Let's turn your ideas into reality.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#projects" 
              className={cn(
                "bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium",
                "transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              )}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className={cn(
                "bg-transparent text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-medium",
                "transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md hover:border-blue-300"
              )}
            >
              Contact Me
            </a>
            <a 
              href="#contact"
              className="px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get in Touch
            </a>
            <a 
              href="#projects"
              className="px-5 py-3 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
            >
              View Projects
            </a>
          </motion.div>
          
          <a 
            href="#about" 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors duration-300 mt-20 opacity-0 animate-fade-in"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

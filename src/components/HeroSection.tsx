
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const HeroSection = () => {
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
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-xs font-medium tracking-wider mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            FULL-STACK DEVELOPER
          </div>
          
          <h1 className="section-title max-w-4xl mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Creating <span className="text-blue-500">digital experiences</span> that make a difference
          </h1>
          
          <p className="section-subtitle opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            I build elegant, high-performance applications and websites with clean code and intuitive user experiences. Let's turn your ideas into reality.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
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
          </div>
          
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

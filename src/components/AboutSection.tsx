
import { Code, Globe, Layout, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive, intuitive websites that provide exceptional user experiences across all devices.',
    icon: Globe,
  },
  {
    title: 'App Development',
    description: 'Building high-performance, feature-rich applications with modern frameworks and technologies.',
    icon: Layout,
  },
  {
    title: 'Custom Solutions',
    description: 'Developing tailored software solutions to address specific business needs and challenges.',
    icon: Code,
  },
  {
    title: 'UX Optimization',
    description: 'Enhancing user experiences through thoughtful design, smooth interactions, and performance tuning.',
    icon: Sparkles,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-5/12 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="glass-panel relative rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Developer working on code" 
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-7/12">
            <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-xs font-medium tracking-wider mb-5">
              ABOUT ME
            </div>
            
            <h2 className="section-title mb-6">
              Passionate about crafting <span className="text-blue-500">digital solutions</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              I'm a full-stack developer with a passion for creating elegant, efficient, and user-centric digital experiences. With a strong foundation in both front-end and back-end technologies, I bridge the gap between design and functionality.
            </p>
            
            <p className="text-muted-foreground mb-8">
              My approach combines technical expertise with creative problem-solving to build applications that not only work flawlessly but also engage and delight users. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-panel p-6 rounded-xl transition-all duration-500",
                    "hover:shadow-md hover:bg-white/90 hover:transform hover:translate-y-[-5px]"
                  )}
                >
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-blue-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

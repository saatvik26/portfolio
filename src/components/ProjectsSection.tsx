
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product management, cart functionality, and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    githubLink: '#',
    category: 'fullstack'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application that helps teams organize projects, assign tasks, and track progress efficiently.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
    category: 'frontend'
  },
  {
    title: 'Finance Dashboard',
    description: 'An analytics platform with data visualization tools that help businesses monitor financial performance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['TypeScript', 'D3.js', 'Express', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#',
    category: 'fullstack'
  },
  {
    title: 'Social Media API',
    description: 'A robust backend service that powers a social networking platform with advanced features and security.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    tags: ['Node.js', 'GraphQL', 'MongoDB', 'JWT'],
    liveLink: '#',
    githubLink: '#',
    category: 'backend'
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full Stack' },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-xs font-medium tracking-wider mb-5">
            MY WORK
          </div>
          
          <h2 className="section-title mb-6">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          
          <p className="section-subtitle">
            A selection of my recent work, showcasing my skills and expertise in different areas of development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500",
                "hover:shadow-lg hover:transform hover:translate-y-[-5px]"
              )}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                  
                  <a 
                    href={project.liveLink}
                    className="text-blue-500 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all duration-300"
                  >
                    View Project
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:shadow"
          >
            View All Projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

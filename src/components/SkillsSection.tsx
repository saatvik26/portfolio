
import { cn } from '@/lib/utils';

const skills = {
  frontend: [
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Vue.js', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'GraphQL', level: 80 },
    { name: 'REST API', level: 90 },
  ],
  database: [
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'Firebase', level: 80 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'CI/CD', level: 80 },
    { name: 'AWS', level: 70 },
    { name: 'Webpack', level: 75 },
  ]
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-xs font-medium tracking-wider mb-5">
            MY EXPERTISE
          </div>
          
          <h2 className="section-title mb-6">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and proficiency across different development technologies and tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">01</span>
              Frontend Development
            </h3>
            
            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget;
                        const width = target.getAttribute('data-width');
                        target.style.width = width || '0%';
                      }}
                      // Initialize on page load
                      ref={(el) => {
                        if (el) {
                          setTimeout(() => {
                            const width = el.getAttribute('data-width');
                            el.style.width = width || '0%';
                          }, 100);
                        }
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-6 flex items-center mt-12">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">02</span>
              Backend Development
            </h3>
            
            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget;
                        const width = target.getAttribute('data-width');
                        target.style.width = width || '0%';
                      }}
                      // Initialize on page load
                      ref={(el) => {
                        if (el) {
                          setTimeout(() => {
                            const width = el.getAttribute('data-width');
                            el.style.width = width || '0%';
                          }, 100);
                        }
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">03</span>
              Database & Storage
            </h3>
            
            <div className="space-y-6">
              {skills.database.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget;
                        const width = target.getAttribute('data-width');
                        target.style.width = width || '0%';
                      }}
                      // Initialize on page load
                      ref={(el) => {
                        if (el) {
                          setTimeout(() => {
                            const width = el.getAttribute('data-width');
                            el.style.width = width || '0%';
                          }, 100);
                        }
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-6 flex items-center mt-12">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">04</span>
              Tools & Deployment
            </h3>
            
            <div className="space-y-6">
              {skills.tools.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget;
                        const width = target.getAttribute('data-width');
                        target.style.width = width || '0%';
                      }}
                      // Initialize on page load
                      ref={(el) => {
                        if (el) {
                          setTimeout(() => {
                            const width = el.getAttribute('data-width');
                            el.style.width = width || '0%';
                          }, 100);
                        }
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

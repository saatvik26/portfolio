
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Sample experience data - replace with your actual experience
const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "Jan 2021 - Present",
    description: "Leading the frontend development team in creating responsive web applications using React, TypeScript, and modern CSS frameworks. Implemented CI/CD pipelines and improved performance by 40%.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "CI/CD"],
    color: "blue"
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    location: "Remote",
    period: "Mar 2019 - Dec 2020",
    description: "Developed and maintained multiple web applications for clients across various industries. Created RESTful APIs and integrated third-party services while ensuring responsive designs.",
    skills: ["JavaScript", "Node.js", "MongoDB", "Express", "React"],
    color: "purple"
  },
  {
    title: "Junior Web Developer",
    company: "Creative Web Agency",
    location: "Boston, MA",
    period: "Jun 2017 - Feb 2019",
    description: "Built responsive websites for small to medium businesses. Collaborated with designers to implement pixel-perfect UIs and ensure cross-browser compatibility.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    color: "green"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-xs font-medium tracking-wider mb-5">
            WORK EXPERIENCE
          </div>
          <h2 className="section-title mb-6">
            My Professional <span className="text-blue-500">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A timeline of my professional experience and the skills I've developed along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {/* Experience cards */}
          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col md:flex-row gap-8 md:gap-0 items-center",
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-md"></div>
                
                {/* Date marker (only visible on larger screens) */}
                <div className="hidden md:flex items-center justify-center w-full md:w-[calc(50%-3rem)] text-right md:pr-8">
                  <div 
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
                      index % 2 !== 0 ? "md:justify-start md:text-left md:pl-8" : "md:justify-end"
                    )}
                  >
                    <Calendar size={16} className="text-blue-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                {/* Card (takes full width on mobile, half width on desktop) */}
                <div className="w-full md:w-[calc(50%-3rem)]">
                  <Card className="glass-panel hover:shadow-lg transition-all duration-300 overflow-hidden border-t-4 border-blue-500">
                    {/* Mobile-only date display */}
                    <div className="md:hidden flex items-center gap-2 px-6 pt-6 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <Briefcase size={16} className="text-blue-500" />
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 py-3 px-6 rounded-lg transition-all duration-300"
          >
            <ExternalLink size={18} />
            View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

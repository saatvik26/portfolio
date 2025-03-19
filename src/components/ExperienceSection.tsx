
import { Briefcase, Calendar, ExternalLink, Award, Rocket, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    achievements: ["Reduced load time by 40%", "Led team of 5 developers", "Implemented design system"],
    icon: <Rocket className="text-purple-500" />,
    color: "purple",
    gradient: "from-purple-500/10 to-purple-500/5"
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    location: "Remote",
    period: "Mar 2019 - Dec 2020",
    description: "Developed and maintained multiple web applications for clients across various industries. Created RESTful APIs and integrated third-party services while ensuring responsive designs.",
    skills: ["JavaScript", "Node.js", "MongoDB", "Express", "React"],
    achievements: ["Built 12+ client applications", "Implemented payment systems", "Optimized database queries"],
    icon: <TrendingUp className="text-blue-500" />,
    color: "blue",
    gradient: "from-blue-500/10 to-blue-500/5"
  },
  {
    title: "Junior Web Developer",
    company: "Creative Web Agency",
    location: "Boston, MA",
    period: "Jun 2017 - Feb 2019",
    description: "Built responsive websites for small to medium businesses. Collaborated with designers to implement pixel-perfect UIs and ensure cross-browser compatibility.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    achievements: ["Delivered 20+ client websites", "Received client satisfaction award", "Optimized WordPress themes"],
    icon: <Star className="text-green-500" />,
    color: "green",
    gradient: "from-green-500/10 to-green-500/5"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/90 -z-10"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-12 left-4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
        <div className="absolute bottom-12 right-12 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float delay-300"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-5 bg-blue-100 hover:bg-blue-200 text-blue-800 py-1.5 px-4 text-xs font-medium uppercase tracking-wider">
            Career Journey
          </Badge>
          <h2 className="section-title mb-6 relative inline-block">
            My Professional <span className="text-blue-600 relative">
              Experience
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C45.6667 4 158.4 -4.8 356 5.2" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl text-gray-600">
            A curated showcase of my professional journey, highlighting key roles and achievements that have shaped my expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100 rounded-full"></div>
          
          {/* Experience cards */}
          <div className="space-y-16 relative">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col md:flex-row gap-8 md:gap-0 items-center",
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline elements */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-200 shadow-md z-10">
                  {exp.icon}
                </div>
                
                {/* Date marker (only visible on larger screens) */}
                <div className="hidden md:flex items-center justify-center w-full md:w-[calc(50%-3rem)] text-right md:pr-8">
                  <div 
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white shadow-sm border border-blue-100",
                      index % 2 !== 0 ? "md:justify-start md:text-left md:pl-8" : "md:justify-end"
                    )}
                  >
                    <Calendar size={16} className="text-blue-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                {/* Card (takes full width on mobile, half width on desktop) */}
                <div className="w-full md:w-[calc(50%-3rem)]">
                  <Card className={cn(
                    "group hover-scale overflow-hidden border-0 shadow-lg bg-gradient-to-br",
                    exp.gradient
                  )}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/20 rounded-bl-3xl"></div>
                    
                    {/* Mobile-only date display */}
                    <div className="md:hidden flex items-center gap-2 px-6 pt-6 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    
                    <CardHeader className="pb-2 relative z-10">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1 font-medium">
                            <Briefcase size={16} className="text-blue-500" />
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      {/* Key achievements */}
                      <div className="mb-4 space-y-2">
                        <h4 className="text-sm font-semibold text-blue-600 mb-2 flex items-center gap-2">
                          <Award size={16} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, i) => (
                          <Badge 
                            key={i} 
                            variant="outline"
                            className="bg-white/80 hover:bg-white text-blue-600 border-blue-100"
                          >
                            {skill}
                          </Badge>
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
          <Button 
            variant="outline" 
            className="group bg-white hover:bg-blue-50 text-blue-600 border-blue-200 shadow-sm"
            asChild
          >
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <ExternalLink size={18} className="group-hover:translate-x-0.5 transition-transform" />
              View Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

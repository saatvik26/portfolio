
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const NameSection = () => {
  const name = "John Doe";
  const title = "Full-Stack Developer";
  
  return (
    <section 
      className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
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
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-4 mt-4"
          >
            <a 
              href="#contact"
              className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get in Touch
            </a>
            <a 
              href="#projects"
              className="px-5 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NameSection;

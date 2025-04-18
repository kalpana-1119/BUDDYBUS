
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bus, ArrowRight, Code, Users, BookOpen, ChevronDown } from 'lucide-react';
import NavbarWrapper from '@/components/NavbarWrapper';

// Team members data
const teamMembers = [
  { name: "Alex Johnson", role: "Lead Developer", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Sam Lee", role: "UX/UI Designer", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Jamie Wilson", role: "Backend Engineer", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Taylor Chen", role: "Mobile Developer", avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "Jordan Smith", role: "QA Engineer", avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "Casey Brown", role: "DevOps Engineer", avatar: "https://i.pravatar.cc/150?img=6" },
  { name: "Riley Davis", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=7" },
];

// CSE scope items
const cseScope = [
  {
    title: "Web Development",
    description: "Building modern web applications using React, TypeScript, and tailwind.",
    icon: <Code className="h-8 w-8 text-buddybus-blue" />
  },
  {
    title: "Mobile App Development",
    description: "Creating responsive mobile applications for Android and iOS.",
    icon: <Bus className="h-8 w-8 text-buddybus-orange" />
  },
  {
    title: "IoT Integration",
    description: "Connecting hardware sensors with software for real-time tracking.",
    icon: <BookOpen className="h-8 w-8 text-green-600" />
  },
  {
    title: "User Experience Design",
    description: "Designing intuitive interfaces for optimal user experience.",
    icon: <Users className="h-8 w-8 text-purple-600" />
  }
];

const LandingPage = () => {
  const navigate = useNavigate();
  const scopeRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background */}
      <div className="h-screen relative flex flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/bus-background.jpg")' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 flex items-center justify-between p-4 md:p-6">
          <div className="flex items-center">
            <Bus size={32} className="text-white mr-2" />
            <span className="text-2xl font-bold text-white">BuddyBus</span>
          </div>
          <div className="hidden md:flex space-x-6 text-white">
            <button onClick={() => navigate('/about')} className="hover:text-buddybus-blue transition-colors">About</button>
            <button onClick={() => navigate('/contact')} className="hover:text-buddybus-blue transition-colors">Contact</button>
          </div>
        </div>
        
        <div className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to BuddyBus
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your real-time bus tracking solution for campus transportation
          </motion.p>
          
          <motion.button
            className="bg-buddybus-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => navigate('/passenger')}
          >
            <span className="text-xl">Get Started</span>
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-10 flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollToSection(scopeRef)}
        >
          <span className="text-sm mb-2">Scroll to learn more</span>
          <ChevronDown className="animate-bounce" />
        </motion.div>
      </div>
      
      {/* College and CSE Scope Section */}
      <div ref={scopeRef} className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - CSE Scope */}
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-buddybus-dark mb-6">Scope of Computer Science & Engineering</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cseScope.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start">
                        <div className="bg-white p-2 rounded-lg shadow mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 bg-buddybus-lightblue p-6 rounded-lg border border-buddybus-blue/20">
                  <h3 className="font-semibold text-lg mb-2">XYZ College of Engineering</h3>
                  <p className="text-gray-700">
                    Our CSE department is committed to providing cutting-edge education and practical projects that prepare students for real-world challenges in the technology industry.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href="#" className="text-xs bg-white text-buddybus-blue px-3 py-1 rounded-full border border-buddybus-blue/30 hover:bg-buddybus-blue hover:text-white transition-colors">Department Website</a>
                    <a href="#" className="text-xs bg-white text-buddybus-blue px-3 py-1 rounded-full border border-buddybus-blue/30 hover:bg-buddybus-blue hover:text-white transition-colors">Research Labs</a>
                    <a href="#" className="text-xs bg-white text-buddybus-blue px-3 py-1 rounded-full border border-buddybus-blue/30 hover:bg-buddybus-blue hover:text-white transition-colors">Faculty</a>
                    <a href="#" className="text-xs bg-white text-buddybus-blue px-3 py-1 rounded-full border border-buddybus-blue/30 hover:bg-buddybus-blue hover:text-white transition-colors">Projects</a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - College Info */}
            <div className="w-full md:w-1/3">
              <motion.div
                className="bg-buddybus-blue p-8 rounded-lg text-white shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4">XYZ College</h2>
                  <div className="w-12 h-1 bg-white mb-6"></div>
                  <p className="mb-4 opacity-90">Excellence in technical education since 1995. Building tomorrow's tech leaders today.</p>
                  <ul className="space-y-3 opacity-80 text-sm">
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                      NAAC 'A+' Accredited
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                      Top 50 Engineering Colleges
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                      100% Placement Assistance
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                      State-of-the-art Infrastructure
                    </li>
                  </ul>
                  <button onClick={() => window.open('#', '_blank')} className="mt-6 bg-white text-buddybus-blue px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
                    Visit College Website
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                className="mt-6 p-6 bg-gray-50 rounded-lg shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg mb-3">Why BuddyBus?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-buddybus-blue/10 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-buddybus-blue rounded-full"></div>
                    </div>
                    <span>Real-time tracking for campus buses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-buddybus-blue/10 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-buddybus-blue rounded-full"></div>
                    </div>
                    <span>Mobile-friendly interface for on-the-go access</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-buddybus-blue/10 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-buddybus-blue rounded-full"></div>
                    </div>
                    <span>Developed by CSE students as capstone project</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div ref={teamRef} className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-buddybus-dark mb-3">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The talented CSE students behind the BuddyBus application, combining their skills in 
              software development, UX design, and IoT integration.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 px-4 bg-buddybus-blue">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Track Your Campus Bus?
          </motion.h2>
          <motion.p
            className="text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get started with BuddyBus today and never miss your campus bus again!
          </motion.p>
          <motion.button
            className="bg-white text-buddybus-blue font-bold py-3 px-8 rounded-full flex items-center justify-center mx-auto shadow-lg hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            onClick={() => navigate('/passenger')}
          >
            <span className="mr-2">Get Started</span>
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-buddybus-dark text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Bus size={24} className="mr-2" />
                <span className="text-xl font-bold">BuddyBus</span>
              </div>
              <p className="text-white/70 max-w-xs mx-auto md:mx-0">
                A real-time bus tracking application developed by XYZ College of Engineering students.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-center md:text-left">
              <div>
                <h3 className="font-semibold mb-3">Navigate</h3>
                <ul className="space-y-2 text-white/70">
                  <li><button onClick={() => navigate('/')} className="hover:text-white">Home</button></li>
                  <li><button onClick={() => navigate('/passenger')} className="hover:text-white">Track Bus</button></li>
                  <li><button onClick={() => navigate('/about')} className="hover:text-white">About Us</button></li>
                  <li><button onClick={() => navigate('/contact')} className="hover:text-white">Contact</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">College</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="#" className="hover:text-white">CSE Department</a></li>
                  <li><a href="#" className="hover:text-white">Campus Map</a></li>
                  <li><a href="#" className="hover:text-white">Transport Office</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/20 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} BuddyBus - XYZ College of Engineering. All rights reserved.</p>
            <p className="mt-1">Department of Computer Science and Engineering</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

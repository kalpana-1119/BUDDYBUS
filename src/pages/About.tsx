
import React from 'react';
import NavbarWrapper from '@/components/NavbarWrapper';
import { motion } from 'framer-motion';
import { User, Code, Cpu, Smartphone } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 bg-opacity-95 bg-[url('/bus-background.jpg')] bg-cover bg-center bg-fixed">
      <NavbarWrapper />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-buddybus-dark mb-6">About BuddyBus</h1>
          
          <div className="space-y-8 text-gray-700">
            <div className="border-l-4 border-buddybus-blue pl-4 py-2">
              <p className="italic text-lg">
                BuddyBus is an innovative bus tracking system developed by the Computer Science and Engineering 
                department. Our mission is to provide real-time bus tracking capabilities to enhance the 
                transportation experience for our college community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-buddybus-lightblue p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Smartphone size={24} className="text-buddybus-blue" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-buddybus-dark mb-2">Our Features</h2>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>Real-time bus tracking with live location updates</li>
                      <li>Comprehensive route information and schedules</li>
                      <li>Driver and passenger interfaces</li>
                      <li>Fleet management for administrators</li>
                      <li>Mobile-responsive design</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-buddybus-lightorange p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Cpu size={24} className="text-buddybus-orange" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-buddybus-dark mb-2">CSE Department Scope</h2>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>Full-stack web development</li>
                      <li>Real-time data processing</li>
                      <li>Location-based services</li>
                      <li>User interface design</li>
                      <li>System architecture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-buddybus-dark mb-4 flex items-center">
                <Code size={20} className="mr-2" /> Technology Stack
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {['React', 'TypeScript', 'TailwindCSS', 'GPS Tracking', 'Framer Motion', 'IoT Integration', 'Real-time API', 'Mobile-first Design'].map((tech, index) => (
                  <div key={index} className="bg-gray-100 px-4 py-2 rounded-lg text-center text-sm font-medium">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-buddybus-dark mb-4 flex items-center">
                <User size={20} className="mr-2" /> Our Team
              </h2>
              <p className="mb-4">
                The BuddyBus project is developed by a dedicated team of students and faculty from the Computer Science 
                and Engineering department. Our collective goal is to apply cutting-edge technology to solve real-world problems 
                on our campus.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 p-4 rounded-lg flex-grow basis-64">
                  <h3 className="font-medium">Faculty Advisor</h3>
                  <p className="text-sm text-gray-600 mt-1">Prof. Your College Name</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex-grow basis-64">
                  <h3 className="font-medium">Development Team</h3>
                  <p className="text-sm text-gray-600 mt-1">CSE Students (Batch 2024-2025)</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex-grow basis-64">
                  <h3 className="font-medium">Support</h3>
                  <p className="text-sm text-gray-600 mt-1">Transport Department</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <footer className="bg-buddybus-blue text-white py-4 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-sm">
            © {new Date().getFullYear()} BuddyBus - A Project by the Computer Science and Engineering Department | Your College Name
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;

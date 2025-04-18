
import React, { useState } from 'react';
import NavbarWrapper from '@/components/NavbarWrapper';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send, CheckCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 bg-opacity-95 bg-[url('/bus-background.jpg')] bg-cover bg-center bg-fixed">
      <NavbarWrapper />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6 md:p-8 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-buddybus-dark mb-6">Contact Us</h1>
          
          <div className="space-y-8 text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <motion.div 
                className="bg-buddybus-lightblue p-5 rounded-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="bg-white p-3 rounded-full mb-4 shadow-sm">
                  <Phone className="text-buddybus-blue h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="mt-2">+91 8886543210</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri, 8am-6pm</p>
              </motion.div>
              
              <motion.div 
                className="bg-buddybus-lightorange p-5 rounded-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="bg-white p-3 rounded-full mb-4 shadow-sm">
                  <Mail className="text-buddybus-orange h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a 
                  href="mailto:buddybus@xyzcollege.edu" 
                  className="mt-2 text-buddybus-blue hover:underline"
                >
                  buddybus@xyzcollege.edu
                </a>
                <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-100 p-5 rounded-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="bg-white p-3 rounded-full mb-4 shadow-sm">
                  <MapPin className="text-gray-700 h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="mt-2">CSE Department</p>
                <p className="text-sm text-gray-500 mt-1">XYZ Engineering College Campus</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-8 items-stretch"
            >
              <div className="bg-white rounded-lg shadow p-6 md:w-1/3">
                <h3 className="text-xl font-semibold text-buddybus-dark mb-4">Connect With Us</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://linkedin.com/company/xyzcollege" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-[#0077B5]/10 rounded-lg hover:bg-[#0077B5]/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-[#0077B5] mr-3" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-xs text-gray-500">Follow for updates</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/xyz-college/buddybus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Github className="h-5 w-5 text-gray-800 mr-3" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-xs text-gray-500">View our code</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://xyzcollege.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-buddybus-blue/10 rounded-lg hover:bg-buddybus-blue/20 transition-colors"
                  >
                    <Globe className="h-5 w-5 text-buddybus-blue mr-3" />
                    <div>
                      <p className="font-medium">Website</p>
                      <p className="text-xs text-gray-500">XYZ College</p>
                    </div>
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-3">Project Faculty Advisor:</h4>
                  <p className="text-sm">Dr. Jane Smith</p>
                  <p className="text-xs text-gray-500 mt-1">Associate Professor, CSE Department</p>
                  <a 
                    href="mailto:jane.smith@xyzcollege.edu" 
                    className="text-xs text-buddybus-blue hover:underline mt-1 inline-block"
                  >
                    jane.smith@xyzcollege.edu
                  </a>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-buddybus-dark mb-4">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-buddybus-blue focus:border-buddybus-blue shadow-sm"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-buddybus-blue focus:border-buddybus-blue shadow-sm"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-buddybus-blue focus:border-buddybus-blue shadow-sm"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-buddybus-blue focus:border-buddybus-blue shadow-sm"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-buddybus-blue text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center ${isSubmitting ? 'opacity-80 cursor-wait' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse mr-2">Sending</span>
                          <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <footer className="bg-buddybus-blue text-white py-4 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-sm">
            © {new Date().getFullYear()} BuddyBus - A Project by the CSE Department | XYZ College of Engineering
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

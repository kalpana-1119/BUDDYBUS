
import React from 'react';
import NavbarWrapper from '@/components/NavbarWrapper';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
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
          <h1 className="text-3xl font-bold text-buddybus-dark mb-6">Contact Us</h1>
          
          <div className="space-y-8 text-gray-700">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-buddybus-lightblue p-6 rounded-lg flex flex-col items-center text-center flex-1">
                <div className="bg-white p-3 rounded-full mb-4">
                  <Phone className="text-buddybus-blue h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="mt-2">+91 8886543210</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri, 8am-6pm</p>
              </div>
              
              <div className="bg-buddybus-lightorange p-6 rounded-lg flex flex-col items-center text-center flex-1">
                <div className="bg-white p-3 rounded-full mb-4">
                  <Mail className="text-buddybus-orange h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="mt-2">buddybus@college.edu</p>
                <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center flex-1">
                <div className="bg-white p-3 rounded-full mb-4">
                  <MapPin className="text-gray-700 h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="mt-2">CSE Department</p>
                <p className="text-sm text-gray-500 mt-1">Engineering College Campus</p>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-buddybus-dark mb-4">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-buddybus-blue focus:border-buddybus-blue"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-buddybus-blue focus:border-buddybus-blue"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-buddybus-blue focus:border-buddybus-blue"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-buddybus-blue focus:border-buddybus-blue"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-buddybus-blue text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      
      <footer className="bg-buddybus-blue text-white py-4 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-sm">
            © {new Date().getFullYear()} BuddyBus - A Project by the Computer Science and Engineering Department
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

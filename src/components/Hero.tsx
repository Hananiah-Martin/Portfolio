// import React from 'react';
import {Github,Linkedin, Mail, ChevronDown } from 'lucide-react';
import { LeetCodeIcon } from './icons/LeetCodeIcon';
import myimg from "../assets/myimg.jpeg"
import { useTypewriter } from "../hooks/useTypeWriter"
const Hero = () => {
  const typedText = useTypewriter({
    words: ['Software Engineer', 'Web Developer','Problem Solver'],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseTime: 2000,
  });
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <img
            src={myimg}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Hananiah Martin
        </h1>
        
        <div className="h-16"> {/* Fixed height container to prevent layout shift */}
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            <span className="inline-block">{typedText}</span>
            <span className="inline-block w-0.5 h-6 ml-1 bg-blue-500 animate-pulse" />
          </h2>
        </div>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Bridging the gap between hardware and software with innovative solutions
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://leetcode.com/u/Hananiah_Athota/"
             className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
            <LeetCodeIcon className="w-6 h-6" />
          </a>
          <a href="https://github.com/Hananiah-Martin?tab=repositories" target="_blank" rel="noopener noreferrer"
             className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/athota-hananiah-martin-12267a248/" target="_blank" rel="noopener noreferrer"
             className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:hananiahhoney5@gmail.com"
             className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <a href="#about"
           className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors">
          <ChevronDown className="w-6 h-6 text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
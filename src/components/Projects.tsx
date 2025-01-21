import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import seceimg from "./project_images/sece.png"
import githubimg from "./project_images/github.png"
import resortsimg from "./project_images/resortsimage.png"
const projects = [
  {
    title: 'SECE Website',
    description: 'React based frontend website developed for Society of Electronics and Communication Engineerig which is the  offical club for ECE.',
    image:seceimg,
    tags: ['React', 'Tailwind', 'Design','Frontend'],
    demoUrl: 'https://sece-nitjsr.in/',
    githubUrl: 'https://github.com/Hananiah-Martin/sece-website',
  },
  {
    title: 'GitHub Clone',
    description: 'A MERN stack project replicating GitHub features like repository management,file management,user authentication, and a responsive UI for seamless collaboration.',
    image: githubimg,
    tags: ['React', 'Express.js', 'Node.js', 'MongoDb','AWS'],
    demoUrl: 'https://main.d2m7e3ji6k6fn4.amplifyapp.com/signup/',
    githubUrl: 'https://github.com/Hananiah-Martin/Github_Clone',
  },
  {
    title: 'Resorts App',
    description: 'Developed a MERN stack project with integrated CRUD functionality for user listings, a five-star rating system for feedback, and media asset management via Cloudinary. Implemented secure authentication and authorization using Passport.js.',
    image: resortsimg,
    tags: ['Javascript','EJS','Express.js', 'Node.js', 'MongoDb'],
    demoUrl: 'https://major-project-2usy.onrender.com/listing',
    githubUrl: 'https://github.com/Hananiah-Martin/RESORT-APP',
  },
  {
    title: 'Real Estate App',
    description: 'React based frontend responsive application which reflects skills in my frontend frameworks.',
    image: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Tailwind CSS'],
    demoUrl: 'https://real-estate-7wt.pages.dev/',
    githubUrl: 'https://github.com/Hananiah-Martin/REAL_ESTATE',
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center space-x-4 transition-opacity duration-300">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 hover:bg-gray-800 rounded-full transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { ExternalLink } from "lucide-react";
import { RESUME_PATH } from '../utils/constants';
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              As an Electronics and Communication Engineering student with a
              passion for software development, I bring a unique perspective to
              the tech industry. My background in hardware combined with
              expertise in modern web technologies allows me to create
              comprehensive solutions that bridge the physical and digital
              worlds.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              With experience in both frontend and backend development, I
              specialize in building responsive, user-friendly applications that
              solve real-world problems. I'm constantly learning and adapting to
              new technologies while maintaining a strong foundation in
              engineering principles.
            </p>

            <div className="pt-6">
            <a
                href={RESUME_PATH}
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                B.Tech. in Electronics & Communication Engineering
              </p>
              <p className="text-gray-600 dark:text-gray-300">NIT Jamshedpur</p>
              <p className="text-sm text-gray-500">2022 - 2026</p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">Web Developer</p>
              <p className="text-sm text-gray-500">2023 - Present</p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Vijaywada, Andhra Pradesh
              </p>
              <p className="text-sm text-gray-500">India</p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Interests</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Problem Solving,Web Developmen,AI.
              </p>
              <p className="text-sm text-gray-500">Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

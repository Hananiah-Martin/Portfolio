import React from 'react';
import { Code2, Server, Database, Layout } from 'lucide-react';

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
      <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const SkillCard = ({ icon: Icon, title, skills }: { icon: any; title: string; skills: string[] }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-600 mr-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600 dark:text-gray-300">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
            <SkillBar skill="DSA" percentage={90} />
            <SkillBar skill="JavaScript" percentage={80} />
            <SkillBar skill="React" percentage={85} />
            <SkillBar skill="Node.js" percentage={80} />
            <SkillBar skill="MongoDB" percentage={75} />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Other Skills</h3>
            <SkillBar skill="Problem Solving" percentage={95} />
            <SkillBar skill="UI/UX Design" percentage={80} />
            <SkillBar skill="Project Management" percentage={75} />
            <SkillBar skill="Team Leadership" percentage={80} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={Code2}
            title="Frontend"
            skills={['React', 'TypeScript', 'Tailwind CSS','Bootstrap']}
          />
          <SkillCard
            icon={Server}
            title="Backend"
            skills={['Node.js', 'Express', 'Java']}
          />
          <SkillCard
            icon={Database}
            title="Database"
            skills={['MongoDB', 'SQL',]}
          />
          <SkillCard
            icon={Layout}
            title="Tools"
            skills={['Git','AWS', 'Linux']}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
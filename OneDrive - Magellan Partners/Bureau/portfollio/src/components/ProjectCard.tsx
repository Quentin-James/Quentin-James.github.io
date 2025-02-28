import React from 'react';
import { Github,  } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: any;
  onClick: any;
  
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  githubLink,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a
            href={githubLink}
            className="flex items-center text-gray-600 hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} className="mr-1" />
            <span>Code</span>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
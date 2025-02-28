import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-indigo-100 text-indigo-800';
      case 'Advanced':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`px-4 py-2 rounded-full ${getLevelColor(level)} flex items-center space-x-2`}>
      <span className="font-medium">{name}</span>
      <span className="text-sm opacity-75">• {level}</span>
    </div>
  );
};

export default SkillBadge;
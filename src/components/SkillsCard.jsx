// components/SkillCard.js
import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg m-2 w-32 h-32 flex items-center justify-center text-center">
      {skill}
    </div>
  );
};

export default SkillCard;

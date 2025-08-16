import React from 'react';
import PropTypes from 'prop-types';

export const ExperiencePoint = ({ exp }) => {
  if (!exp) return null;
  
  return (
    <div className="experience-point">
      <div className="exp-header">
        <div>
          <h3 className="exp-title">{exp.studyTitle || "Bachelor of Science"}</h3>
          <p className="exp-company">{exp.schoolName || "University Name"}</p>
        </div>
        {exp.studyDate && (
          <span className="exp-date">
            {new Date(exp.studyDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short' 
            })}
          </span>
        )}
      </div>
    </div>
  );
};

ExperiencePoint.propTypes = {
  exp: PropTypes.object
};

import React from 'react';
import PropTypes from 'prop-types';

export const PracticalPoint = ({ practicalData }) => {
  if (!practicalData) return null;
  
  const formatDateRange = (startDate, endDate) => {
    if (!startDate && !endDate) return "";
    
    const formatDate = (date) => {
      return date ? new Date(date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      }) : "";
    };
    
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : "Present";
    
    if (start && end) return `${start} - ${end}`;
    if (start) return start;
    return "";
  };
  
  return (
    <div className="practical-point">
      <div className="exp-header">
        <div>
          <h3 className="exp-title">{practicalData.positionTitle || "Software Developer"}</h3>
          <p className="exp-company">{practicalData.companyName || "Company Name"}</p>
        </div>
        <span className="exp-date">
          {formatDateRange(practicalData.startDate, practicalData.endDate)}
        </span>
      </div>
      {practicalData.mainResponsibilities && (
        <p className="exp-description">{practicalData.mainResponsibilities}</p>
      )}
    </div>
  );
};

PracticalPoint.propTypes = {
  practicalData: PropTypes.object
};

import React from 'react';
import { useCv } from './CvContext';
import CvTemplate from './CvTemplate';

const LiveCvPreview = () => {
  const { cvData } = useCv();
  
  // Merge live data with defaults
  const liveData = {
    fullName: cvData.fullName || "John Doe",
    email: cvData.email || "john.doe@example.com",
    phoneNumber: cvData.phoneNumber || "+1-202-555-0104",
    address: cvData.address || "USA, New York, 5th Avenue, 12",
    jobTitle: cvData.jobTitle || "Software Engineer",
    linkedinURL: cvData.linkedinURL || "https://www.linkedin.com/in/john-doe",
    linkedin: cvData.linkedin || "John Doe",
  };

  // Education entries from context
  const expPoints = cvData.educationEntries.map(entry => ({
    id: entry.id,
    cardData: entry
  }));

  // Work entries from context
  const practicalPoints = cvData.workEntries.map(entry => ({
    id: entry.id,
    Data: entry
  }));

  return (
    <CvTemplate 
      data={liveData}
      expPoints={expPoints}
      practicalPoints={practicalPoints}
      toggleLinkedin={false}
    />
  );
};

export default LiveCvPreview;

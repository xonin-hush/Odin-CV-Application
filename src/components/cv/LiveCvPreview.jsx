import React from 'react';
import { useCv } from '../context/CvContext';
import CvTemplate from './CvTemplate';

const LiveCvPreview = () => {
  const { cvData } = useCv();
  
  // Debug: Check what we're getting
  console.log('LiveCvPreview - cvData:', cvData);
  
  // Merge live data with defaults
  const liveData = {
    fullName: cvData.fullName || "John Doe",
    email: cvData.email || "john.doe@example.com",
    phoneNumber: cvData.phoneNumber || "+1-202-555-0104",
    address: cvData.address || "USA, New York, 5th Avenue, 12",
    jobTitle: cvData.jobTitle || "Software Engineer",
    linkedinURL: cvData.linkedinURL || "https://www.linkedin.com/in/john-doe",
    linkedin: cvData.linkedin || "John Doe",
    // Education fields for real-time updates
    education_school: cvData.education_school || "",
    education_degree: cvData.education_degree || "",
    education_startDate: cvData.education_startDate || "",
    education_endDate: cvData.education_endDate || "",
    // Work fields for real-time updates  
    work_jobTitle: cvData.work_jobTitle || "",
    work_company: cvData.work_company || "",
    work_startDate: cvData.work_startDate || "",
    work_endDate: cvData.work_endDate || "",
    work_responsibilities: cvData.work_responsibilities || "",
    // Keep old arrays for backward compatibility (but won't be used)
    educationEntries: cvData.educationEntries || [],
    workEntries: cvData.workEntries || []
  };

  return (
    <CvTemplate 
      data={liveData}
      toggleLinkedin={false}
    />
  );
};

export default LiveCvPreview;

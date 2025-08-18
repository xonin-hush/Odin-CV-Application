import React, { createContext, useContext, useState } from 'react';

const CvContext = createContext();

export const useCv = () => {
  const context = useContext(CvContext);
  if (!context) {
    throw new Error('useCv must be used within CvProvider');
  }
  return context;
};

export const CvProvider = ({ children }) => {
  const [cvData, setCvData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    jobTitle: "Software Engineer",
    // Education fields for real-time updates
    education_school: "",
    education_degree: "", 
    education_startDate: "",
    education_endDate: "",
    // Work fields for real-time updates
    work_jobTitle: "",
    work_company: "",
    work_startDate: "",
    work_endDate: "",
    work_responsibilities: "",
    // Keep old arrays for backward compatibility
    educationEntries: [],
    workEntries: []
  });

  const updateCvData = (newData) => {
    setCvData(prev => ({ ...prev, ...newData }));
  };

  const addEducation = (education) => {
    setCvData(prev => ({
      ...prev,
      educationEntries: [...prev.educationEntries, { ...education, id: Date.now() }]
    }));
  };

  const addWork = (work) => {
    setCvData(prev => ({
      ...prev,
      workEntries: [...prev.workEntries, { ...work, id: Date.now() }]
    }));
  };

  return (
    <CvContext.Provider value={{
      cvData,
      updateCvData,
      addEducation,
      addWork
    }}>
      {children}
    </CvContext.Provider>
  );
};

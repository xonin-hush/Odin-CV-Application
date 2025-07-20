import React, { createContext, useContext, useState } from 'react';

const CvDataContext = createContext();

export const useCvData = () => {
  const context = useContext(CvDataContext);
  if (!context) {
    throw new Error('useCvData must be used within a CvDataProvider');
  }
  return context;
};

export const CvDataProvider = ({ children }) => {
  const [cvData, setCvData] = useState({
    // General Information
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    jobTitle: "",
    linkedinURL: "",
    linkedin: "",
    
    // Educational Experience
    educationEntries: [],
    
    // Practical Experience  
    workEntries: [],
  });

  const updateGeneralInfo = (data) => {
    setCvData(prev => ({ ...prev, ...data }));
  };

  const addEducationEntry = (entry) => {
    setCvData(prev => ({
      ...prev,
      educationEntries: [...prev.educationEntries, { ...entry, id: Date.now() }]
    }));
  };

  const updateEducationEntry = (id, entry) => {
    setCvData(prev => ({
      ...prev,
      educationEntries: prev.educationEntries.map(item => 
        item.id === id ? { ...entry, id } : item
      )
    }));
  };

  const removeEducationEntry = (id) => {
    setCvData(prev => ({
      ...prev,
      educationEntries: prev.educationEntries.filter(item => item.id !== id)
    }));
  };

  const addWorkEntry = (entry) => {
    setCvData(prev => ({
      ...prev,
      workEntries: [...prev.workEntries, { ...entry, id: Date.now() }]
    }));
  };

  const updateWorkEntry = (id, entry) => {
    setCvData(prev => ({
      ...prev,
      workEntries: prev.workEntries.map(item => 
        item.id === id ? { ...entry, id } : item
      )
    }));
  };

  const removeWorkEntry = (id) => {
    setCvData(prev => ({
      ...prev,
      workEntries: prev.workEntries.filter(item => item.id !== id)
    }));
  };

  return (
    <CvDataContext.Provider value={{
      cvData,
      updateGeneralInfo,
      addEducationEntry,
      updateEducationEntry,
      removeEducationEntry,
      addWorkEntry,
      updateWorkEntry,
      removeWorkEntry,
    }}>
      {children}
    </CvDataContext.Provider>
  );
};

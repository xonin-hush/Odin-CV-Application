import React from 'react'
import { useState } from 'react'
const EducationalExperience = () => {
      const [formData, setFormData] = useState({
        schoolName: "",
        studyTitle: "",
        studyDate: "",
      });
        function handleChange(e) {
    const { name, value } = e.target; //this is so smart --> e.target.name, e.target.value
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    
  }
  return (
    <>
      <form>
        <label htmlFor="name">School Name:</label>
        <input 
          value={formData.schoolName} 
          onChange={handleChange} 
          type="text" 
          id="schoolName" 
          name="schoolName" 
        />

        <label htmlFor="email">Title of Study:</label>
        <input 
          value={formData.studyTitle} 
          onChange={handleChange} 
          type="text" 
          id="studyTitle" 
          name="studyTitle" 
        />

        <label htmlFor="phone">Date of Study</label>
        <input 
          value={formData.studyDate} 
          onChange={handleChange} 
          type="date" 
          id="studyDate" 
          name="studyDate" 
        />
      </form>
    </>
  )
}

export default EducationalExperience
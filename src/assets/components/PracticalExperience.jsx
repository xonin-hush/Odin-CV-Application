import React from 'react'
import { useState } from 'react'
const PracticalExperience = () => {
      const [formData, setFormData] = useState({
        companyName: "",
        positionTitle: "",
        jobResponsibility: "",
        startDate: "",
        endDate: "",
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
        <label htmlFor="name">Company's Name:</label>
        <input 
          value={formData.companyName} 
          onChange={handleChange} 
          type="text" 
          id="companyName" 
          name="companyName" 
        />

        <label htmlFor="email">Position Title:</label>
        <input 
          value={formData.positionTitle} 
          onChange={handleChange} 
          type="text" 
          id="positionTitle" 
          name="positionTitle" 
        />

        <label htmlFor="phone">Job Responsibility</label>
        <input 
          value={formData.jobResponsibility} 
          onChange={handleChange} 
          type="date" 
          id="jobResponsibility" 
          name="jobResponsibility" 
        />
        <label htmlFor="phone">Work Duration</label>
        <input 
          value={formData.jobResponsibility} 
          onChange={handleChange} 
          type="date" 
          id="jobResponsibility" 
          name="jobResponsibility" 
        />
      </form>
    </>
  )
}

export default PracticalExperience
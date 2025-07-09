import React from "react";
import { useState } from "react";

export const GeneralInformation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target; //this is so smart --> e.target.name, e.target.value
    console.log(`Field changed: ${name}, New value: ${value}`);
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
        <label htmlFor="name">Name:</label>
        <input 
          value={formData.name} 
          onChange={handleChange} 
          type="text" 
          id="name" 
          name="name" 
        />

        <label htmlFor="email">Email:</label>
        <input 
          value={formData.email} 
          onChange={handleChange} 
          type="email" 
          id="email" 
          name="email" 
        />

        <label htmlFor="phone">Phone Number:</label>
        <input 
          value={formData.phone} 
          onChange={handleChange} 
          type="tel" 
          id="phone" 
          name="phone" 
        />
      </form>
    </>
  );
};
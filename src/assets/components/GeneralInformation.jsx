import React from "react";
import { useState } from "react";
export const GeneralInformation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    
  });
  console.log(formData.name)
  function handleChange(e) {
  const { inputName, value } = e.target;
//   console.log(e.target) 
  console.log(inputName, value)
  setFormData(prevFormData => {
    return {
      ...prevFormData, 
      [inputName]: value 
    };
  });
}

  return (
    <>
    {console.log(formData.name)}
    <form>
      <label htmlFor="name">Name:</label>
      <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input value={formData.email} type="email" id="email" name="email" />

      <label htmlFor="phone">Phone Number:</label>
      <input value={formData.phone} type="tel" id="phone" name="phone" />
    </form></>
  );
};

import React, { useState, ChangeEvent, useEffect } from 'react'
import { 
  Paper, 
  Typography, 
  TextField, 
  Box,
  Button,
  Divider
} from '@mui/material'
import { Person, Email, Phone, Edit, Save } from '@mui/icons-material'
import { useCv } from './CvContext'
import '../styles/CVSection.css'

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const GeneralInformation: React.FC = () => {
  const { cvData, updateCvData } = useCv();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [hasData, setHasData] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData = {
      ...formData,
      [name]: value,
    };
    setFormData(newData);
    
    // Update CV data in real-time
    updateCvData(newData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName.trim() && formData.email.trim()) {
      setIsEditing(false);
      setHasData(true);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 3 }} className="cv-section">
      <Typography 
        variant="h5" 
        component="h2" 
        gutterBottom 
        className="section-title"
        sx={{ 
          mb: 3,
          color: 'primary.main',
          fontWeight: 'medium',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <Person />
        General Information
      </Typography>

      {isEditing ? (
        <Box component="form" onSubmit={handleSubmit} noValidate className="form-container">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <TextField
                id="email"
                name="email"
                label="Email Address"
                variant="outlined"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                sx={{ flex: '1 1 300px' }}
                InputProps={{
                  startAdornment: <Email sx={{ mr: 1, color: 'action.active' }} />
                }}
              />
              
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                sx={{ flex: '1 1 300px' }}
                InputProps={{
                  startAdornment: <Phone sx={{ mr: 1, color: 'action.active' }} />
                }}
              />
            </Box>
          </Box>
          
          <Box className="button-container">
            <Button
              type="submit"
              variant="contained"
              startIcon={<Save />}
              sx={{ mt: 2 }}
              disabled={!formData.fullName.trim() || !formData.email.trim()}
            >
              Submit
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className="display-container">
          <Box className="display-item">
            <Typography variant="body2" className="display-label">
              Full Name:
            </Typography>
            <Typography variant="body1" className="display-value">
              {formData.fullName}
            </Typography>
          </Box>
          
          <Box className="display-item">
            <Typography variant="body2" className="display-label">
              Email Address:
            </Typography>
            <Typography variant="body1" className="display-value">
              {formData.email}
            </Typography>
          </Box>
          
          {formData.phoneNumber && (
            <Box className="display-item">
              <Typography variant="body2" className="display-label">
                Phone Number:
              </Typography>
              <Typography variant="body1" className="display-value">
                {formData.phoneNumber}
              </Typography>
            </Box>
          )}
          
          <Divider sx={{ my: 2 }} />
          
          <Box className="button-container">
            <Button
              variant="outlined"
              startIcon={<Edit />}
              onClick={handleEdit}
            >
              Edit
            </Button>
          </Box>
        </Box>
      )}
    </Paper>
  )
}

export default GeneralInformation

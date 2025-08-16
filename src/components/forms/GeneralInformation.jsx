import React from 'react';
import { Box, TextField, Typography, Paper } from '@mui/material';
import { useCv } from '../context/CvContext';

const GeneralInformation = () => {
  const { cvData, updateCvData } = useCv();

  const handleChange = (field) => (event) => {
    updateCvData({ [field]: event.target.value });
  };

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 3, 
        mb: 3, 
        borderRadius: 2,
        border: '1px solid #e0e0e0'
      }}
    >
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
          mb: 3, 
          color: 'primary.main',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        📝 General Information
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Full Name"
            value={cvData.fullName}
            onChange={handleChange('fullName')}
            fullWidth
            variant="outlined"
            sx={{ minWidth: '250px', flex: 1 }}
          />
          <TextField
            label="Job Title"
            value={cvData.jobTitle}
            onChange={handleChange('jobTitle')}
            fullWidth
            variant="outlined"
            sx={{ minWidth: '250px', flex: 1 }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Email"
            type="email"
            value={cvData.email}
            onChange={handleChange('email')}
            fullWidth
            variant="outlined"
            sx={{ minWidth: '250px', flex: 1 }}
          />
          <TextField
            label="Phone Number"
            value={cvData.phoneNumber}
            onChange={handleChange('phoneNumber')}
            fullWidth
            variant="outlined"
            sx={{ minWidth: '250px', flex: 1 }}
          />
        </Box>
        
        <TextField
          label="Address"
          value={cvData.address}
          onChange={handleChange('address')}
          fullWidth
          variant="outlined"
          multiline
          rows={2}
        />
      </Box>
    </Paper>
  );
};

export default GeneralInformation;

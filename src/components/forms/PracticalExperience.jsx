import React from 'react';
import { Box, TextField, Typography, Paper } from '@mui/material';
import { useCv } from '../context/CvContext';

const PracticalExperience = () => {
  const { cvData, updateCvData } = useCv();

  const handleChange = (field) => (event) => {
    updateCvData({ 
      [`work_${field}`]: event.target.value 
    });
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
        💼 Practical Experience
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Job Title"
            value={cvData.work_jobTitle || ''}
            onChange={handleChange('jobTitle')}
            fullWidth
            variant="outlined"
            sx={{ minWidth: '250px', flex: 1 }}
          />
          <TextField
            label="Company"
            value={cvData.work_company || ''}
            onChange={handleChange('company')}
            fullWidth
            variant="outlined"
            sx={{ minWidth: '250px', flex: 1 }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Start Date"
            type="date"
            value={cvData.work_startDate || ''}
            onChange={handleChange('startDate')}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ minWidth: '200px', flex: 1 }}
          />
          <TextField
            label="End Date"
            type="date"
            value={cvData.work_endDate || ''}
            onChange={handleChange('endDate')}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ minWidth: '200px', flex: 1 }}
          />
        </Box>
        
        <TextField
          label="Key Responsibilities & Achievements"
          value={cvData.work_responsibilities || ''}
          onChange={handleChange('responsibilities')}
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          placeholder="Describe your key responsibilities, achievements, and impact in this role..."
        />
      </Box>
    </Paper>
  );
};

export default PracticalExperience;

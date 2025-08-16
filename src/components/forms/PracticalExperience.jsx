import React, { useState } from 'react';
import { Box, TextField, Typography, Paper, Button, Card, CardContent, Divider } from '@mui/material';
import { useCv } from '../context/CvContext';

const PracticalExperience = () => {
  const { cvData, addWork } = useCv();
  const [currentWork, setCurrentWork] = useState({
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    responsibilities: ''
  });

  const handleChange = (field) => (event) => {
    setCurrentWork(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = () => {
    if (currentWork.jobTitle.trim() && currentWork.company.trim()) {
      addWork(currentWork);
      setCurrentWork({
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        responsibilities: ''
      });
    }
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
            value={currentWork.jobTitle}
            onChange={handleChange('jobTitle')}
            fullWidth
            variant="outlined"
            sx={{ minWidth: '250px', flex: 1 }}
          />
          <TextField
            label="Company"
            value={currentWork.company}
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
            value={currentWork.startDate}
            onChange={handleChange('startDate')}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ minWidth: '200px', flex: 1 }}
          />
          <TextField
            label="End Date"
            type="date"
            value={currentWork.endDate}
            onChange={handleChange('endDate')}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ minWidth: '200px', flex: 1 }}
          />
        </Box>
        
        <TextField
          label="Key Responsibilities & Achievements"
          value={currentWork.responsibilities}
          onChange={handleChange('responsibilities')}
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          placeholder="Describe your key responsibilities, achievements, and impact in this role..."
        />
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            onClick={handleSubmit}
            disabled={!currentWork.jobTitle.trim() || !currentWork.company.trim()}
            sx={{ 
              px: 4,
              py: 1,
              borderRadius: 2
            }}
          >
            Add Experience
          </Button>
        </Box>
      </Box>

      {cvData.workEntries.length > 0 && (
        <>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
            Added Work Experience
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {cvData.workEntries.map((entry, index) => (
              <Card key={entry.id || index} variant="outlined" sx={{ bgcolor: '#f9f9f9' }}>
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {entry.jobTitle}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                    {entry.company}
                  </Typography>
                  {(entry.startDate || entry.endDate) && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {entry.startDate} {entry.startDate && entry.endDate ? '- ' : ''}{entry.endDate}
                    </Typography>
                  )}
                  {entry.responsibilities && (
                    <Typography variant="body2" sx={{ mt: 1, whiteSpace: 'pre-wrap' }}>
                      {entry.responsibilities}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </>
      )}
    </Paper>
  );
};

export default PracticalExperience;

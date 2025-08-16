import React, { useState } from 'react';
import { Box, TextField, Typography, Paper, Button, Card, CardContent, Divider } from '@mui/material';
import { useCv } from '../context/CvContext';

const EducationalExperience = () => {
  const { cvData, addEducation } = useCv();
  const [currentEducation, setCurrentEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (field) => (event) => {
    setCurrentEducation(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = () => {
    if (currentEducation.school.trim() && currentEducation.degree.trim()) {
      addEducation(currentEducation);
      setCurrentEducation({
        school: '',
        degree: '',
        startDate: '',
        endDate: ''
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
        🎓 Educational Experience
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="School/University"
            value={currentEducation.school}
            onChange={handleChange('school')}
            fullWidth
            variant="outlined"
            sx={{ minWidth: '250px', flex: 1 }}
          />
          <TextField
            label="Degree/Field of Study"
            value={currentEducation.degree}
            onChange={handleChange('degree')}
            fullWidth
            variant="outlined"
            sx={{ minWidth: '250px', flex: 1 }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Start Date"
            type="date"
            value={currentEducation.startDate}
            onChange={handleChange('startDate')}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ minWidth: '200px', flex: 1 }}
          />
          <TextField
            label="End Date"
            type="date"
            value={currentEducation.endDate}
            onChange={handleChange('endDate')}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ minWidth: '200px', flex: 1 }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            onClick={handleSubmit}
            disabled={!currentEducation.school.trim() || !currentEducation.degree.trim()}
            sx={{ 
              px: 4,
              py: 1,
              borderRadius: 2
            }}
          >
            Add Education
          </Button>
        </Box>
      </Box>

      {cvData.educationEntries.length > 0 && (
        <>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
            Added Education Entries
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {cvData.educationEntries.map((entry, index) => (
              <Card key={entry.id || index} variant="outlined" sx={{ bgcolor: '#f9f9f9' }}>
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {entry.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {entry.school}
                  </Typography>
                  {(entry.startDate || entry.endDate) && (
                    <Typography variant="body2" color="text.secondary">
                      {entry.startDate} {entry.startDate && entry.endDate ? '- ' : ''}{entry.endDate}
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

export default EducationalExperience;

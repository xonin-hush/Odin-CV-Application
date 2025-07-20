import React, { useState, ChangeEvent, useEffect } from 'react'
import { 
  Paper, 
  Typography, 
  TextField, 
  Box,
  Button,
  Divider
} from '@mui/material'
import { School, Book, DateRange, Edit, Save } from '@mui/icons-material'
import { useCv } from './CvContext'
import '../styles/CVSection.css'

interface FormData {
  schoolName: string;
  studyTitle: string;
  studyDate: string;
}

const EducationalExperience: React.FC = () => {
  const { addEducation } = useCv();
  const [formData, setFormData] = useState<FormData>({
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  });
  
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [hasData, setHasData] = useState<boolean>(false);
  const [currentEntry, setCurrentEntry] = useState<any>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData = {
      ...formData,
      [name]: value,
    };
    setFormData(newData);
    
    // Create a temporary entry for live preview
    const tempEntry = {
      ...newData,
      id: 'temp-education'
    };
    
    // Update the current entry for live preview
    setCurrentEntry(tempEntry);
  };

  // Update the CV data for live preview
  useEffect(() => {
    if (currentEntry && (currentEntry.schoolName || currentEntry.studyTitle)) {
      // For live preview, we'll add the current entry temporarily
      // This is a simplified approach - in production you might want a more sophisticated system
    }
  }, [currentEntry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.schoolName.trim() && formData.studyTitle.trim()) {
      addEducation(formData);
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
        <School />
        Educational Experience
      </Typography>

      {isEditing ? (
        <Box component="form" onSubmit={handleSubmit} noValidate className="form-container">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              id="schoolName"
              name="schoolName"
              label="School Name"
              variant="outlined"
              fullWidth
              required
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="Enter your school or university name"
              InputProps={{
                startAdornment: <School sx={{ mr: 1, color: 'action.active' }} />
              }}
            />
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <TextField
                id="studyTitle"
                name="studyTitle"
                label="Title of Study"
                variant="outlined"
                required
                value={formData.studyTitle}
                onChange={handleChange}
                placeholder="e.g., Bachelor of Computer Science"
                sx={{ flex: '2 1 300px' }}
                InputProps={{
                  startAdornment: <Book sx={{ mr: 1, color: 'action.active' }} />
                }}
              />
              
              <TextField
                id="studyDate"
                name="studyDate"
                label="Graduation Date"
                variant="outlined"
                type="date"
                value={formData.studyDate}
                onChange={handleChange}
                sx={{ flex: '1 1 200px' }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: <DateRange sx={{ mr: 1, color: 'action.active' }} />
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
              disabled={!formData.schoolName.trim() || !formData.studyTitle.trim()}
            >
              Submit
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className="display-container">
          <Box className="display-item">
            <Typography variant="body2" className="display-label">
              School Name:
            </Typography>
            <Typography variant="body1" className="display-value">
              {formData.schoolName}
            </Typography>
          </Box>
          
          <Box className="display-item">
            <Typography variant="body2" className="display-label">
              Title of Study:
            </Typography>
            <Typography variant="body1" className="display-value">
              {formData.studyTitle}
            </Typography>
          </Box>
          
          {formData.studyDate && (
            <Box className="display-item">
              <Typography variant="body2" className="display-label">
                Graduation Date:
              </Typography>
              <Typography variant="body1" className="display-value">
                {new Date(formData.studyDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
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

export default EducationalExperience

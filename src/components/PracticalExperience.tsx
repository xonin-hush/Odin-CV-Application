import React, { useState, ChangeEvent, useEffect } from 'react'
import { 
  Paper, 
  Typography, 
  TextField, 
  Box,
  Button,
  Divider
} from '@mui/material'
import { Work, Business, Assignment, DateRange, Edit, Save } from '@mui/icons-material'
import { useCv } from './CvContext'
import '../styles/CVSection.css'

interface FormData {
  companyName: string;
  positionTitle: string;
  mainResponsibilities: string;
  startDate: string;
  endDate: string;
}

const PracticalExperience: React.FC = () => {
  const { addWork } = useCv();
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    startDate: "",
    endDate: "",
  });
  
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [hasData, setHasData] = useState<boolean>(false);
  const [currentEntry, setCurrentEntry] = useState<any>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newData = {
      ...formData,
      [name]: value,
    };
    setFormData(newData);
    
    // Create a temporary entry for live preview
    const tempEntry = {
      ...newData,
      id: 'temp-work'
    };
    
    setCurrentEntry(tempEntry);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyName.trim() && formData.positionTitle.trim()) {
      addWork(formData);
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
        <Work />
        Practical Experience
      </Typography>

      {isEditing ? (
        <Box component="form" onSubmit={handleSubmit} noValidate className="form-container">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <TextField
                id="companyName"
                name="companyName"
                label="Company Name"
                variant="outlined"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                sx={{ flex: '1 1 300px' }}
                InputProps={{
                  startAdornment: <Business sx={{ mr: 1, color: 'action.active' }} />
                }}
              />
              
              <TextField
                id="positionTitle"
                name="positionTitle"
                label="Position Title"
                variant="outlined"
                required
                value={formData.positionTitle}
                onChange={handleChange}
                placeholder="e.g., Software Developer"
                sx={{ flex: '1 1 300px' }}
                InputProps={{
                  startAdornment: <Work sx={{ mr: 1, color: 'action.active' }} />
                }}
              />
            </Box>
            
            <TextField
              id="mainResponsibilities"
              name="mainResponsibilities"
              label="Main Responsibilities"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.mainResponsibilities}
              onChange={handleChange}
              placeholder="Describe your main responsibilities and achievements in this role..."
              InputProps={{
                startAdornment: <Assignment sx={{ mr: 1, color: 'action.active', alignSelf: 'flex-start', mt: 1 }} />
              }}
            />
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <TextField
                id="startDate"
                name="startDate"
                label="Start Date"
                variant="outlined"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                sx={{ flex: '1 1 200px' }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: <DateRange sx={{ mr: 1, color: 'action.active' }} />
                }}
              />
              
              <TextField
                id="endDate"
                name="endDate"
                label="End Date (or Current)"
                variant="outlined"
                type="date"
                value={formData.endDate}
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
              disabled={!formData.companyName.trim() || !formData.positionTitle.trim()}
            >
              Submit
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className="display-container">
          <Box className="display-item">
            <Typography variant="body2" className="display-label">
              Company Name:
            </Typography>
            <Typography variant="body1" className="display-value">
              {formData.companyName}
            </Typography>
          </Box>
          
          <Box className="display-item">
            <Typography variant="body2" className="display-label">
              Position Title:
            </Typography>
            <Typography variant="body1" className="display-value">
              {formData.positionTitle}
            </Typography>
          </Box>
          
          {formData.mainResponsibilities && (
            <Box className="display-item">
              <Typography variant="body2" className="display-label">
                Main Responsibilities:
              </Typography>
              <Typography variant="body1" className="display-value responsibilities-text">
                {formData.mainResponsibilities}
              </Typography>
            </Box>
          )}
          
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            {formData.startDate && (
              <Box className="display-item">
                <Typography variant="body2" className="display-label">
                  Start Date:
                </Typography>
                <Typography variant="body1" className="display-value">
                  {new Date(formData.startDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long'
                  })}
                </Typography>
              </Box>
            )}
            
            {formData.endDate && (
              <Box className="display-item">
                <Typography variant="body2" className="display-label">
                  End Date:
                </Typography>
                <Typography variant="body1" className="display-value">
                  {new Date(formData.endDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long'
                  })}
                </Typography>
              </Box>
            )}
          </Box>
          
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

export default PracticalExperience

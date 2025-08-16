import { Container, Typography, Box, CssBaseline, Grid, Paper } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import GeneralInformation from './components/forms/GeneralInformation'
import EducationalExperience from './components/forms/EducationalExperience'
import PracticalExperience from './components/forms/PracticalExperience'
import LiveCvPreview from './components/cv/LiveCvPreview'
import { CvProvider } from './components/context/CvContext'
import './styles/CVSection.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 400,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px',
        },
      },
    },
  },
});

function App() {
  return (
    <CvProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ py: 4, minHeight: '100vh' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{ 
              mb: 4,
              color: 'primary.main',
              fontWeight: 'bold'
            }}
          >
            CV Builder
          </Typography>
          
          <Typography 
            variant="h6" 
            component="p" 
            align="center"
            sx={{ 
              mb: 5,
              color: 'text.secondary',
              fontStyle: 'italic'
            }}
          >
            Build your professional CV with our easy-to-use form builder
          </Typography>
          
          <Grid container spacing={3}>
            {/* Left Column - Forms */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <GeneralInformation />
                <EducationalExperience />
                <PracticalExperience />
              </Box>
            </Grid>
            
            {/* Right Column - Live CV Preview */}
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  position: 'sticky',
                  top: 20,
                  height: 'fit-content',
                  maxHeight: 'calc(100vh - 40px)',
                  overflowY: 'auto'
                }}
              >
                <Typography 
                  variant="h6" 
                  component="h2" 
                  gutterBottom
                  sx={{ 
                    mb: 2,
                    color: 'primary.main',
                    fontWeight: 'medium',
                    textAlign: 'center'
                  }}
                >
                  Live CV Preview
                </Typography>
                <LiveCvPreview />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </CvProvider>
  )
}

export default App

import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'
import LiveCvPreview from './components/LiveCvPreview'
import { CvProvider } from './components/CvContext'
import './styles/CVSection.css'
import './styles/AppLayout.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <CvProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app-container">
          {/* Left Side - Forms */}
          <div className="left-side">
            <div className="left-content">
              <h1 className="app-title">CV Builder</h1>
              <p className="app-subtitle">
                Build your professional CV with our easy-to-use form builder
              </p>
              
              <div className="forms-container">
                <GeneralInformation />
                <EducationalExperience />
                <PracticalExperience />
              </div>
            </div>
          </div>
          
          {/* Right Side - CV Preview */}
          <div className="right-side">
            <div className="preview-header">
              <h2>Live CV Preview</h2>
            </div>
            <div className="cv-preview-wrapper">
              <LiveCvPreview />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </CvProvider>
  )
}

export default App

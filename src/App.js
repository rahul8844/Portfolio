import './App.css';
import { HeaderBackground } from './components/HeaderBackground/HeaderBackground';
import { PdfViewer } from './components/PDFFileViewer/PdfViewer';
import { ProfileImage } from './components/ProfileImage/ProfileImage';

const SIDE_PANEL_ITEMS =[
{
  label: "Personal Info",
  id:'personalInfo'
},
{
  label: "Learnings & Educations",
  id:'learnings'
},
{
  label: "Skill Set",
  id:'skillSet'
},
{
  label: "Work Experience",
  id:'workExperience'
},
{
  label: "Projects",
  id:'projects'
},
{
  label: "Achievements",
  id:'achievements'
},
{
  label: "Resume",
  id:'resume'
},
]

function App() {
  return (
    <div className="App">
      <HeaderBackground/>
      <ProfileImage/>
      <div className='panel-wrapper'>
        <div className='panel'>
          {SIDE_PANEL_ITEMS.map((item)=>(
            <>
              <label>{item.label}</label>
              <hr/>
            </>
          ))}
        </div>
        <PdfViewer/>
      </div>
          
    </div>
  );
}

export default App;

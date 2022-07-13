import './App.css';
import { HeaderBackground } from './components/HeaderBackground/HeaderBackground';
import { ProfileImage } from './components/ProfileImage/ProfileImage';

function App() {
  return (
    <div className="App">
      <HeaderBackground/>
      <ProfileImage/>
      <div className='panel-wrapper'>
        <div className='panel'>
          <label>
            Personal Info
          </label>
          <hr/>
          <label>
            Skill-Set
          </label>
          <hr/>
          <label>
            Work Experience
          </label>
          <hr/>
          <label>
            Projects
          </label>
          <hr/>
          <label>
            {'Learnings & Educations'}
          </label>
          <hr/>
          <label>
            {'Achievements'}
          </label>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default App;

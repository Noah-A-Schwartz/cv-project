import './App.css';
import Education from './Components/Education';
import Header from './Components/Header';
import PersonalInformation from './Components/PersonalInformation';
import WorkExperience from './Components/WorkExperience';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className = "info">
        <PersonalInformation/>
        <Education/>
        <WorkExperience/>
      </div>
    </div>
  );
}

export default App;

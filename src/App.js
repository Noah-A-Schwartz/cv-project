import './App.css';
import Education from './Components/Education';
import Header from './Components/Header';
import PersonalInformation from './Components/PersonalInformation';
import WorkExperience from './Components/WorkExperience';
import CVInfo from './Components/CVInfo';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="info">
          <PersonalInformation />
          <Education />
          <WorkExperience />
        </div>
        <div className="cv">
          <CVInfo/>
        </div>
      </main>
    </div>
  );
}

export default App;

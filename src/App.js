import './App.css';
import Education from './Components/Education';
import Header from './Components/Header';
import PersonalInformation from './Components/PersonalInformation';
import WorkExperience from './Components/WorkExperience';
import CVInfo from './Components/CVInfo';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super()

    this.state = {
      info: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      }
    };
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }
  handleFormSubmission(info){
    this.setState({
      info: {
        firstName: info[0].value,
        lastName: info[1].value,
        email: info[2].value,
        phone: info[3].value,
      }
    }

    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="info">
            <PersonalInformation submission={this.handleFormSubmission}/>
            <Education />
            <WorkExperience />
          </div>
          <div className="cv">
            <CVInfo info = {this.state} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;

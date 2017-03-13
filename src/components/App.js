import React, {PropTypes} from 'react';
import Name  from './Name';
import Profile  from './Profile';
import Objective  from './Objective';
import PersonalSkill  from './PersonalSkill';
import Contact  from './Contact';
import Education  from './Education';
import Experience  from './Experience';
import ProfessionalSkill  from './ProfessionalSkill';
import Award  from './Award';

class App extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            Name: {
                name: "",
                thumb: "",
                profession: ""
            },
            Profile: {
                title: "",
                description: ""
            },
            Objective: {
                title: "",
                description: ""
            },
            PersonalSkill: {
                title: "",
                management: "",
                teamWork: "",
                creative: "",
                communication: ""
            },
            Contact: {
                title: "",
                address: "",
                tel: "",
                email: "",
                webSite: ""
            },
            Education: {
                title: "",
                university: []
            },
            Experience: {
                title: "",
                company: []
            },
            ProfessionalSkill: {
                title: "",
                tools: []
            },
            Award: {}
        };
    }

    componentWillMount() {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://www.mocky.io/v2/57dfec211000009020598073', true);
        const that = this;
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                let data = JSON.parse(request.responseText);
                that.setState({
                    Name: {
                        name: data.name,
                        thumb: data.thumb,    
                        profession: data.profession
                    },
                    Profile: data.profile,
                    Objective: data.objective,
                    PersonalSkill: data.personalSkill,
                    Contact: data.contactMe,
                    Education: data.education,
                    Experience: data.experience,
                    ProfessionalSkill: data.professionalSkill,
                    Award: data.award
                });
            } else {
                // We reached our target server, but it returned an error
            }
        };
        request.onerror = function() {
        // There was a connection error of some sort
        };
        request.send();
    }

    progressBar(value) {
        return(
            <progress value={value} max="100"/>
        );
    }

    render() {
        return(
            <div>
                <div id="left-col">
                    <Name Name={this.state.Name}/>
                    <Profile Profile={this.state.Profile} />
                    <Objective Objective={this.state.Objective} />
                    <PersonalSkill PersonalSkill={this.state.PersonalSkill} progressBar={this.progressBar}/>
                    <Contact Contact={this.state.Contact} />
                </div>
                <div id="right-col">
                    <Education Education={this.state.Education} />
                    <Experience Experience={this.state.Experience} />
                    <ProfessionalSkill ProfessionalSkill={this.state.ProfessionalSkill}  progressBar={this.progressBar}/>
                    <Award Award={this.state.Award} />
                </div>
            </div>
        );
    }
}

export default App;

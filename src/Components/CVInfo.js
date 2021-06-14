import React, { Component } from "react";
 class CVInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {
                firstName: props.firstName,
                lastName: props.lastName,
                email: props.email,
                phone: props.phone,
            }
        }
    }
    
    render(){
        const {info} = this.props.info;
        return (
            <div className = "cv-p-info">
                <div className="cv-pinfo">
                    <div>
                        <h3>{info.firstName + " " + info.lastName}</h3>
                    </div>
                    <div>
                        <p>{info.email}</p>
                    </div>
                    <div>
                        <p>{info.phone}</p>
                    </div>
                </div>
                <div className = "cv-einfo">
                    <div>
                        <h3>University Name</h3>
                    </div>
                    <div>
                        <p>City</p>
                    </div>
                    <div>
                        <p>Degree</p>
                    </div>
                    <div>
                        <p>Graduation Year</p>
                    </div>
                </div>
            </div>

        );
    }
}
export default CVInfo;
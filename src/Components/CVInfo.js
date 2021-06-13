import React, { Component } from "react";

class CVInfo extends Component {
    constructor(prop) {
        super(prop);

        this.state = {
            info: {
                firstName: "",
                lastName: "",
                email: "",
                phone: ""
            }
        }
    }

    render() {
        return (
            <div className = "cv-p-info">
                <div className="cv-pinfo">
                    <h3>Name</h3>
                    <p>Email</p>
                    <p>Phone</p>
                </div>
                <div className = "cv-einfo">
                    <h3>University Name</h3>
                    <p>City</p>
                    <p>Geaduation Degree</p>
                    <p>Graduation Year</p>
                </div>
            </div>

        );
    }
}
export default CVInfo
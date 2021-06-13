import React, { Component } from "react";

class Education extends Component {
    constructor(prop) {
        super(prop);

        this.state = {
            info: {
                university: "",
                city: "",
                degree: "",
                year: "",
            }
        }
    }

    render() {
        return (
            <div className = "e-info">
                <h2 className="info-header">Education</h2>
                <form id = "info-form">
                    <div className="input-fields">
                        <input placeHolder = "University" name="university" type="text"></input>
                        <input placeHolder = "City" name="city" type="text"></input>
                        <input placeHolder = "Degree" name="degree" type="text"></input>
                        <input placeHolder = "Graduation Year" name="email" type="email"></input>
                    </div>
                </form>
            </div>

        );
    }
}
export default Education;
import React, { Component } from "react";

class WorkExperience extends Component {
    constructor(prop) {
        super(prop);

        this.state = {
            workInfo: {
                position: "",
                company: "",
                city: "",
                from: "",
                to: "",
            }
        }
    }

    render() {
        return (
            <div className = "w-info">
                <h2 className="info-header">Work Experience</h2>
                <form id = "info-form">
                    <div className="input-fields">
                        <input placeHolder = "Position" name="position" type="text"></input>
                        <input placeHolder = "Company" name="company" type="text"></input>
                        <input placeHolder = "city" name="city" type="text"></input>
                        <input placeHolder = "From" name="from-year" type="text"></input>
                        <input placeHolder = "To" name="to-year" type="text"></input>
                        <button type = "button">Add</button>
                    </div>
                </form>
            </div>

        );
    }
}
export default WorkExperience;
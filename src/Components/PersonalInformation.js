import React, { Component } from "react";

class PersonalInformation extends Component {
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
            <div className = "p-info">
                <h2 className="info-header">Personal Information</h2>
                <form id = "info-form">
                    <div className="input-fields">
                        <input placeHolder = "First Name" name="first-name" type="text"></input>
                        <input placeHolder = "Last Name" name="last-name" type="text"></input>
                        <input placeHolder = "Email" name="email" type="email"></input>
                        <input placeHolder = "Phone" name="Phone" type="text"></input>
                    </div>
                </form>
            </div>

        );
    }
}
export default PersonalInformation;
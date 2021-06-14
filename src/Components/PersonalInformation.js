import React, { Component } from "react";



class PersonalInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {
                firstName: "",
                lastName: "",
                email: "",
                phone: ""
            }
        }
        this.onChangeEvent = this.onChangeEvent.bind(this);
    }
    onChangeEvent(){
        this.setState({
            info:{
                firstName: this.value,
                lastName: this.value,
                email: this.value,
                phone: this.value
            }
        })
    }
    onSubmitInfo = (e) => {
        e.preventDefault();
        let form = e.target;
        this.setState({
            info:{
                firstName: form[0].value,
                lastName: form[1].value,
                email: form[2].value,
                phone:form[3].value
            }
        });
        this.props.submission(form);
    }
    

    render() {
        return (
            <div className = "p-info">
                <h2 className="info-header">Personal Information</h2>
                <form onSubmit={this.onSubmitInfo} id = "info-form" >
                    <div className="input-fields">
                        <input onChange = {this.onChangeEvent} placeHolder = "First Name" id="first-name" type="text" required></input>
                        <input onChange = {this.onChangeEvent} placeHolder = "Last Name" id="last-name" type="text" required></input>
                        <input onChange = {this.onChangeEvent} placeHolder = "Email"id="email" type="email" required></input>
                        <input onChange = {this.onChangeEvent} placeHolder = "Phone" id="Phone" type="text" required></input>
                        <input type = "submit"></input>
                    </div>
                </form>
            </div>

        );
    }
}
export default PersonalInformation;
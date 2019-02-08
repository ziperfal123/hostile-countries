import React , {Component} from "react";

class UpdateCoach extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing : true
        }

        this.sendForm = this.sendForm.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderSuccessMessage = this.renderSuccessMessage.bind(this)

    }
    

    inputStyle = {
        width: "350px",
        height:"80px",
        FontSize: "300px",
        resize: "none"
    }


    sendForm(ev) {
        ev.preventDefault(); // for overriding the default event affect

        if (this.countryName.value === "" || this.teamCoach.value ==="") {
            alert("One of the fields is empty. Please enter a valid country name / coach name") // state.editing will stay true
            return;    
        }
        
        const url = `https://hostilstate.herokuapp.com/UpdateTeamCoach`
        fetch (url , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: `countryName=${this.countryName.value}&teamCoach=${this.teamCoach.value}`
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            if (data.message === "You are trying to rename an existing teamCoach or No document exists with the countryName you input. pleas check your input value ") {
                alert("Please enter a valid country name (notice- first letter has to be capital!) or another coach name");
                this.countryName.value = ""     // state.editing will stay true
                this.teamCoach.value = ""
            }
            else if (data.message === "your update was succeeded") {
                this.setState({editing : false})
            }
        }) 
        .catch(err => console.error(err))
    }



    renderForm() {
        return (
            <div>
                <form >
                <textarea placeholder='Enter Country' ref={input => (this.countryName = input)} style={this.inputStyle}/>
                <br/><br/>

                <textarea placeholder='Enter Coach Name' ref={input => (this.teamCoach = input)} style={this.inputStyle} />
                <br/><br/>

                <button className="ui primary button" onClick={this.sendForm}>Send</button>
                </form>
            </div>
        )
    }

    renderSuccessMessage() {
        return (
            <div>
                <h2>Success! Check the updated list of countries in the matched route..</h2>
            </div>    
        )
    }

    render() {
        return this.state.editing === true ? this.renderForm() : this.renderSuccessMessage();
    }
}


export default UpdateCoach;
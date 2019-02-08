import React, { Component } from "react";
import Team from "./Team";


class ShowPlayersData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      emptyList : false,
      teams: []
    };

    this.sendForm = this.sendForm.bind(this);
    this.addTeam = this.addTeam.bind(this);
    this.eachTeam = this.eachTeam.bind(this)
    this.renderForm = this.renderForm.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderEmptyList = this.renderEmptyList.bind(this);
    
  }

  inputStyle = {
    width: "350px",
    height:"80px",
    FontSize: "300px",
    resize: "none"
}


  sendForm(ev) {
    ev.preventDefault(); // for overriding the default event affect

    const numOfPlayers = parseInt(this.numberOfPlayers.value);
    if (isNaN(numOfPlayers)) {
      alert("Please enter a valid number of players")
      this.numberOfPlayers.value = "";
      this.typeName.value = "";
      return;
    }


    const url = `https://hostilstate.herokuapp.com/showDetails`;
    fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      credentials: "same-origin",
      body: `numberOfPlayers=${this.numberOfPlayers.value}&typeName=${this.typeName.value}`
    })
      .then(res => res.json())
      .then(data => {
          console.log(data.length);
          if (data.length === 0 || data.length === undefined) {
            this.setState({emptyList : true})
            return;
          }
          data.map(item =>
            this.addTeam({
              countryName: item.countryName,
              category: item.category,
              typeName: item.typeName,
              teamCoach: item.teamCoach,
              numberOfPlayers: item.numberOfPlayers,
              hostileStateName: item.hostileStates[0].name,
              hostileStatesLevel: item.hostileStates[0].level
            })
          )
        }
      )
      .catch(err => console.error(err));
    this.setState({
      editing: false
    });
  }

  addTeam({ countryName, category, typeName, teamCoach, numberOfPlayers, hostileStateName, hostileStatesLevel}) {
    // console.log(countryName , typeName , category , teamCoach , numberOfPlayers);
    this.setState(prevState => ({
      teams: [
        ...prevState.teams,{
          countryName: countryName,
          category: category,
          typeName: typeName,
          teamCoach: teamCoach,
          numberOfPlayers: numberOfPlayers,
          hostileStatesName: hostileStateName,
          hostileStatesLevel: hostileStatesLevel
        }
      ]
    }));
  }


  eachTeam(item , i) {
    return(
        <Team key={i} team={item}> </Team>
    )
  }


  renderForm() {
    return (
      <div className="detailsForm">
        <form onSubmit={this.sendForm}>
          <textarea placeholder="Insert number of players" ref={input => (this.numberOfPlayers = input)} style={this.inputStyle}/>
          <br/><br/>
          
          <textarea placeholder="Insert type of sport" ref={input => (this.typeName = input)} style={this.inputStyle} />
          <br /><br />
          
          <button className="ui primary button" onClick={this.sendForm}>Send</button>
        </form>
      </div>
    );
  }

  renderList() {
    return (
      <div className="listOfTeams">
        <h1>The Teams are: </h1>
        {this.state.teams.map(this.eachTeam)}
      </div>
    );
  }

  renderEmptyList() {
    return (
      <h1>List is empty..</h1>
    )
  }




  render() {
    if (this.state.emptyList === true)
      return this.renderEmptyList();
    else if (this.state.editing === true && this.state.emptyList === false)
      return this.renderForm();
    
      else
        return this.renderList()
  }
}



export default ShowPlayersData;

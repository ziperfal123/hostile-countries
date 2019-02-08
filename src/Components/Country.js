import React , {Component} from "react";

import {Card, CardTitle , CardText} from 'reactstrap';




class Country extends Component {
    constructor(props) {
        super(props)
    }

    title = {
        fontSize: "40px"

    }

    infoType = {
        fontSize: "25px",
        color: "# "
    }

    info = {
        fontSize: "25px"
    }


    render(){
        return(  
            <div className="country">
                <Card body className="text-left">
                    <CardTitle style={this.title}>{this.props.countryDetails.countryName}</CardTitle>
                    <CardText>
                        <span style={this.infoType}>Type: </span>
                        <span style={this.info}>{` ` + this.props.countryDetails.typeName}</span>
                    </CardText>
                    <CardText>
                        <span style={this.infoType}>Category: </span>
                        <span style={this.info}>{this.props.countryDetails.category}</span>
                    </CardText>
                    <CardText>
                        <span style={this.infoType}>Coach Name: </span>
                        <span style={this.info}>{this.props.countryDetails.teamCoach}</span>
                    </CardText>
                    <CardText>
                        <span style={this.infoType}>Number Of Players: </span>
                        <span style={this.info}>{this.props.countryDetails.numberOfPlayers}</span>
                        </CardText>
                    <CardText>
                        <span style={this.infoType}>Hostile State: </span>
                        <span style={this.info}>{this.props.countryDetails.hostileStatesName}</span>
                        </CardText>
                    <CardText>
                        <span style={this.infoType}>Hostile State Level: </span> 
                        <span style={this.info}>{this.props.countryDetails.hostileStatesLevel}</span>
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default Country;



/*

                    _countryName : countryName,
                    _typeName : typeName ,
                    _catagory : catagory ,
                    _teamCoach : teamCoach,
                    _numberOfPlayers : numberOfPlayers 

*/ 
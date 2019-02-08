import React , {Component} from "react";

import {Card, CardTitle , CardText} from 'reactstrap';



class Team extends Component {
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


    render() {
        return(
            <div className="team">
                <Card body className="text-left">
                    <CardTitle style={this.title}>{this.props.team.countryName}</CardTitle>
                    <CardText>
                        <span style={this.infoType}>Category: </span>
                        <span style={this.info}>{this.props.team.category}</span>
                    </CardText>

                    <CardText>
                        <span style={this.infoType}>Type: </span>
                        <span style={this.info}>{this.props.team.typeName}</span>
                    </CardText>

                    <CardText>
                        <span style={this.infoType}>Coach: </span>
                        <span style={this.info}>{this.props.team.teamCoach}</span>
                    </CardText>

                    <CardText>
                        <span style={this.infoType}>Number Of Players: </span>
                        <span style={this.info}>{this.props.team.numberOfPlayers}</span>
                    </CardText>

                    <CardText>
                        <span style={this.infoType}>Hostile state: </span>
                        <span style={this.info}>{this.props.team.hostileStateName}</span>
                    </CardText>

                    <CardText>
                        <span style={this.infoType}>Hostile state level: </span>
                        <span style={this.info}>{this.props.team.hostileStatesLevel}</span>
                    </CardText>
                </Card>
            </div>
        )
    }
}


export default Team;
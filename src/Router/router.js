import React , {Component} from 'react';
import {Route} from 'react-router-dom';
import Header from '../Components/Header';
import CountriesList from '../Components/CountriesList';
import ShowPlayesData from '../Components/ShowPlayersData';
import UpdateCoach from '../Components/UpdateCoach';

const path = window.location.pathname


class ReactRouter extends Component {
    render(){
        return(
            <div className="ui container">
                <React.Fragment>
                    <Header/>
                    <Route exact path = {path} component = {CountriesList}/>
                    <Route path = {`${path}showDetails`} component = {ShowPlayesData}/>
                    <Route path = {`${path}updateTeamCoach`} component = {UpdateCoach}/>                    
                </React.Fragment>
            </div>
        )    
    }
}

export default ReactRouter;

import React , {Component} from "react";
import Country from "./Country";


class CountriesList extends Component {
    constructor(props) {
        super(props);
        this.state = { countries: [] };
        this.eachCountry = this.eachCountry.bind(this)
        this.addCountry = this.addCountry.bind(this)
    }


    componentDidMount() {
        const url = `https://hostilstate.herokuapp.com/GetAllCountries`;
        fetch(url)
        .then(res => res.json())
        .then(data => data.map(item => 
            this.addCountry({countryName: item.countryName , category: item.category, typeName : item.typeName, teamCoach: item.teamCoach,
                 numberOfPlayers: item.numberOfPlayers , hostileStateName : item.hostileStates[0].name , hostileStatesLevel : item.hostileStates[0].level})))
            .catch(err => console.error(err));

    }

    eachCountry(country , i) {
        return(
              <Country countryDetails = {country} key={i}> </Country>
        );
    }


    addCountry({countryName , category , typeName, teamCoach  , numberOfPlayers , hostileStateName , hostileStatesLevel}) {
        // console.log(countryName , typeName , category , teamCoach , numberOfPlayers);
        this.setState( prevState => ({
            countries: [
                ...prevState.countries, {
                    countryName : countryName,
                    category : category ,
                    typeName : typeName , 
                    teamCoach : teamCoach,
                    numberOfPlayers : numberOfPlayers ,
                    hostileStatesName : hostileStateName ,
                    hostileStatesLevel : hostileStatesLevel
                }]
        }))
    }


    render() {
        // console.log(this.state.countries);
        return(
            <div className="countriesList">
                {this.state.countries.map(this.eachCountry)}
            </div>
        )
    }





}



export default CountriesList;

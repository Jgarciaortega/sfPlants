import { LightningElement, wire } from 'lwc';
import getAllTeams from "@salesforce/apex/DataNbaApi.GetTeams";
import getAllStadiums from "@salesforce/apex/DataNbaApi.GetAllStadiums";
import getPlayersByTeam from "@salesforce/apex/DataNbaApi.GetPlayersByTeam";

export default class App extends LightningElement {

    teams;
    team;
    stadiums;
    stadium;
    mapmarkers;
    players;
    player;


    @wire(getAllStadiums)
    wiredStadiums({ error, data }) {
        if (data) {
            this.stadiums = data.map((cls) => Object.assign({}, {
                id: cls.StadiumID,
                name: cls.Name,
                address: cls.Address,
                city: cls.City,
                state: cls.State,
                country: cls.Country,
                capacity: cls.Capacity,
                geoLat: cls.GeoLat,
                geoLong: cls.GeoLong

            }));
        } else if (error) {
            this.error = error;
            console.error('error => ', error);
        }
    }


    @wire(getAllTeams)
    wiredTeams({ error, data }) {
        if (data) {
            this.teams = data.map((cls) => Object.assign({}, {
                label: cls.Name,
                value: cls.Key,
                img: cls.WikipediaLogoUrl,
                conference: cls.Conference,
                division: cls.Division,
                stadiumId: cls.StadiumID,
                primary_color: cls.PrimaryColor,
                secondary_color: cls.SecondaryColor,
                terciary_color: cls.TertiaryColor,

            }));
        } else if (error) {
            this.error = error;
            console.error('error => ', error);
        }
    }

    getTeamByName(ev) {
        this.team = this.teams.find(t => t.value === ev.detail);
        this.getStadiumById(this.team.stadiumId);
        this.setPlayers();
        this.setMapMarkers();
        this.player = '';

    }

    getStadiumById(id) {
        this.stadium = this.stadiums.find(s => s.id === id);
    }

    getPlayerById(ev){
        let id = ev.detail;
        this.player = this.players.find(p => p.id === id);
    }

    setMapMarkers() {
        this.mapmarkers = [
            {
                location: {
                    Latitude: this.stadium.geoLat,
                    Longitude: this.stadium.geoLong
                }    
            },
        ];
    }

    setPlayers() {
        getPlayersByTeam({ team: this.team.value })
            .then((data) => {
                this.players = data.map((cls) => Object.assign({}, {
                    id: cls.PlayerID,
                    positionC: cls.PositionCategory,
                    position: cls.Position,
                    title: cls.FirstName + ' ' + cls.LastName,
                    firstName: cls.FirstName,
                    status: cls.Status,
                    lastName: cls.LastName,
                    height: cls.Height,
                    weight: cls.Weight,
                    bithDate: cls.BirthDate,
                    birthCity: cls.BirthCity,
                    birthState: cls.BirthState,
                    birthCountry: cls.BirthCountry,
                    highSchool: cls.HighSchool,
                    college: cls.College,
                    salary: cls.Salary,
                    photoUrl: cls.PhotoUrl,
                    experience: cls.Experience,
                    yahooId: cls.YahooPlayerID,
                    draftKingsName: cls.DraftKingsName,
                    yahooName: cls.YahooName

                }));
            })
            .catch((error) => {
                this.error = error;
                console.error('error => ', error);
            });


    }

    get borderTeam(){
        if(this.team != null){
            return `border:3px ridge #${this.team.secondary_color}` 
        }
       return '';
    }




}
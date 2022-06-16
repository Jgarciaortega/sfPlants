public with sharing class DataNbaApi {
    
    static final String KEY = 'ebaac09cc9a64f3f942c06b37ae7fc19';
    @AuraEnabled(cacheable=true)
    public static List<Team> GetTeams() {
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:API_NBA/v3/nba/scores/json/teams?key=' + KEY);
        req.setMethod('GET');

        system.debug('ENDPOING -> ' + req.getEndpoint());
        Http http = new Http();
        HTTPResponse res = http.send(req);
        String body = res.getBody();

        List<Team>  teams = (List<Team> )JSON.deserialize(body, List<Team>.class);
        system.debug('BEFORE SORT...');
        for(Team p : teams){
            system.debug(p.Name);
        }
        
        teams.sort();
        system.debug('AFTER SORT...');
        for(Team p : teams){
            system.debug(p.Name);
        }
        return teams;
    }

    public static List<Player> GetPlayersByTeam(String team){

        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:API_NBA/v3/nba/scores/json/Players/' + team + '?key=' + KEY);
        req.setMethod('GET');

        system.debug('ENDPOING -> ' + req.getEndpoint());
        Http http = new Http();
        HTTPResponse res = http.send(req);
        String body = res.getBody();

        List<Player> players = (List<Player>)JSON.deserialize(body, List<Player>.class);

        return players;
    }

    public class Player{
        @auraEnabled
        public String SportsDataID;
        @auraEnabled
        public Integer PlayerID;
        @auraEnabled
        public String Status;
        @auraEnabled
        public Integer TeamID;
        @auraEnabled
        public String Team;
        @auraEnabled
        public String PositionCategory;
        @auraEnabled
        public String Position;
        @auraEnabled
        public String FirstName;
        @auraEnabled
        public String LastName;
        @auraEnabled
        public Integer Height;
        @auraEnabled
        public Integer Weight;
        @auraEnabled
        public String BirthDate;
        @auraEnabled
        public String BirthCity;
        @auraEnabled
        public String BirthState; 
        @auraEnabled
        public String BirthCountry;
        @auraEnabled
        public String HighSchool; 
        @auraEnabled
        public String College;
        @auraEnabled
        public Integer Salary;
        @auraEnabled
        public String PhotoUrl;
        @auraEnabled
        public Integer Experience;
        @auraEnabled
        public Integer YahooPlayerID;
        @auraEnabled
        public String FanDuelName;
        @auraEnabled
        public String DraftKingsName;
        @auraEnabled
        public String YahooName;
        @auraEnabled
        public Integer GlobalTeamID;

    }


    public class Team implements Comparable{

        @auraEnabled
        public Integer TeamID;
        @auraEnabled
        public String Key;
        @auraEnabled
        public String City;
        @auraEnabled
        public String Name;
        @auraEnabled
        public Integer StadiumID;
        @auraEnabled
        public String Conference;
        @auraEnabled
        public String Division;
        @auraEnabled
        public String PrimaryColor;
        @auraEnabled
        public String SecondaryColor;
        @auraEnabled
        public String TertiaryColor;
        @auraEnabled
        public String QuaternaryColor;
        @auraEnabled
        public String WikipediaLogoUrl;
        @auraEnabled
        public String WikipediaWordMarkUrl;
        @auraEnabled
        public String GlobalTeamID;
        @auraEnabled
        public String NbaDotComTeamID;


        public Integer compareTo(Object compareTo){
           return Name.compareTo(((Team)compareTo).Name);
        }

    }

}




public with sharing class DataNbaApi {

    static final String KEY = 'ebaac09cc9a64f3f942c06b37ae7fc19';
    
    public static Team GetTeams() {
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:API_NBA/v3/nba/scores/json/teams?key=' + KEY);
        req.setMethod('GET');

        system.debug('ENDPOING -> ' + req.getEndpoint());
        Http http = new Http();
        HTTPResponse res = http.send(req);
        String body = res.getBody();

        Team team = (Team)JSON.deserialize(body, Team.class);
        return team;
    }

    public class Team {

        public Integer TeamID;
        public String Key;
        public String City;
        public String Name;
        public Integer StadiumID;
        public String Conference;
        public String Division;
        public String PrimaryColor;
        public String SecondaryColor;
        public String TertiaryColor;
        public String QuaternaryColor;
        public String WikipediaLogoUrl;
        public String WikipediaWordMarkUrl;
        public String GlobalTeamID;
        public String NbaDotComTeamID;
    }
}




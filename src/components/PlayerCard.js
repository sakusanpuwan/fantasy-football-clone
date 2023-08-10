import './PlayerCard.css';
import teamData from '../data/teamData';

const PlayerCard = ({player}) => {

    const getPosition = (elementType) => {
        switch (elementType) {
            case 1:
                return "Goalkeeper";
            case 2:
                return "Defender";
            case 3:
                return "Midfielder";
            case 4:
                return "Forward"
        }
    }

    const getTeamName = (team) => {
        const teamObject = teamData.teamFPLData.find((item) => item.id === team);
        return teamObject.name;
    }



    return (
        <div className="player-card">
            <img src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${player.code}.png`}></img>
            <div className="player-card-text">
                <h1>{`${player.first_name} ${player.second_name}`}</h1>
                <div className='player-card-info'>
                    <div className="player-card-details">
                        <h2>{getPosition(player.element_type)}</h2>
                        <h2>{getTeamName(player.team)}</h2>
                    </div>
                    <div className="player-card-stats">
                        <div className='player-card-stats1'>
                            <h3>⚽ {player.goals_scored}</h3>
                            <h3>🅰️ {player.assists}</h3>
                            <h3>🧤 {player.clean_sheets}</h3>
                            <h3>🟨 {player.yellow_cards} 🟥{player.red_cards}</h3>
                        </div>
                        <div className='player-card-stats2'>
                            <h3>🧠 {player.influence} </h3>
                            <h3>🎨 {player.creativity}</h3>
                            <h3>🔥 {player.threat}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard;
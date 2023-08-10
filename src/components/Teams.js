
import { Card, Image, StyledCardBody, StyledCardHeader } from '@nextui-org/react';
import teamData from '../data/teamData';
import './Teams.css'
import { CardHeader } from '@nextui-org/card';


const Teams = () => {
    return(
        <div>
            <h1>Teams</h1>
            {console.log(teamData.teamOverviewData.standings[0].table)}

            <div className='teams-cards-container'>
            {teamData.teamOverviewData.standings[0].table.map((team) => {
                return (
                        
                    <Card className="team-card">
                        <StyledCardHeader className="team-card-header">
                            <p className="text-tiny uppercase font-bold">{`${team.position}. ${team.team.shortName}`}</p>
                            <h4 className="font-bold text-large">{team.points} points</h4>
                            <small className="text-default-500">{`${team.won}W ${team.draw}D ${team.lost}L`}</small>
                            <small className="text-default-500">{`${team.goalsFor}+ ${team.goalsAgainst}- ${team.goalDifference}+-`}</small>
                        </StyledCardHeader>
                        <StyledCardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={team.team.crest}
                            width={270}
                        />
                        </StyledCardBody>
                    </Card>
                )
            })}
            </div>

        </div>
    )
}

export default Teams;
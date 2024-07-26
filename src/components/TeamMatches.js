import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import './TeamMatches.css';

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/';

const TeamMatches = () => {
  const { id } = useParams();
  const [teamData, setTeamData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${teamMatchesApiUrl}${id}`)
      .then(response => response.json())
      .then(data => {
        setTeamData(data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="team-matches-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img src={teamData.team_banner_url} alt="team banner" className="team-banner" />
          <h2 className="latest-match-title">Latest Match</h2>
          <div className="latest-match">
            <p className="match-detail">
              <span>Date:</span> {teamData.latest_match_details.date}
            </p>
            <p className="match-detail">
              <span>Venue:</span> {teamData.latest_match_details.venue}
            </p>
            <p className="match-detail">
              <span>Result:</span> {teamData.latest_match_details.result}
            </p>
            <div className="competing-team">
              <img src={teamData.latest_match_details.competing_team_logo} alt="competing team logo" />
              <p>{teamData.latest_match_details.competing_team}</p>
            </div>
          </div>
          <h2 className="recent-matches-title">Recent Matches</h2>
          <div className="recent-matches">
            {teamData.recent_matches.map(match => (
              <div key={match.id} className="recent-match-card">
                <p className="match-detail">
                  <span>Competing Team:</span> {match.competing_team}
                </p>
                <p className="match-detail">
                  <span>Result:</span> {match.result}
                </p>
                <p className="match-detail">
                  <span>Date:</span> {match.date}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TeamMatches;

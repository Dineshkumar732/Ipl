import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import './Home.css';

const teamsApiUrl = 'https://apis.ccbp.in/ipl';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(teamsApiUrl)
      .then(response => response.json())
      .then(data => {
        setTeams(data.teams);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">IPL Dashboard</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="teams-list">
          {teams.map(team => (
            <Link to={`/team-matches/${team.id}`} key={team.id} className="team-card">
              <img src={team.team_image_url} alt={`${team.name}`} className="team-logo" />
              <p className="team-name">{team.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

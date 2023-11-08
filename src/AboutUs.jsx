import React, { useState } from "react";
import Team from "./components/Team";
import "./aboutus.css";
import PP1 from '../src/assets/pp1.jpg';
import PP2 from '../src/assets/pp2.jpg';
import PP3 from '../src/assets/pp3.jpg';
import PP4 from '../src/assets/pp4.png';
import { useLoaderData } from "react-router-dom";

const AboutUs = () => {
const {aboutusData,teamsData}=useLoaderData();
console.log(aboutusData);
console.log(teamsData);

  const names=['Jihad Abdulghani', 'Nancy Rahhal','Hassan Mourtada', 'Member Name'];
  const teamInfo=[
    {image: PP1, name: names[0]}, 
    {image: PP2, name: names[1]},
    {image: PP3, name: names[2]},
    {image: PP4, name: names[3]}];
  
  const teamsPerPage=2;
  const totalTeams=teamsData.length;

  const [currentPage,setCurrentPage]=useState(0);

  const startTeam= currentPage*teamsPerPage;
  const endTeam= startTeam+teamsPerPage;
  const visibleTeams=teamsData.slice(startTeam,endTeam);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % (totalTeams / teamsPerPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalTeams / teamsPerPage) % (totalTeams / teamsPerPage));
  };


  return (
    <>
      <section className="body-section">
        <div className="image-section">
          <img className="aboutus-image" src={`http://localhost:4000/${aboutusData.image}`}></img>
        </div>
        <div className="story-section">
          <div className="title">
            <h1>
              Our <span className="red">Story</span>
            </h1>
          </div>
          <div className="story-description">
            <p>
              {`${aboutusData.story}`}
            </p>
          </div>
        </div>

        <div className="mission-section">
          <div className="title">
            <h1>
              Our <span className="red">Mission</span>
            </h1>
          </div>
          <div className="mission-description">
            <p>
              {`${aboutusData.mission}`}
            </p>
          </div>
        </div>

        <div className="vision-section">
          <div className="title">
            <h1>
              Our <span className="red">Vision</span>
            </h1>
          </div>
          <div className="vision-description">
            
            <p>{aboutusData.vision}</p>
          </div>
        </div>

        <div className="team-section">
          <div className="title">
            <h1>
              Meet Our <span className="red">Team</span>
            </h1>
          </div>
          <div className="teams-container">
          <div className="teams">
    
          {visibleTeams.map((teamsData,index) => (
                <Team key={teamsData.id} image={teamsData.image} name={teamsData.name} title={teamsData.title} />
              ))}
          </div>
          <div className="carousel-buttons">
            <button className='previous-button' onClick={handlePrevPage}>Previous</button>
            <button className='next-button' onClick={handleNextPage}>Next</button>
          </div>
          </div>
        </div>

      </section>
    
    </>
  );
};

export default AboutUs;

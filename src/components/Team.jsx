import React from 'react'

import './team.css'

const Team = (props) => {
  const  teamInfo=props


  return (
    
      <div className='team-member'>
        <div className='team-card'>
      <img src={teamInfo.image} className='profile-picture' alt="profile picture"></img>
      <p className='member-name'>{teamInfo.name}</p>
      <p className='member-position'>Founder</p>
      </div>
      </div>
      
   
  )
}

export default Team

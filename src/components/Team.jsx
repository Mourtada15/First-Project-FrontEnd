import React from 'react'

import './team.css'

const Team = (props) => {
  const  teamsData=props


  

  return (
    
      <div className='team-member'>
        <div className='team-card'>
      <img src={`http://localhost:4000/${teamsData.image}`} className='profile-picture' alt="profile picture"></img>
      <p className='member-name'>{teamsData.name}</p>
      <p className='member-position'>{teamsData.title}</p>
      </div>
      </div>
      
   
  )
}

export default Team

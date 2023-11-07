import React from 'react'

import './team.css'

const Team = (props) => {
  const {image}=props


  return (
    
      <div className='team-member'>
        <div className='team-card'>
      <img src={image} className='profile-picture' alt="profile picture"></img>
      <p className='member-name'> Member Name</p>
      <p className='member-position'>Founder</p>
      </div>
      </div>
      
   
  )
}

export default Team

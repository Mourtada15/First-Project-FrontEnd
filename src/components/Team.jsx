import React from 'react'
import PP1 from '../assets/pp1.jpg'
import './team.css'

const Team = () => {
  return (
      <div className='team-member'>
        <div className='team-card'>
      <img src={PP1} className='profile-picture' alt="profile picture"></img>
      <p className='member-name'> Member Name</p>
      <p className='member-position'>Founder</p>
      </div>
      </div>
   
  )
}

export default Team

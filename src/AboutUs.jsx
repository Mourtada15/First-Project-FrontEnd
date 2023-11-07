import React, { useState } from "react";
import Team from "./components/Team";
import AboutUsImage from "./assets/aboutus.png";
import "./aboutus.css";
import PP1 from '../src/assets/pp1.jpg';
import PP2 from '../src/assets/pp2.jpg';
import PP3 from '../src/assets/pp3.jpg';
import PP4 from '../src/assets/pp4.png';

const AboutUs = () => {
  const names=['Jihad Abdulghani', 'Nancy Rahhal','Hassan Mourtada', 'Member Name'];
  const teamInfo=[
    {image: PP1, name: names[0]}, 
    {image: PP2, name: names[1]},
    {image: PP3, name: names[2]},
    {image: PP4, name: names[3]}];
  
  const teamsPerPage=2;
  const totalTeams=teamInfo.length;

  const [currentPage,setCurrentPage]=useState(0);

  const startTeam= currentPage*teamsPerPage;
  const endTeam= startTeam+teamsPerPage;
  const visibleTeams=teamInfo.slice(startTeam,endTeam);

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
          <img className="aboutus-image" src={AboutUsImage}></img>
        </div>
        <div className="story-section">
          <div className="title">
            <h1>
              Our <span className="red">Story</span>
            </h1>
          </div>
          <div className="story-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              error minima pariatur obcaecati illum dolorum cumque cum est
              voluptate unde repudiandae voluptatem necessitatibus id accusamus,
              illo itaque ea. Minima, est. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolorem harum facere amet veniam
              quasi illo cumque, consequatur unde ut tempore at nostrum dolor
              voluptatum assumenda deserunt ab corrupti veritatis molestiae!Lorem 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, mi
              nus voluptate quidem quia enim odio optio facilis asperiores repudi
              andae fugit aliquam. Saepe nemo illum fuga explicabo earum recusandae
              , dignissimos voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qua
              si unde omnis nulla doloremque rem, iste assumenda exercitationem. Vel
              it alias fugiat ratione sequi iste laudantium laborum illum accusanti
              um hic numquam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              error minima pariatur obcaecati illum dolorum cumque cum est
              voluptate unde repudiandae voluptatem necessitatibus id accusamus,
              illo itaque ea. Minima, est. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolorem harum facere amet veniam
              quasi illo cumque, consequatur unde ut tempore at nostrum dolor
              voluptatum assumenda deserunt ab corrupti veritatis molestiae!L
              orem Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Autem, minus voluptate quidem quia enim odio optio facilis asperi
              ores repudiandae fugit aliquam. Saepe nemo illum fuga explicabo e
              arum recusandae, dignissimos voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam q
              uasi unde omnis nulla doloremque rem, iste assumenda exercitatione
              m. Velit alias fugiat ratione sequi iste laudantium laborum illum a
              ccusantium hic numquam!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              error minima pariatur obcaecati illum dolorum cumque cum est
              voluptate unde repudiandae voluptatem necessitatibus id accusamus,
              illo itaque ea. Minima, est. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolorem harum facere amet veniam
              quasi illo cumque, consequatur unde ut tempore at nostrum dolor
              voluptatum assumenda deserunt ab corrupti veritatis molestiae!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, minus voluptate quidem quia enim odio optio facilis asperiores repudiandae fugit aliquam. Saepe nemo illum fuga explicabo earum recusandae, dignissimos voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi unde omnis nulla doloremque rem, iste assumenda exercitationem. Velit alias fugiat ratione sequi iste laudantium laborum illum accusantium hic numquam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              error minima pariatur obcaecati illum dolorum cumque cum est
              voluptate unde repudiandae voluptatem necessitatibus id accusamus,
              illo itaque ea. Minima, est. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolorem harum facere amet veniam
              quasi illo cumque, consequatur unde ut tempore at nostrum dolor
              voluptatum assumenda deserunt ab corrupti veritatis molestiae!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, minus voluptate quidem quia enim odio optio facilis asperiores repudiandae fugit aliquam. Saepe nemo illum fuga explicabo earum recusandae, dignissimos voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi unde omnis nulla doloremque rem, iste assumenda exercitationem. Velit alias fugiat ratione sequi iste laudantium laborum illum accusantium hic numquam!
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              error minima pariatur obcaecati illum dolorum cumque cum est
              voluptate unde repudiandae voluptatem necessitatibus id accusamus,
              illo itaque ea. Minima, est. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolorem harum facere amet veniam
              quasi illo cumque, consequatur unde ut tempore at nostrum dolor
              voluptatum assumenda deserunt ab corrupti veritatis molestiae!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, minus voluptate quidem quia enim odio optio facilis asperiores repudiandae fugit aliquam. Saepe nemo illum fuga explicabo earum recusandae, dignissimos voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi unde omnis nulla doloremque rem, iste assumenda exercitationem. Velit alias fugiat ratione sequi iste laudantium laborum illum accusantium hic numquam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              error minima pariatur obcaecati illum dolorum cumque cum est
              voluptate unde repudiandae voluptatem necessitatibus id accusamus,
              illo itaque ea. Minima, est. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolorem harum facere amet veniam
              quasi illo cumque, consequatur unde ut tempore at nostrum dolor
              voluptatum assumenda deserunt ab corrupti veritatis molestiae!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, minus voluptate quidem quia enim odio optio facilis asperiores repudiandae fugit aliquam. Saepe nemo illum fuga explicabo earum recusandae, dignissimos voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi unde omnis nulla doloremque rem, iste assumenda exercitationem. Velit alias fugiat ratione sequi iste laudantium laborum illum accusantium hic numquam!
            </p>
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
    
          {visibleTeams.map((teamInfo,index) => (
                <Team key={index} image={teamInfo.image} name={teamInfo.name} />
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

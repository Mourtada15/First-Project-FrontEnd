import React from "react";
import Navbar from "./components/navbar";
import Team from "./components/Team";
import AboutUsImage from "./assets/aboutus.png";
import "./aboutus.css"
const AboutUs = () => {
  return (
    <>
      <Navbar />
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
              voluptatum assumenda deserunt ab corrupti veritatis molestiae!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, minus voluptate quidem quia enim odio optio facilis asperiores repudiandae fugit aliquam. Saepe nemo illum fuga explicabo earum recusandae, dignissimos voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi unde omnis nulla doloremque rem, iste assumenda exercitationem. Velit alias fugiat ratione sequi iste laudantium laborum illum accusantium hic numquam!
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
          </div>
        </div>

        <div className="team-section">
          <div className="title">
            <h1>
              Meet Our <span className="red">Team</span>
            </h1>
          </div>
          <div className="teams">
            <Team/>
            <Team/>
            <Team/>
            <Team/>
            <Team/>
          </div>
        </div>

      </section>
    </>
  );
};

export default AboutUs;

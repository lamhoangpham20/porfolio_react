import React from "react";
import "./profile.scss";
const Profile = () => {
  return (
    <div className="profile">
      <div className="bio-img"></div>
      <div className="bio-text">
        <div className=" bio-text-image"></div>
        <div className="bio-text-2">
          <h1>Profile</h1>
          <p>
            My name is Lam, I am a Vietnamese developer who currently study and
            work in Oulu, Finland. I came to Oulu in 2018, and then I spent 4
            years studying Information Technology. My main profession is web
            development; we also learned software design, databases, Iot,
            Information Security. I just graduated and finished my Bachelor's
            degree in June,2022 with GPA of 4.63.
          </p>
          <p>
            My first job is an intership as a web developer at Smilee.io. I have
            assigned to build and manage a retailing web application with
            support from my CTO Jesse. We developed a e-commerce application for
            selling used cars with Nextjs and RestAPI and firebase as the
            backend side. My job at that time was to co-operate with the
            customer team in designing, developing application function, working
            on deployment and CI/CD with Docker and Google Cloud Services. The
            application is demonstrated to customer and still in development
            process. I have worked there 1 year and left at the end of 2022.
          </p>
          <p>
            Then I worked at Nome Oy as thesis worker. I worked there as a
            software developer in IoT field. My main tasks was to build an
            application to manage sensor data, analysis and conducting report
            based on analytic results. In this project, I had chances to learn
            new things about IoT, MQTT and data storage. The project took over 2
            months and I got my thesis approved by the university's supevisor.
          </p>
          <p>
            Right now, as a graduated student, I am actively looking for a job
            as a junior web developer across Finland or Europe and doing some
            personal project at the same time. If you are interested in my
            experience and skills through this porfolio, you can contact me for
            work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

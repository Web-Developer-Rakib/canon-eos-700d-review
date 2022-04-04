import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h1>
        More about <span className="title-color">Canon EOS 700D</span>
      </h1>
      <div className="details">
        <div className="overview">
          <h3 className="details-title">Overview</h3>
          <br />
          <p>
            First introduced in June 2013 , Canon EOS 700D is a 18.0MP
            Entry-Level DSLR camera with a APS-C (22.3 x 14.9 mm ) sized CMOS
            sensor, Fully articulated touch screen and Canon EF/EF-S lens mount.
            700D is also sold as EOS Rebel T5i in some countries. Canon replaced
            the older Canon 650D with this model and later 700D was replaced
            with Canon 750D.
          </p>
        </div>
        <div className="main-features">
          <h3 className="details-title">Main features</h3> <br />
          <ul>
            <li>18MP - APS-C CMOS Sensor</li>
            <li>ISO 100 - 12800</li>
            <li>3.00" Fully Articulated Screen</li>
            <li>Optical (pentamirror) viewfinder</li>
            <li>5.0fps continuous shooting</li>
            <li>580g. 133 x 100 x 79 mm</li>
            <li>Also known as EOS Rebel T5i</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

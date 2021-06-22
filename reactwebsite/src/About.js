import React from "react";
import web from "../src/images/lrn.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="
        Keep yourself ahead. Enroll in our courses"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
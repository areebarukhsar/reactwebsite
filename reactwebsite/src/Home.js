import React from "react";
import web from "../src/images/lrn.png";

import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Join the world of learners"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjThree } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;

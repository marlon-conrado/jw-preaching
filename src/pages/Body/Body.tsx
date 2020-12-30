import React from "react";
import { Route } from "react-router-dom";
import Revisits from "../Revisits/Revisits";
import BodyContainer from "./Styles";

const Body = () => (
  <BodyContainer>
    <Route exact path="/revisitas" component={Revisits} />
  </BodyContainer>
);
export default Body;

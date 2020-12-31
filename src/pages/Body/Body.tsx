import React from "react";
import { Route } from "react-router-dom";
import Revisits from "../Revisits/Revisits";
import Revisit from "../Revisit/Revisit";

import BodyContainer from "./Styles";

const Body = () => (
  <BodyContainer>
    <div style={{ marginTop: "80px", marginBottom: "20px" }}>
      <Route exact path="/revisitas" component={Revisits} />
      <Route exact path="/revisita/agregar" component={Revisit} />
    </div>
  </BodyContainer>
);

export default Body;

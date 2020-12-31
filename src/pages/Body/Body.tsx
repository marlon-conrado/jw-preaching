import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import BodyContainer from "./Styles";

const Revisits = lazy(() => import("pages/Revisits/Revisits"));
const Revisit = lazy(() => import("pages/Revisit/Revisit"));

const Body = () => (
  <BodyContainer>
    <Suspense fallback={<p>Loading</p>}>
      <div style={{ marginTop: "80px", marginBottom: "20px" }}>
        <Route exact path="/revisitas" component={Revisits} />
        <Route exact path="/revisita/agregar" component={Revisit} />
      </div>
    </Suspense>
  </BodyContainer>
);

export default Body;

import React from "react";
import RevisitForm from "../../components/RevisitForm/RevisitForm";
import { RevisitContainer } from "./Styles";

export interface RevisitFormProps {
  onAddRevisit: any;
}

const Revisit = () => (
  <>
    <RevisitContainer>
      <RevisitForm onAddRevisit={() => {}} />
    </RevisitContainer>
  </>
);

export default Revisit;

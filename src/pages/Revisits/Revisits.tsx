import React, { useState } from "react";
import NoRevisits from "./NotRevisits";
import RevisitForm from "./RevisitForm";

interface Revisit {
  name: string;
}

const initialRevisitListState: Revisit[] = [];

const Revisits = () => {
  const [revisitList, addRevisit] = useState(initialRevisitListState);

  const onAddRevisit = () => {
    const newRevisitList = [...revisitList];
    newRevisitList.push({ name: "Nilba Torres" });
    addRevisit(newRevisitList);
  };

  if (!revisitList.length) {
    return <NoRevisits />;
  }

  return (
    <>
      <RevisitForm onAddRevisit={onAddRevisit} />
      <ul>
        {revisitList.map((revisitItem) => (
          <li key={revisitItem.name}>
            <p>{revisitItem.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Revisits;

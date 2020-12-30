import React from "react";

export interface Props {
  onAddRevisit: any;
}

const RevisitForm = ({ onAddRevisit }: Props) => (
  <>
    <form onSubmit={onAddRevisit}>
      <label htmlFor="name">
        Nombre
        <input type="text" id="name" />
      </label>

      <button type="submit">Guardar</button>
    </form>
  </>
);
export default RevisitForm;

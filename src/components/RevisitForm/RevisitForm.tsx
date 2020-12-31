import React from "react";
import { useForm } from "react-hook-form";
import Button from "components/Button/Button";

import {
  RevisitFormContainer,
  RevisitFormInputContainer,
  RevisitFormRow,
  RevisitFormTextAreaContainer
} from "./Styles";

export interface RevisitFormProps {
  onAddRevisit: any;
}

const RevisitForm = ({ onAddRevisit }: RevisitFormProps) => {
  const { register } = useForm();

  return (
    <div>
      <RevisitFormContainer onSubmit={onAddRevisit}>
        <RevisitFormRow>
          <RevisitFormInputContainer>
            <label htmlFor="name">
              <p>Nombre</p>
              <input type="text" id="name" ref={register} />
            </label>
          </RevisitFormInputContainer>
        </RevisitFormRow>

        <RevisitFormRow>
          <RevisitFormInputContainer>
            <label htmlFor="phone">
              <p>Teléfono</p>
              <input type="text" id="phone" ref={register} />
            </label>
          </RevisitFormInputContainer>
        </RevisitFormRow>

        <RevisitFormRow>
          <RevisitFormInputContainer>
            <label htmlFor="adress">
              <p>Dirección</p>
              <input type="text" id="adress" ref={register} />
            </label>
          </RevisitFormInputContainer>
        </RevisitFormRow>

        <RevisitFormRow>
          <RevisitFormTextAreaContainer>
            <label htmlFor="discussed_topic">
              <p>Tema conversado</p>
              <textarea id="discussed_topic" ref={register} />
            </label>
          </RevisitFormTextAreaContainer>
        </RevisitFormRow>

        <RevisitFormRow>
          <RevisitFormTextAreaContainer>
            <label htmlFor="pending_topic">
              <p>Tema pendiente</p>
              <textarea id="pending_topic" ref={register} />
            </label>
          </RevisitFormTextAreaContainer>
        </RevisitFormRow>

        <RevisitFormRow>
          <Button>Guardar</Button>
        </RevisitFormRow>
      </RevisitFormContainer>
    </div>
  );
};

export default RevisitForm;

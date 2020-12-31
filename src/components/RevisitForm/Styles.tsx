import styled from "styled-components";

export const RevisitFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: #f4f1f1;
  align-items: center;
  padding: 50px;
  border-radius: 4px;
`;

export const RevisitFormRow = styled.div`
  width: 100%;
  position: relative;
  margin: 10px 0px;
`;

export const RevisitFormInputContainer = styled.div`
  label {
    color: #5a5a5a;
    font-weight: 500;
    p {
      margin-bottom: 10px;
    }
  }

  input {
    width: 100%;
    margin: 0;
    padding: 0 10px;
    height: 35px;
    border: none;
    border-radius: 4px;
  }
`;

export const RevisitFormTextAreaContainer = styled.div`
  label {
    color: #5a5a5a;
    font-weight: 500;
    p {
      margin-bottom: 10px;
    }
  }

  textarea {
    width: 100%;
    margin: 0;
    padding: 0 10px;
    height: 55px;
    border: none;
    border-radius: 4px;
    resize: none;
  }
`;

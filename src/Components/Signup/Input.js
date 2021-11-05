import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none !important;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;
const Status = styled.div``;

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <Container>
      <StyledInput
        value={value && value}
        onChange={onChange && onChange}
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
      />
      <Status />
    </Container>
  );
};

export default Input;

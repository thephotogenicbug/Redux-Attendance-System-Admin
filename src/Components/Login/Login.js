import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { login } from "../../actions/adminActions";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  min-width: 400px;
  backdrop-filter: blue(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #7ded89;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Login = () => {
  const [email, pickEmail] = useState("");
  const [password, pickPassword] = useState("");
  const [confirmpassword, pickConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, error, adminInfo } = adminLogin;

  const history = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Password does not match");
    }
    dispatch(login(email, password));
  };

  return (
    <Wrapper>
      <Form>
        <Input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => pickEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => pickPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => pickConfirmPassword(e.target.value)}
        />
        <button onClick={SubmitHandler}>Login</button>
      </Form>
    </Wrapper>
  );
};

export default Login;

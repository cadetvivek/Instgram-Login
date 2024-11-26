import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fafafa;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  padding: 10px 0;
  width: 350px;
`;

const InstagramLogo = styled.img`
  width: 175px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 75%;
  padding: 9px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin-bottom: 6px;
  font-size: 12px;
`;

const LoginButton = styled.button`
  width: 75%;
  background-color: #0095f6;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 5px 0;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
`;



const CreateAccount = styled.a`
  color: #0095f6;
  font-weight: bold;
  font-size: 14px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <InstagramLogo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        <InputField
          type="text"
          placeholder="mobile number"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin}>Log In</LoginButton>
        
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;

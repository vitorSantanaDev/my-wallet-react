import React, { useState } from "react";
import * as S from "./styles";
import Logo from "../../assets/images/logo.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useAuth } from "../../hooks/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useAuth();

  return (
    <S.LoginWrapper>
      <S.LogoWrapper>
        <img src={Logo} alt="My wallet" />
        <h3>My wallet</h3>
      </S.LogoWrapper>
      <S.FormWrapper onSubmit={() => signIn(email, password)}>
        <S.FormTitle>Log in</S.FormTitle>
        <Input
          type="email"
          placeholder="Email"
          required
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button type="submit">Access</Button>
      </S.FormWrapper>
    </S.LoginWrapper>
  );
};

export default Login;

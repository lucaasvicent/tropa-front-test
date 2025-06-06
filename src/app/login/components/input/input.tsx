import {
  ContainerInput,
  InputGroup,
  InputForm,
  TitleInput,
  InputPasswordWrapper,
  EyeIcon
} from "./styles";
import { Eye, EyeClosed } from "phosphor-react";
import { useState } from "react";

export default function Input() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <ContainerInput>
      <InputGroup>
        <TitleInput>E-mail</TitleInput>
        <InputForm type="email" placeholder="E-mail" />
      </InputGroup>

      <InputGroup>
        <TitleInput>Senha</TitleInput>
        <InputPasswordWrapper>
          <InputForm
            type={showPassword ? "password" : "text"}
            placeholder="Senha"
          />
          <EyeIcon onClick={togglePassword}>
            {showPassword ? <EyeClosed size={24} color='#CC6237' /> : <Eye size={24} color='#CC6237' />}
          </EyeIcon>
        </InputPasswordWrapper>
      </InputGroup>

      <button type="submit">Entrar</button>
    </ContainerInput>
  );
}

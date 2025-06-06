import {
  ContainerInput,
  InputGroup,
  InputForm,
  TitleInput
} from "./styles";

export default function Input() {
  return (
    <ContainerInput>
      <InputGroup>
        <TitleInput>E-mail</TitleInput>
        <InputForm type="email" placeholder="E-mail" />
      </InputGroup>

      <InputGroup>
        <TitleInput>Senha</TitleInput>
        <InputForm type="password" placeholder="Senha" />
      </InputGroup>

      <button type="submit">Entrar</button>
    </ContainerInput>
  );
}

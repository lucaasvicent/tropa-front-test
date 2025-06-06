import styled from "styled-components";

export const ContainerInput = styled.form`
  display: flex;
  flex-direction: column;
  width: 18.68rem;
  gap: 1.25rem;

  button {
    width: 18.68rem;
    min-height: 2.5rem;
    background: var(--orange-100);
    border: none;
    border-radius: 99px;
    font-family: Roboto, sans-serif;
    color: var(--white-100);
    cursor: pointer;
    box-sizing: border-box; 
    padding-left: 12px; 
  }

  p {
  color: red;
  font-size: 0.81rem;
  margin: 0;
  padding: 0;
  }
`;


export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px; 
  width: 100%;
  max-height: 90%;
`;

export const TitleInput = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 0.81rem;
  font-weight: 700;
  color: var(--orange-100);
  margin: 0; 
`;

export const InputForm = styled.input`
  width: 100%;
  height: 2.5rem;
  background: var(--white-200);
  border: none;
  border-radius: 99px;
  padding-left: 20px;
  box-sizing: border-box; 

  &::placeholder {
    color: #657593;
  }

  &:focus {
    outline: var(--orange-100) auto 1px;
  }
`;

export const InputPasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 30%;
  transform: translateY(-10%);
  cursor: pointer;
  color: #657593;
`;


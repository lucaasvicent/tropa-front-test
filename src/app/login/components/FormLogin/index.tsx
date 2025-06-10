'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LoginSchema } from "../../schema/schema";
import {
  ContainerInput,
  EyeIcon,
  InputForm,
  InputGroup,
  InputPasswordWrapper,
  TitleInput
} from "./styles";
import { Eye, EyeClosedIcon } from "@phosphor-icons/react";


export default function FormLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const mockedUser = {
    email: "lucasdev08@hotmail.com",
    password: "123456"
  };

  const onSubmit = (data: { email: string; password: string }) => {
    const isValidUser =
      data.email === mockedUser.email &&
      data.password === mockedUser.password;

    if (isValidUser) {
      console.log("Login realizado com sucesso!");
      toast.success('Sucesso!');
      setTimeout(() => {
        router.push("/event");
      }, 2500);
    } else {
      toast.error('Usuário ou senha inválidos');
    }
  };

  return (
    <ContainerInput onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <TitleInput>E-mail</TitleInput>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputForm type="email" placeholder="E-mail" {...field} />
          )}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </InputGroup>

      <InputGroup>
        <TitleInput>Senha</TitleInput>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputPasswordWrapper>
              <InputForm
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                {...field}
              />
              <EyeIcon onClick={togglePassword}>
                {showPassword ? (
                  <Eye size={24} color="#CC6237" />
                ) : (
                  <EyeClosedIcon size={24} color="#CC6237" />
                )}
              </EyeIcon>
            </InputPasswordWrapper>
          )}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </InputGroup>

      <button type="submit">
        Entrar
      </button>
    </ContainerInput>
  );
}


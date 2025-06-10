'use client';
import { WarningCircleIcon } from "@phosphor-icons/react";
import { Card, HomeButton, IconWrapper, Subtitle, Title, Wrapper } from "./styles";

export default function NotFound() {
  return (
    <Wrapper>
      <Card>
        <IconWrapper>
          <WarningCircleIcon size={64} weight="fill" color="#ff4d4f" />
        </IconWrapper>
        <Title>404</Title>
        <Subtitle>Oops! Página não encontrada.</Subtitle>
        <HomeButton href="/event">Voltar para o início</HomeButton>
      </Card>
    </Wrapper>
  );
}
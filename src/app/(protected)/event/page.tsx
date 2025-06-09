"use client";

import EventDashboard from "./components";
import {
  Container,
  EventContainer,
  HeaderContainer,
  TextHeader,
  TitleHeader,
} from "./styles";

export default function EventsScreen() {
  console.log("Event");

  return (
    <Container>
      <HeaderContainer>
        <TextHeader>
          Bem vindo de volta, <span>Kaique Steck</span>
        </TextHeader>
        <TitleHeader>Todos eventos</TitleHeader>
      </HeaderContainer>
      <EventContainer>
        <EventDashboard />
      </EventContainer>
    </Container>
  );
}

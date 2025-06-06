'use client'

import Image from "next/image";
import Link from "next/link";
import { Calendar, SquaresFour, Users, UsersThree } from "phosphor-react";
import { useState } from "react";
import { Container, NavContent, NavItem, NavLeft, NavTitle } from "./styles";
import Logo from '/public/tropa-logo.svg';

export default function TabNavigation() {
  const [selectedItem, setSelectedItem] = useState<string>("event");

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <Container>
      <NavLeft>
        <NavContent>
          <Image src={Logo} alt="Tropa Logo" width={161} height={25} />

          <nav>
            <NavTitle>MENU</NavTitle>
            <NavItem
              selected={selectedItem === "dashboard"}
              onClick={() => handleSelect("dashboard")}
            >
              <SquaresFour size={16} color={selectedItem === "dashboard" ? '#FFFFFF' : '#252525'} />
              <Link href="/dashboard">Dashboard</Link>
            </NavItem>

            <NavItem
              selected={selectedItem === "event"}
              onClick={() => handleSelect("event")}
            >
              <Calendar size={16} color={selectedItem === "event" ? '#FFFFFF' : '#252525'} />
              <Link href="/event">Eventos</Link>
            </NavItem>

            <NavItem
              selected={selectedItem === "equipes"}
              onClick={() => handleSelect("equipes")}
            >
              <UsersThree size={16} color={selectedItem === "equipes" ? '#fff' : '#252525'} />
              <Link href="/squad">Equipes</Link>
            </NavItem>

            <NavItem
              selected={selectedItem === "inscricoes"}
              onClick={() => handleSelect("inscricoes")}
            >
              <Users size={16} color={selectedItem === "inscricoes" ? '#fff' : '#252525'} />
              <Link href="/inscricoes">Inscrições</Link>
            </NavItem>
          </nav>

        </NavContent>
      </NavLeft>
    </Container>
  )
}

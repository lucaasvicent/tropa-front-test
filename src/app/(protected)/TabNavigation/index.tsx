"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Power,
  SquaresFour,
  User,
  Users,
  UsersThree,
} from "phosphor-react";
import { useState } from "react";
import {
  Container,
  FooterNav,
  FunctionText,
  NavContent,
  NavItem,
  NavLeft,
  NavTextFooter,
  NavTitle,
} from "./styles";
import Logo from "/public/tropa-logo.svg";
import Picture from "/public/picture-login.svg";

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
              <SquaresFour
                size={16}
                color={selectedItem === "dashboard" ? "#FFFFFF" : "#252525"}
              />
              <Link href="/dashboard">Dashboard</Link>
            </NavItem>

            <NavItem
              selected={selectedItem === "event"}
              onClick={() => handleSelect("event")}
            >
              <Calendar
                size={16}
                color={selectedItem === "event" ? "#FFFFFF" : "#252525"}
              />
              <Link href="/event">Eventos</Link>
            </NavItem>

            <NavItem
              selected={selectedItem === "equipes"}
              onClick={() => handleSelect("equipes")}
            >
              <UsersThree
                size={16}
                color={selectedItem === "equipes" ? "#fff" : "#252525"}
              />
              <Link href="/squad">Equipes</Link>
            </NavItem>

            <NavItem
              selected={selectedItem === "inscricoes"}
              onClick={() => handleSelect("inscricoes")}
            >
              <Users
                size={16}
                color={selectedItem === "inscricoes" ? "#fff" : "#252525"}
              />
              <Link href="/inscricoes">Inscrições</Link>
            </NavItem>
          </nav>

          <FooterNav>
            <div className="user-info">
              <Image
                src={Picture}
                alt="Foto de perfil"
                width={40}
                height={40}
                className="avatar"
              />
              <div>
                <NavTextFooter>Lucas Vicente</NavTextFooter>
                <FunctionText>Desenvolvedor</FunctionText>
              </div>
            </div>

            <div className="footer-actions">
              <div className="footer-action-item">
                <User size={16} />
                <span>Alterar dados</span>
              </div>
              <div className="footer-action-item">
                <Power size={16} />
                <span>Sair</span>
              </div>
            </div>
          </FooterNav>
        </NavContent>
      </NavLeft>
    </Container>
  );
}

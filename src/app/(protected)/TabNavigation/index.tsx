"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import {
  CalendarIcon,
  PowerIcon,
  SquaresFourIcon,
  UserIcon,
  UsersIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import SidebarSkeleton from "./components/Skeleton";

export default function TabNavigation() {
  const [selectedItem, setSelectedItem] = useState<string>("event");
  const [isLoading, setIsLoading] = useState(true);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <SidebarSkeleton />;

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
              <SquaresFourIcon
                size={20}
                color={selectedItem === "dashboard" ? "#FFFFFF" : "#252525"}
              />
              <Link href="/dashboard">Dashboard</Link>
            </NavItem>

            <NavItem
              selected={selectedItem === "event"}
              onClick={() => handleSelect("event")}
            >
              <CalendarIcon
                size={20}
                color={selectedItem === "event" ? "#FFFFFF" : "#252525"}
              />
              <Link href="/event">Eventos</Link>
            </NavItem>

            <NavItem
              selected={selectedItem === "equipes"}
              onClick={() => handleSelect("equipes")}
            >
              <UsersThreeIcon
                size={20}
                color={selectedItem === "equipes" ? "#fff" : "#252525"}
              />
              <Link href="/teams">Equipes</Link>
            </NavItem>

            <NavItem
              selected={selectedItem === "inscricoes"}
              onClick={() => handleSelect("inscricoes")}
            >
              <UsersIcon
                size={20}
                color={selectedItem === "inscricoes" ? "#fff" : "#252525"}
              />
              <Link href="/registration">Inscrições</Link>
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
                <FunctionText>Administrador</FunctionText>
              </div>
            </div>

            <div className="footer-actions">
              <div className="footer-action-item">
                <UserIcon size={16} />
                <span onClick={() => {
                  setTimeout(() => {
                    window.location.href = "/change-data";
                  }, 1500);
                }}
                  style={{ cursor: "pointer" }}>Alterar dados</span>
              </div>
              <div
                className="footer-action-item"
                onClick={() => {
                  toast.success("Até breve!");
                  setTimeout(() => {
                    window.location.href = "/login";
                  }, 1500);
                }}
                style={{ cursor: "pointer" }}
              >
                <PowerIcon size={16} />
                <span>Sair</span>
              </div>
            </div>
          </FooterNav>
        </NavContent>
      </NavLeft>
    </Container>
  );
}

"use client";

import { useEffect, useState } from "react";
import EventDashboard from "./components";
import {
  Container,
  EventContainer,
  HeaderContainer,
  TextHeader,
  TitleHeader,
  MenuButton,
  Sidebar,
  SidebarOverlay,
  TextModal,
  FunctionTextModal,
  ContainerModal,
  NavContentModal,
  NavItemModal,
} from "./styles";
import Image from "next/image";
import Picture from "/public/picture-login.svg";
import Logo from "/public/tropa-logo.svg";

import Link from "next/link";
import { toast } from "react-toastify";
import { CalendarIcon, ListIcon, PowerIcon, SquaresFourIcon, UserIcon, UsersIcon, UsersThreeIcon, XIcon } from "@phosphor-icons/react";


export default function EventsScreen() {
  const isMobile = useBreakpoint();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function useBreakpoint() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const [selectedItem, setSelectedItem] = useState<string>("event");

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <Container>
      {isMobile && (
        <>
          <MenuButton onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <XIcon size={32} color="var(--black-100)" />
            ) : (
              <ListIcon size={32} color="var(--black-100)" />
            )}
          </MenuButton>

          {isSidebarOpen && (
            <>
              <SidebarOverlay onClick={toggleSidebar} />
              <Sidebar isOpen={isSidebarOpen}>
                <NavContentModal>
                  <Image src={Logo} alt="Tropa Logo" width={161} height={25} />
                  <nav>
                    <NavItemModal
                      selected={selectedItem === "dashboard"}
                      onClick={() => handleSelect("dashboard")}
                    >
                      <SquaresFourIcon
                        size={18}
                        color={selectedItem === "dashboard" ? "#FFFFFF" : "#252525"}
                      />
                      <Link href="/dashboard">Dashboard</Link>
                    </NavItemModal>

                    <NavItemModal
                      selected={selectedItem === "event"}
                      onClick={() => handleSelect("event")}
                    >
                      <CalendarIcon
                        size={18}
                        color={selectedItem === "event" ? "#FFFFFF" : "#252525"}
                      />
                      <Link href="/event">Eventos</Link>
                    </NavItemModal>

                    <NavItemModal
                      selected={selectedItem === "equipes"}
                      onClick={() => handleSelect("equipes")}
                    >
                      <UsersThreeIcon
                        size={18}
                        color={selectedItem === "equipes" ? "#fff" : "#252525"}
                      />
                      <Link href="/teams">Equipes</Link>
                    </NavItemModal>

                    <NavItemModal
                      selected={selectedItem === "inscricoes"}
                      onClick={() => handleSelect("inscricoes")}
                    >
                      <UsersIcon
                        size={18}
                        color={selectedItem === "inscricoes" ? "#fff" : "#252525"}
                      />
                      <Link href="/registration">Inscrições</Link>
                    </NavItemModal>
                  </nav>

                </NavContentModal>
                <ContainerModal>
                  <div className="user-info">
                    <Image
                      src={Picture}
                      alt="Foto de perfil"
                      width={40}
                      height={40}
                      className="avatar"
                    />
                    <div>
                      <TextModal>Lucas Vicente</TextModal>
                      <FunctionTextModal>Administrador</FunctionTextModal>
                    </div>
                  </div>

                  <div className="footer-actions">
                    <div className="footer-action-item">
                      <UserIcon size={16} />
                      <span>Alterar dados</span>
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
                </ContainerModal>
              </Sidebar>
            </>
          )}

        </>
      )}

      <HeaderContainer>
        <TextHeader>
          Bem vindo de volta, <span>Lucas Vicente</span>
        </TextHeader>
        <TitleHeader>Todos eventos</TitleHeader>
      </HeaderContainer>

      <EventContainer>
        <EventDashboard />
      </EventContainer>
    </Container>
  );
}

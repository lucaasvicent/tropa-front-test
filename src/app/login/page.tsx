'use client'

import Image from 'next/image';
import Person from '../../../public/person-login.svg';
import Logo from '../../../public/tropa-logo.svg';
import FormLogin from "./components/FormLogin";
import { Container, ContainerDashboard, ContainerDashboardForm, DashboardContent, PersonImageWrapper, SectionRight, SectionRightContent, TitleDashboard } from "./styles";

export default function Login() {
  return (
    <Container>
      <ContainerDashboard>
        <ContainerDashboardForm>
          <DashboardContent>
            <Image src={Logo} alt="Tropa Logo" width={161} height={25} />

            <TitleDashboard>
              Bem-vindo de volta <br />
              <span>Entre com sua conta para acessar o painel.</span>
            </TitleDashboard>
            <FormLogin />
          </DashboardContent>
        </ContainerDashboardForm>

        <SectionRight>
          <SectionRightContent>
            <PersonImageWrapper>
              <Image src={Person} alt="Person Illustration" width={357} height={315} />
            </PersonImageWrapper>
          </SectionRightContent>
        </SectionRight>
      </ContainerDashboard>
    </Container>
  )
};
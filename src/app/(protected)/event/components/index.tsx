import { Plus } from "phosphor-react";
import { Container, ComponentContent, Header, SearchInput, InsertButton, Table, TableRow, TableHeader, TableCell, StatusDot, Pagination, SearchContainer, SearchIcon } from "./styles";

export default function EventDashboard() {
  return (
    <Container>
      <ComponentContent>
        <Header>
          <SearchContainer>
            <SearchIcon size={16} weight="bold" />
            <SearchInput placeholder="Buscar eventos" />
          </SearchContainer>
          <InsertButton><Plus size={16} weight="bold" /> Inserir novo</InsertButton>
        </Header>


        <Table>
          <thead>
            <TableRow>
              <TableHeader>Nome do evento</TableHeader>
              <TableHeader>Total de equipes</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Data</TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>Clube do Laço Coração Pantaneiro</TableCell>
              <TableCell>10</TableCell>
              <TableCell><StatusDot /> Ativo</TableCell>
              <TableCell>09 a 11 de Junho</TableCell>
              <TableCell>⋮</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Clube do Laço Coração Pantaneiro</TableCell>
              <TableCell>10</TableCell>
              <TableCell><StatusDot /> Ativo</TableCell>
              <TableCell>09 a 11 de Junho</TableCell>
              <TableCell>⋮</TableCell>
            </TableRow>
          </tbody>
        </Table>

        <Pagination>
          <button>Anterior</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button className="active">Próxima</button>
        </Pagination>
      </ComponentContent>
    </Container>
  );
}

import { useEffect, useRef, useState } from "react";
import EventDashboardSkeleton from "./EventDashboardSkeleton";
import {
  ComponentContent,
  Container,
  Header,
  InsertButton,
  ModalButton,
  ModalOptions,
  Pagination,
  SearchContainer,
  SearchIcon,
  SearchInput,
  StatusDot,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "./styles";
import { DotsThreeVerticalIcon, PlusIcon } from "@phosphor-icons/react";
import { toast } from "react-toastify";

interface EventData {
  name: string;
  teams: number;
  status: "Ativo" | "Inativo";
  date: string;
}

const mockData: EventData[] = [
  { name: "Clube do Laço Coração Pantaneiro", teams: 10, status: "Ativo", date: "09 a 11 de Junho" },
  { name: "BGS", teams: 8, status: "Ativo", date: "08 a 11 de Agosto" },
  { name: "ExpoAgro 2025", teams: 12, status: "Ativo", date: "01 a 03 de Agosto" },
  { name: "Corrida da Independência", teams: 6, status: "Inativo", date: "05 de Setembro" },
  { name: "Feira Tecnológica MS", teams: 15, status: "Ativo", date: "10 a 12 de Outubro" },
  { name: "Rodeio de Inverno", teams: 9, status: "Ativo", date: "20 a 22 de Novembro" },
];

const ITEMS_PER_PAGE = 2;

export default function EventDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const filteredData = mockData.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      setCurrentPage(page);
      setModalIndex(null);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        modalRef.current &&
        !modalRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setModalIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) {
    return <EventDashboardSkeleton />;
  }

  return (
    <Container>
      <ComponentContent>
        <Header>
          <SearchContainer>
            <SearchIcon size={16} weight="bold" />
            <SearchInput
              placeholder="Buscar eventos"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchContainer>
          <InsertButton onClick={() => {
            toast.warning("Ops! Ação indisponível");
          }}
            style={{ cursor: "pointer" }}><PlusIcon size={16} weight="bold" /> Inserir novo</InsertButton>
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
            {currentData.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.teams}</TableCell>
                <TableCell>
                  <StatusDot $status={event.status} /> {event.status}
                </TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell style={{ position: "relative" }}>
                  <button
                    ref={buttonRef}
                    onClick={() => setModalIndex(modalIndex === index ? null : index)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <DotsThreeVerticalIcon />
                  </button>
                  {modalIndex === index && (
                    <ModalOptions ref={modalRef}>
                      <ModalButton disabled>Editar</ModalButton>
                      <ModalButton disabled>Excluir</ModalButton>
                    </ModalOptions>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>

        <Pagination>
          {currentPage > 1 && <button onClick={() => handlePageChange(currentPage - 1)}>Anterior</button>}
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < pageCount && <button onClick={() => handlePageChange(currentPage + 1)}>Próxima</button>}
        </Pagination>
      </ComponentContent>
    </Container>
  );
}
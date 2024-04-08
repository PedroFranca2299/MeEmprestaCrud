import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { RestauranteTableType } from "./RestauranteTable.type";

const RestauranteTable = ({
  data,
  onOpen,
  setIdRestaurante,
}: RestauranteTableType) => {
  return (
    <TableContainer maxWidth="700px" m="40px auto">
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Nome do Restaurante</Th>
            <Th isNumeric>Ação</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>
                <Button
                  onClick={() => {
                    onOpen();
                    setIdRestaurante(item.id);
                  }}
                >
                  Editar
                </Button>
              </Td>
              <Td>
                <Button>Deletar</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr></Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default RestauranteTable;

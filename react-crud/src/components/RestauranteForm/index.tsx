import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

const RestauranteForm = () => {
  return (
    <Box maxWidth="700px" m="auto" borderWidth={1} p={4} boxShadow="lg">
      <form encType="multipart/data">
        <Flex alignItems="center" gap="1rem">
          <Input type="text" placeholder="Nome do Restaurante" name="nome" />
          <Button background="teal">Adicionar</Button>
        </Flex>
      </form>
    </Box>
  );
};

export default RestauranteForm;

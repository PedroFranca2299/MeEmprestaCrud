import { Box } from "@chakra-ui/react";
import React from "react";
import RestauranteForm from "../components/RestauranteForm";
import RestauranteTable from "../components/RestauranteTable";

const Restaurante = () => {
  return (
    <Box textAlign="center" margin="30px auto">
      <RestauranteForm />
      <RestauranteTable />
    </Box>
  );
};

export default Restaurante;

import { Box } from "@chakra-ui/react";
import React from "react";
import { ToastContainer } from "react-toastify";
import RestauranteForm from "../components/RestauranteForm";
import RestauranteTable from "../components/RestauranteTable";

const Restaurante = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <Box textAlign="center" margin="30px auto">
      {isLoading ? <div className="loading-lazy"></div> : ""}
      <RestauranteForm setIsLoading={setIsLoading} />
      <RestauranteTable />
      <ToastContainer />
    </Box>
  );
};

export default Restaurante;

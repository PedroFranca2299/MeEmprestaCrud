import { Box, Spinner } from "@chakra-ui/react";
import React from "react";
import { ToastContainer } from "react-toastify";
import { RestauranteType } from "../api";
import { getRestaurantes } from "../api/restaurante";
import RestauranteForm from "../components/RestauranteForm";
import RestauranteTable from "../components/RestauranteTable";

const Restaurante = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGetData, setIsGetData] = React.useState<boolean>(false);
  const [restaurantes, setRestaurantes] = React.useState<RestauranteType[]>([]);

  const handleGetRestaurantes = async () => {
    setIsGetData(true);

    const res = await getRestaurantes();
    if (res.data.status == 200) {
      setRestaurantes(res.data.restaurantes);
      setIsGetData(false);
    }
  };

  React.useEffect(() => {
    handleGetRestaurantes();
  }, []);

  return (
    <Box textAlign="center" margin="30px auto">
      {isLoading ? <div className="loading-lazy"></div> : ""}
      <RestauranteForm
        setIsLoading={setIsLoading}
        handleGetRestaurantes={handleGetRestaurantes}
      />
      {!isGetData ? (
        <RestauranteTable data={restaurantes} />
      ) : (
        <Spinner size="xl" />
      )}

      <ToastContainer />
    </Box>
  );
};

export default Restaurante;

import { Box, Spinner, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { RestauranteType } from "../api";
import { deleteRestaurante, getRestaurantes } from "../api/restaurante";
import RestauranteForm from "../components/RestauranteForm";
import RestauranteModal from "../components/RestauranteModal";
import RestauranteSorteio from "../components/RestauranteSorteio";
import RestauranteTable from "../components/RestauranteTable";

const Restaurante = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGetData, setIsGetData] = React.useState<boolean>(false);
  const [restaurantes, setRestaurantes] = React.useState<RestauranteType[]>([]);
  const [idRestaurante, setIdRestaurante] = React.useState<number | undefined>(
    undefined,
  );

  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleGetRestaurantes = async () => {
    setIsGetData(true);

    const res = await getRestaurantes();
    if (res.data.status == 200) {
      setRestaurantes(res.data.restaurantes);
      setIsGetData(false);
    }
  };

  const handleDeleteRestaurante = async (id: any) => {
    setIsGetData(true);

    const res = await deleteRestaurante(Number(id));
    if (res.data.status == 200) {
      toast.success(res.data.message);
      handleGetRestaurantes();
    }
  };

  React.useEffect(() => {
    handleGetRestaurantes();
  }, []);

  return (
    <Box textAlign="center" margin="30px auto">
      {isLoading ? <div className="loading-lazy"></div> : ""}
      <RestauranteSorteio data={restaurantes} />
      <RestauranteForm
        setIsLoading={setIsLoading}
        handleGetRestaurantes={handleGetRestaurantes}
      />

      <RestauranteModal
        isOpen={isOpen}
        onClose={onClose}
        idRestaurante={idRestaurante}
        handleGetRestaurantes={handleGetRestaurantes}
      />

      {!isGetData ? (
        <RestauranteTable
          data={restaurantes}
          onOpen={onOpen}
          setIdRestaurante={setIdRestaurante}
          handleDeleteRestaurante={handleDeleteRestaurante}
        />
      ) : (
        <Spinner size="xl" />
      )}

      <ToastContainer />
    </Box>
  );
};

export default Restaurante;

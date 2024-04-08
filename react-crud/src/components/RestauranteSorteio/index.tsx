import React, { useState } from "react";
import { Box, Button, Flex, ScaleFade, useDisclosure } from "@chakra-ui/react";
import { RestauranteSorteioType } from "./RestauranteSorteio.type";
import { RestauranteType } from "../../api";

const RestauranteSorteio = ({ data }: RestauranteSorteioType) => {
  const { isOpen, onToggle } = useDisclosure();
  const [restauranteSorteado, setRestauranteSorteado] =
    useState<RestauranteType | null>(null);

  const sortearRestaurante = () => {
    const indiceSorteado = Math.floor(Math.random() * data.length);
    const restauranteSorteado = data[indiceSorteado];
    setRestauranteSorteado(restauranteSorteado);
  };

  const handleClick = () => {
    if (isOpen) {
      onToggle();
    } else {
      sortearRestaurante();
      onToggle();
    }
  };

  return (
    <>
      <Button onClick={handleClick}>Sorteie o destino do almoço!</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Flex alignItems="center" justifyContent="center">
          <Box
            p="40px"
            maxWidth={600}
            color="white"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            {restauranteSorteado
              ? restauranteSorteado.name + "!"
              : "Nenhum restaurante sorteado ainda."}
          </Box>
        </Flex>
      </ScaleFade>
    </>
  );
};

export default RestauranteSorteio;

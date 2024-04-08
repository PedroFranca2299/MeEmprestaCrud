import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createRestaurante } from "../../api/restaurante";
import { FormType, RestauranteFormType } from "./RestauranteForm.type";

const RestauranteForm = ({ setIsLoading }: any) => {
  const [errorMessages, setErrorMessages] = React.useState<any>({
    name: "",
    email: "",
  });

  const { register, handleSubmit, reset } = useForm<FormType>();

  const submit = async (data: any, event: any) => {
    setIsLoading(true);
    let formData = new FormData();
    formData.append("name", data.name);

    const response = await createRestaurante(formData);
    if (response.data.status == 200) {
      setIsLoading(false);
      event.target.reset();
      toast.success(response.data.message);
      setErrorMessages("");
    } else if (response.data.status == 402) {
      setIsLoading(false);
      setErrorMessages(response.data.errorMessages);
    }
  };

  return (
    <Box maxWidth="700px" m="auto" borderWidth={1} p={4} boxShadow="lg">
      <form onSubmit={handleSubmit(submit)} encType="multipart/data">
        <Flex alignItems="center" gap="1rem">
          <Input
            type="text"
            placeholder="Nome do Restaurante"
            {...register("name")}
            name="name"
          />
          <Button background="teal" type="submit">
            Adicionar
          </Button>
        </Flex>
      </form>
      <Text fontSize="md" color="tomato">
        {errorMessages.name}
      </Text>
    </Box>
  );
};

export default RestauranteForm;

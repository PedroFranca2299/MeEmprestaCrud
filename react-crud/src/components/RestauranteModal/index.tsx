import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { RestauranteModalType } from "./RestauranteModal.type";
import { getRestauranteById, updateRestaurante } from "../../api/restaurante";
import { useForm } from "react-hook-form";
import { FormType } from "../RestauranteForm/RestauranteForm.type";
import { toast } from "react-toastify";

const RestauranteModal = ({
  isOpen,
  onClose,
  idRestaurante,
  handleGetRestaurantes,
}: RestauranteModalType) => {
  const { register, handleSubmit, reset } = useForm<FormType>();

  const handleGetRestauranteById = async () => {
    const res = await getRestauranteById(Number(idRestaurante));
    if (res.data.status === 200) {
      reset(res.data.restaurante);
    }
  };

  const submit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);

    const response = await updateRestaurante(Number(idRestaurante), formData);
    if (response.data.status === 200) {
      toast.success(response.data.message);
      onClose();
      handleGetRestaurantes();
    }
  };

  React.useEffect(() => {
    if (idRestaurante != undefined) {
      handleGetRestauranteById();
    }
  }, [idRestaurante]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(submit)}>
            <ModalHeader>Atualizar Restaurante</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nome do Restaurante</FormLabel>
                <Input
                  placeholder="Nome do Restaurante"
                  {...register("name")}
                  name="name"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RestauranteModal;

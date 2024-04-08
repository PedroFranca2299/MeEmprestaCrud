import { Dispatch, SetStateAction } from "react";
import { RestauranteType } from "../../api";

export type RestauranteTableType = {
  data: RestauranteType[];
  onOpen: () => void;
  setIdRestaurante: Dispatch<SetStateAction<number | undefined>>;
  handleDeleteRestaurante: (id: any) => void;
};

export type RestauranteModalType = {
  isOpen: boolean;
  onClose: () => void;
  idRestaurante: number | undefined;
  handleGetRestaurantes: () => void;
};

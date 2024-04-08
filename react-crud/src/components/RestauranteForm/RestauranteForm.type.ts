import React from "react";

export type FormType = {
  name: string;
};

export type RestauranteFormType = {
  handleGetRestaurantes: () => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

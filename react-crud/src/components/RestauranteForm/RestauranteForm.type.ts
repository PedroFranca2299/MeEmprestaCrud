import React from "react";

export type FormType = {
  name: string;
};

export type RestauranteFormType = {
  handleGetStudents: () => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

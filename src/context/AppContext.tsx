import React, { FC, useEffect, useMemo, useState } from "react";

export type ContextTypes = {
  numArray: number[];
  setNumArray: React.Dispatch<React.SetStateAction<number[]>>;
  addItem: () => void;
  selectedNumber: number;
  setSelectedNumber: React.Dispatch<React.SetStateAction<number>>;
  sortCards: () => void;
};

type ContextProvierProps = {
  children: React.ReactNode;
};

export const Context = React.createContext<ContextTypes | null>(null);
export const ContextProvider: FC<ContextProvierProps> = ({ children }) => {
  const [numArray, setNumArray] = useState<number[]>(
    JSON.parse(sessionStorage.getItem("numbers") || "[]")
  );
  const [selectedNumber, setSelectedNumber] = useState<number>(0);

  useEffect(() => {
    const removedArray = numArray?.filter((item) => item !== selectedNumber);
    setNumArray(removedArray);
    sessionStorage.setItem("numbers", JSON.stringify(removedArray));
  }, [selectedNumber]);

  const addItem = () => {
    const newNumber = Math.floor(Math.random() * 1000 + 1);
    setNumArray((prevState) => [...prevState, newNumber]);
  };

  const sortCards = () => {
    const sortedArray = numArray.sort((a, b) => a - b);
    setNumArray(JSON.parse(JSON.stringify(sortedArray)));
  };

  const AppContextValue = useMemo(
    () => ({
      numArray,
      setNumArray,
      addItem,
      sortCards,
      selectedNumber,
      setSelectedNumber,
    }),
    [
      numArray,
      setNumArray,
      addItem,
      sortCards,
      selectedNumber,
      setSelectedNumber,
    ]
  );

  return (
    <Context.Provider value={AppContextValue}>{children}</Context.Provider>
  );
};

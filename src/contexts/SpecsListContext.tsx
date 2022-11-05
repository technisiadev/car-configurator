import React, { createContext, PropsWithChildren, useState } from "react";

export interface SpecsContextInterface {
  name: string;
  color: string;
  interior: string;
  engine: string;
  rims: string;
  signature: string;
  typeOfWheels: string;
  AirSuspension: boolean;
}

export interface ValueInterface {
  specsList: SpecsContextInterface[] | [];
  save(
    value: SpecsContextInterface
  ): void | SpecsContextInterface[] | SpecsContextInterface;
}

const defaultValues: ValueInterface = {
  specsList: [
    {
      name: "Sport",
      color: "White",
      interior: "Leather",
      AirSuspension: true,
      engine: "3.5L",
      rims: "20 inches",
      signature: "fast and furious",
      typeOfWheels: "BBS",
    },
    {
      name: "Prestige",
      color: "White",
      interior: "Leather",
      AirSuspension: true,
      engine: "3.5L",
      rims: "20 inches",
      signature: "fast and furious",
      typeOfWheels: "BBS",
    },
  ],

  save: () => {},
};

export const SpecsCTX = createContext<ValueInterface | null>(null);

const SpecsCTXProvider: React.FC<PropsWithChildren> = (props) => {
  const [specsList, setSpecsList] = useState(defaultValues.specsList);

  const save = (value: SpecsContextInterface) => {
    let idx = specsList.findIndex(
      (each: SpecsContextInterface): boolean => each.name === value.name
    );

    if (idx !== -1) {
      let newList = [...specsList];
      newList[idx] = value;
      setSpecsList(newList);
    } else setSpecsList([...specsList, value]);
  };

  return (
    <SpecsCTX.Provider value={{ specsList, save }}>
      {props.children}
    </SpecsCTX.Provider>
  );
};

export default SpecsCTXProvider;

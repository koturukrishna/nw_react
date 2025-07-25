import { createContext } from "react";

interface BioDataType {
  name: string;
  place: string;
  role?: string;
}

export const BioDataContext = createContext<BioDataType>({
  name: "",
  place: "",
  role: "",
});

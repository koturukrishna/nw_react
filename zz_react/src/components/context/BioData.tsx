import KrishnaContext from "./KrishnaContext";
import type { ReactNode } from "react";
import { BioDataContext } from "./BioDataContext";

const BioData = ({ children }: { children: ReactNode }) => {
  return (
    <BioDataContext.Provider
      value={{ name: "krishna", place: "Delhi", role: "developer" }}
    >
      {children}
    </BioDataContext.Provider>
  );
};

const BioProvider = () => {
  return (
    <BioData>
      <KrishnaContext></KrishnaContext>
    </BioData>
  );
};

export default BioProvider;

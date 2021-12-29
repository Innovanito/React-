import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
  const {addToOrder, remove, removeAll} = useContext(AppStateContext);

  return { addToOrder, remove, removeAll};
}
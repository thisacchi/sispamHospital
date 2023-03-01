import { useContext } from "react";
import SpinnerContext from "../context/SpinnerContext";

const useSpinner = () => useContext(SpinnerContext);

export default useSpinner
import { useContext } from "react";
import { JWTContext } from "../contexts";

export const useAuth = () => useContext(JWTContext);
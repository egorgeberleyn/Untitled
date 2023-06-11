import { useKeycloak } from "@react-keycloak/web";
import { FC, PropsWithChildren } from "react";

const ProtectedRoute: FC<PropsWithChildren> = ({children}) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? children : null;
};

export default ProtectedRoute;

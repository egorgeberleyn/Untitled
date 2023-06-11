import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme.ts";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloakClient from "./keycloak-client.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReactKeycloakProvider authClient={keycloakClient}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </ReactKeycloakProvider>
);

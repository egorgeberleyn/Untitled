import Keycloak from "keycloak-js";
const keycloakClient = new Keycloak({
 url: import.meta.env.VITE_KEYCLOAK_URL,
 realm: import.meta.env.VITE_KEYCLOAK_REALM,
 clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});

export default keycloakClient;
FROM node:18 as keycloakify_jar_builder

COPY ./keycloakify-theme/package.json ./keycloakify-theme/yarn.lock /opt/app/

WORKDIR /opt/app

RUN yarn install --frozen-lockfile

COPY ./keycloakify-theme/ /opt/app/

RUN yarn build-keycloak-theme

FROM quay.io/keycloak/keycloak:21.1 as builder

WORKDIR /opt/keycloak

COPY --from=keycloakify_jar_builder /opt/app/build_keycloak/target/keycloakify-starter-keycloak-theme-4.4.14.jar /opt/keycloak/providers/
RUN /opt/keycloak/bin/kc.sh build


FROM quay.io/keycloak/keycloak:21.1
COPY --from=builder /opt/keycloak/ /opt/keycloak/
ENV KC_HOSTNAME=localhost
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]
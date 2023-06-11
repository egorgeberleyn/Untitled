import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Icon,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuSearch, LuSettings, LuCreditCard, LuLogOut } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useKeycloak } from "@react-keycloak/web";

const HomePage = () => {
  const { keycloak } = useKeycloak();

  return (
    <Box height="calc(100vh - 10px)">
      <Card
        backgroundColor={"noble_black.800"}
        color="white"
        width={"300px"}
        m={"2.5"}
        height={"100%"}
      >
        <CardBody sx={{ p: 0 }}>
          <Stack direction="column" height={"100%"}>
            <Box padding="25px 0 0 20px ">
              <Stack direction="row" alignItems="center">
                <Avatar borderRadius={"20px"} src="avatar.svg" />
                <Box sx={{ ml: 2 }}>
                  <Heading as="h6" size="md" sx={{ mb: 1 }}>
                    Intellisys
                  </Heading>
                  <Text color="stem_green.500" fontSize="12px" fontWeight="500">
                    12 members
                  </Text>
                </Box>
                <Icon
                  as={IoIosArrowDown}
                  ml="auto"
                  mr="20px"
                  color="noble_black.400"
                  fontSize="18px"
                  cursor="pointer"
                />
              </Stack>
            </Box>

            <Divider sx={{ my: 6 }} borderColor="noble_black.600" />

            <Box paddingLeft="25px">
              <Text fontSize="14px" fontWeight={500} color={"noble_black.400"}>
                GENERAL
              </Text>
              <List spacing={7} mt={10}>
                <ListItem>
                  <ListIcon
                    fontSize={"20px"}
                    as={LuSearch}
                    color="noble_black.400"
                    mr={5}
                  />
                  Search
                </ListItem>
                <ListItem>
                  <ListIcon
                    fontSize={"20px"}
                    as={LuCreditCard}
                    color="noble_black.400"
                    mr={5}
                  />
                  Billing
                </ListItem>
              </List>
            </Box>

            <Divider sx={{ my: 6 }} borderColor="noble_black.600" />

            <Box paddingLeft="25px">
              <Text fontSize="14px" fontWeight={500} color={"noble_black.400"}>
                PROJECTS
              </Text>
            </Box>

            {keycloak.authenticated ? (
              <Box mt="auto" p="10px">
                <Stack
                  direction="row"
                  alignItems="center"
                  p="16px"
                  sx={{
                    bg: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)",
                    borderRadius: "16px",
                    boxShadow: "0px 0px 0px #888, 0px -1.5px 0px #D7EDED29",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Avatar borderRadius={"20px"} src="avatar_2.svg">
                    <AvatarBadge
                      boxSize="0.80em"
                      bg="electric_green.600"
                      borderColor="noble_black.700"
                      borderWidth={"4px"}
                    />
                  </Avatar>
                  <Box sx={{ ml: 2 }}>
                    <Heading as="h6" size="sm" sx={{ mb: 1 }}>
                      {keycloak.tokenParsed?.name}
                    </Heading>
                    <Text
                      color="stem_green.500"
                      fontSize="12px"
                      fontWeight="500"
                    >
                      Premium
                    </Text>
                  </Box>

                  <Box ml="auto">
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        border="none"
                        icon={
                          <Icon
                            as={LuSettings}
                            color="noble_black.400"
                            fontSize="22px"
                            cursor="pointer"
                          />
                        }
                        variant="outline"
                      />
                      <MenuList bgColor="noble_black.700">
                        <MenuItem
                          icon={<LuLogOut />}
                          onClick={() => keycloak.logout()}
                          bgColor="noble_black.700"
                          sx={{
                            "&:hover": {
                              bg: "linear-gradient(117.58deg, rgba(182, 240, 156, 0.36) -47.79%, rgba(204, 235, 235, 0) 100%)",
                            },
                          }}
                        >
                          Logout
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                </Stack>
              </Box>
            ) : (
              <Box mt="auto" p="25px">
                <Button onClick={() => keycloak.login()}>
                  <Text fontSize="16px" px={"5px"}>
                    Log In
                  </Text>
                </Button>
              </Box>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default HomePage;

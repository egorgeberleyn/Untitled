import { extendTheme } from "@chakra-ui/react";

const colors = {
  noble_black: {
    900: "#060708",
    800: "#0D0F10",
    700: "#131619",
    600: "#1A1D21",
    500: "#363A3D",
    400: "#686B6E",
    300: "#9B9C9E",
    200: "#CDCECF",
    100: "#E8E9E9",
  },
  day_blue: {
    900: "#0C1132",
    800: "#182364",
    700: "#243497",
    600: "#3045C9",
    500: "#4D62E5",
    400: "#7989EC",
    300: "#A6B0F2",
    200: "#D2D8F9",
    100: "#EBEDFC",
  },
  purple_blue: {
    900: "#180635",
    800: "#300C6A",
    700: "#47129F",
    600: "#5F18D4",
    500: "#7C35F1",
    400: "#9C67F4",
    300: "#BD9AF8",
    200: "#DECCFB",
    100: "#F0E8FD",
  },
  sunglow: {
    900: "#392D0B",
    800: "#715A15",
    700: "#AA8720",
    600: "#E2B42B",
    500: "#FFD147",
    400: "#FFDC75",
    300: "#FFE8A3",
    200: "#FFF3D1",
    100: "#FFFAEA",
  },
  stem_green: {
    900: "#263520",
    800: "#4D6A3F",
    700: "#739F5F",
    600: "#9AD37F",
    500: "#B6F09C",
    400: "#C8F4B4",
    300: "#DBF7CD",
    200: "#EDFBE6",
    100: "#F7FDF4",
  },
  heisenberg_blue: {
    900: "#193037",
    800: "#335F6D",
    700: "#4C8FA4",
    600: "#65BEDA",
    500: "#82DBF7",
    400: "#A1E4F9",
    300: "#C0EDFB",
    200: "#E0F6FD",
    100: "#F1FBFE",
  },
  happy_orange: {
    900: "#391C08",
    600: "#E26F20",
    100: "#FFF2E9",
  },
  electric_green: {
    900: "#122B1D",
    600: "#4AC97E",
    100: "#F3FBF7",
  },
  red_tower: {
    900: "##2F0F0E",
    600: "##D0302F",
    100: "#FBECEC",
  },
};

export const theme = extendTheme({
  styles: {
    global: {     
      body: {
        bg: "noble_black.700",
        color: "white",
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      },
      a: {
        color: "teal.500",
        textDecoration: "inherit",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
  colors,
});

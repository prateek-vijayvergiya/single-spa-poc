import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/navBar";

export default function Root(props) {
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  );
}

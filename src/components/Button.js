import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ children, ...props }) => (
  <ChakraButton {...props}>{children}</ChakraButton>
);

export default Button;

import React from "react";
import { Container, HStack, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Container>
      <HStack as="footer" justify="space-between" py={5} color="gray.500">
        <Text>&copy; {new Date().getFullYear()}</Text>
        <Text>Bálint Berente</Text>
      </HStack>
    </Container>
  );
}

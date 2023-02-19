import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, ButtonGroup, Container, HStack } from "@chakra-ui/react";

import { LinkButton } from "./LinkButton";

export function NavBar() {
  return (
    <Box backgroundColor="white" py={5} w="100%" shadow="sm">
      <Container>
        <HStack justify="space-between">
          <Link href="/">
            <Box h={50} w={50}>
              <Image
                height={50}
                width={50}
                src="/img/icon.png"
                alt="Me"
                style={{ borderRadius: "300px" }}
              />
            </Box>
          </Link>
          <ButtonGroup spacing={5}>
            <LinkButton variant="link" href="/">
              Home
            </LinkButton>
            <LinkButton variant="link" href="/projects">
              Projects
            </LinkButton>
            <LinkButton variant="link" href="/about">
              About
            </LinkButton>
          </ButtonGroup>
        </HStack>
      </Container>
    </Box>
  );
}

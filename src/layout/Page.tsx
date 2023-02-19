import React, { PropsWithChildren } from "react";
import { Container, Heading } from "@chakra-ui/react";
import { PageHead, PageHeadProps } from "@/src/components/PageHead";

interface PageProps extends PropsWithChildren, PageHeadProps {}

export function Page({ title, children, description, keywords }: PageProps) {
  return (
    <Container>
      <PageHead title={title} description={description} keywords={keywords} />
      <main>
        <Heading as="h1">{title}</Heading>
        {children}
      </main>
    </Container>
  );
}

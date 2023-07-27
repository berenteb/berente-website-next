import { Page } from "@/src/layout/Page";
import { Center, Text } from "@chakra-ui/react";
import Image from "next/image";

export function NotFoundPage() {
  return (
    <Page title="Whoa! Something is missing!">
      <Text>Here&apos;s a cat to illustrate this situation:</Text>
      <Center>
        <Image
          src="/img/404.png"
          alt="Even the image is missing for this."
          height={300}
          width={300}
        />
      </Center>
    </Page>
  );
}

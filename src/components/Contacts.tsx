import { Heading, Wrap } from "@chakra-ui/react";
import { LinkButton } from "@/src/components/LinkButton";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contacts() {
  return (
    <>
      <Heading as="h2" size="lg">
        Contact & links
      </Heading>
      <Wrap justify="center">
        <LinkButton
          href="mailto:balint.berente@gmail.com"
          leftIcon={<EmailIcon />}
          colorScheme="theme"
          variant="ghost"
        >
          E-mail
        </LinkButton>
        <LinkButton
          href="tel:+36209459429"
          leftIcon={<PhoneIcon />}
          colorScheme="theme"
          variant="ghost"
        >
          Call
        </LinkButton>
        <LinkButton
          href="https://www.linkedin.com/in/berenteb/"
          leftIcon={<FaLinkedin />}
          colorScheme="theme"
          variant="ghost"
        >
          LinkedIn
        </LinkButton>
        <LinkButton
          href="https://www.github.com/berenteb/"
          leftIcon={<FaGithub />}
          colorScheme="theme"
          variant="ghost"
        >
          GitHub
        </LinkButton>
      </Wrap>
    </>
  );
}

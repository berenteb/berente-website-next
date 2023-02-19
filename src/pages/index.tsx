import { ButtonGroup, Heading, Text, VStack } from "@chakra-ui/react";
import { PhoneIcon, PlusSquareIcon } from "@chakra-ui/icons";

import { Page } from "@/src/layout/Page";
import { LinkButton } from "@/src/components/LinkButton";
import { Projects } from "@/src/content/projects";
import { ProjectListItem } from "@/src/components/ProjectListItem";
import { Project } from "@/src/utils/types";
import { Contacts } from "@/src/components/Contacts";
import { indexDescription, keywords } from "@/src/content/seo";

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <Page
      title="Hi, I'm Bálint Berente 👋"
      description={indexDescription}
      keywords={keywords}
    >
      <Text>{indexDescription}</Text>
      <ButtonGroup>
        <LinkButton href="/about" colorScheme="theme" variant="solid">
          About Me
        </LinkButton>
        <LinkButton
          colorScheme="theme"
          variant="outline"
          leftIcon={<PhoneIcon />}
          href="tel:+36209459429"
        >
          Call
        </LinkButton>
      </ButtonGroup>
      <Heading as="h2" size="lg">
        Projects
      </Heading>
      <Text>
        How about developing useful web applications as a hobby? Let me
        highlight these:
      </Text>
      <VStack spacing={3}>
        {projects.map((proj) => (
          <ProjectListItem project={proj} key={proj.title} />
        ))}
      </VStack>
      <LinkButton
        mt={5}
        colorScheme="theme"
        variant="ghost"
        leftIcon={<PlusSquareIcon />}
        href="/projects"
      >
        More
      </LinkButton>
      <Contacts />
    </Page>
  );
}

export function getStaticProps() {
  return { props: { projects: Projects.splice(0, 4) } };
}

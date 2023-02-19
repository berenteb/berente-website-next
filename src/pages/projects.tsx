import { Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { Page } from "@/src/layout/Page";
import { Projects } from "@/src/content/projects";
import { ProjectListItem } from "@/src/components/ProjectListItem";
import { Project } from "@/src/utils/types";
import { keywords, projectsDescription } from "@/src/content/seo";

interface ProjectsPageProps {
  projects: Project[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <Page
      title="Projects"
      description={projectsDescription}
      keywords={keywords}
    >
      <Text>{projectsDescription}</Text>
      <Text>
        Let it be a home gadget, a web or mobile application - anything!
      </Text>
      <Text>
        I am glad that I could learn so much since the beginnings that nothing
        is impossible anymore.⭐️
      </Text>
      <Text>Some of my favorite projects and solutions I want to mention:</Text>
      <VStack spacing={3}>
        {projects.map((proj) => (
          <ProjectListItem project={proj} key={proj.title} />
        ))}
      </VStack>
      <Text as="i">
        ...and{" "}
        <Link
          style={{ textDecoration: "underline" }}
          href="https://www.github.com/berenteb/"
        >
          many more
        </Link>
        !
      </Text>
    </Page>
  );
}

export function getStaticProps() {
  return { props: { projects: Projects } };
}

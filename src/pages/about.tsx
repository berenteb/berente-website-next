import Image from "next/image";
import { Heading, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";

import { Page } from "@/src/layout/Page";
import { CareerPathSection } from "@/src/components/CareerPathSection";
import theme from "@/src/utils/theme";
import { Contacts } from "@/src/components/Contacts";
import { aboutDescription, keywords } from "@/src/content/seo";

export default function About() {
  return (
    <Page
      title="About Me 🙋🏻‍"
      description={aboutDescription}
      keywords={keywords}
    >
      <Text>{aboutDescription}</Text>
      <Text>
        I am also looking forward to new problems and fields to learn into.
      </Text>
      <Heading as="h2" size="lg">
        Career path
      </Heading>

      <VStack
        w="100%"
        position="relative"
        spacing={10}
        _before={{
          left: "7px",
          top: "10px",
          position: "absolute",
          content: '""',
          height: "100%",
          width: "6px",
          backgroundColor: theme.colors.theme["500"],
          borderRadius: "300px",
        }}
      >
        <CareerPathSection
          from="2020"
          title="BME-VIK Computer Science Engineer BSc"
        />
        <CareerPathSection
          from="July, 2021"
          until="October, 2021"
          title="Freelancer"
          descriptionFields={[
            "Worked in a freelancer team",
            "Smaller full-stack web projects and Ionic project",
          ]}
        />
        <CareerPathSection
          from="September, 2021"
          title="Simonyi Károly College for Advanced Studies, Kir-Dev web development team"
          descriptionFields={[
            "Team leader since September, 2022",
            "Project management",
            "Industrial connections",
            "Recruiting new members",
            "Teaching ReactJS",
            "Mentoring newbies",
          ]}
        />
        <CareerPathSection
          from="March, 2022"
          until="June, 2023"
          title="SnapSoft, Junior Software Engineer"
          descriptionFields={[
            "React based web applications and websites",
            "React Native mobile app development",
            "AWS based solutions and certificate",
          ]}
        />
        <CareerPathSection
          from="June, 2023"
          title="META-INF, (Medior) Software Developer"
          descriptionFields={[
            "Atlassian plugin development",
            "React, Atlassian Forge",
          ]}
        />
      </VStack>
      <Heading as="h2" size="lg">
        Hard skills
      </Heading>
      <VStack align="flex-start">
        <Text>
          Languages: JavaScript, TypeScript, C, C++, C#, Java, Swift, Kotlin,
          (CSS, HTML)
        </Text>
        <Text>
          Frameworks and libraries: React, Express, Nest, Next, SwiftUI, React
          Native (Expo)
        </Text>
        <Wrap justify="center" w="100%">
          <WrapItem>
            <Image
              src="/img/aws-cp.png"
              alt="AWS Cloud Practitioner"
              width={200}
              height={200}
            />
          </WrapItem>
          <WrapItem>
            <Image
              src="/img/azure-fund.png"
              alt="Azure Fundamentals"
              width={200}
              height={200}
            />
          </WrapItem>
        </Wrap>
        <Text as="i" fontSize={10} textAlign="center" w="100%">
          It ain&apos;t much (yet), but it&apos;s honest work.
        </Text>
      </VStack>
      <Contacts />
    </Page>
  );
}

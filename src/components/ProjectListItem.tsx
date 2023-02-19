import {
  Badge,
  Card,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

import { Project, ProjectStatus } from "@/src/utils/types";

export interface ProjectListItemProps {
  project: Project;
}

export function ProjectListItem({
  project: { img, title, status, description, url, stack },
}: ProjectListItemProps) {
  return (
    <Link href={url} style={{ width: "100%" }} target="_blank">
      <Card w="100%" p={2}>
        <HStack spacing={4}>
          <Image
            height={50}
            width={50}
            alt={title}
            src={img}
            style={{ borderRadius: "5px" }}
          />
          <VStack align="flex-start" spacing={1}>
            <HStack>
              <Heading as="h3" size="md">
                {title}
              </Heading>
              <Badge
                colorScheme={
                  status === ProjectStatus.ACTIVE ? "green" : "yellow"
                }
              >
                {status}
              </Badge>
            </HStack>
            <Text fontSize="md">{description}</Text>
            <Wrap>
              {stack.map((s) => (
                <Tag colorScheme="blue" key={s}>
                  {s}
                </Tag>
              ))}
            </Wrap>
          </VStack>
        </HStack>
      </Card>
    </Link>
  );
}

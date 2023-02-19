import { Box, Text, VStack } from "@chakra-ui/react";
import theme from "../utils/theme";

interface CareerPathSectionProps {
  from: string;
  until?: string;
  title: string;
  descriptionFields?: string[];
}

export function CareerPathSection({
  from,
  until,
  title,
  descriptionFields,
}: CareerPathSectionProps) {
  return (
    <VStack w="100%">
      <VStack
        w="100%"
        align="flex-start"
        position="relative"
        pl="30px"
        _before={{
          left: 0,
          top: "6px",
          position: "absolute",
          content: '""',
          height: "20px",
          width: "20px",
          backgroundColor: theme.colors.theme["500"],
          borderRadius: "300px",
        }}
      >
        <Box
          backgroundColor="white"
          p={1}
          borderRadius="md"
          whiteSpace="nowrap"
        >
          {from} - {until || "now"}
        </Box>
        <Text>{title}</Text>
      </VStack>
      <VStack as="ul" align="flex-start" w="100%" pl={50}>
        {descriptionFields?.map((desc, i) => (
          <Text as="li" key={i} fontSize="md" color="gray.500">
            {desc}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
}

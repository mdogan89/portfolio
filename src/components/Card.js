import { Box, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
return(
  <Box bg="white" color="black" borderRadius={10}>
    <VStack display="flex">
      <Image src={imageSrc} borderRadius={10}></Image>
      <VStack p={5}>
        <Heading alignSelf="start" size="md">{title}</Heading>
        <Text color="gray">{description}</Text>
        <Link alignSelf="start">See more<FontAwesomeIcon icon={faArrowRight} size="1x"/></Link>
      </VStack>
    </VStack>
</Box>
)
};


export default Card;

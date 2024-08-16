import { Box, Heading, HStack, Image, Link, Text, VStack, AspectRatio } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box bg="white" color="black" borderRadius={10}>
      <VStack display="flex">
        <video src={imageSrc} className="preview" muted loop onMouseOver={event => event.target.play()}
          onMouseOut={event => event.target.pause()}></video>
        <VStack p={5}>
          <Heading alignSelf="start" size="md">{title}</Heading>
          <Text color="gray">{description}</Text>
          <Link href={url} target='_blank' alignSelf="start">See more<FontAwesomeIcon icon={faArrowRight} size="1x" /></Link>
        </VStack>
      </VStack>
    </Box>
  )
};


export default Card;

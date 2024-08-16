import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mustafa!";
const bio1 = "A full-stack web developer";
const bio2 = "specialised in React & Django";
const getImageSrc = () => require("../images/1723159540532.jpg")

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar src={getImageSrc()} size="xl"></Avatar>
      <p> {greeting} </p>
      <Heading> {bio1} </Heading>
      <Heading> {bio2} </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

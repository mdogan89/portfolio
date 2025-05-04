import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Unity Projects",
    description:
      "Links and repositories of my Unity Projects. Mastermind, Architectural Rendering, Warehouse Simulator etc...",
    getImageSrc: () => require("../images/Adsız tasarım.mp4"),
    url: 'https://github.com/mdogan89/UnityProjects',
  },
  {
    title: "Little Lemon Restaurant",
    description:
      "Homepage for fictious restaurant Little Lemon with booking table and menu APIs",
    getImageSrc: () => require("../videos/LittleLemonRestaurant.mp4"),
    url: 'https://mdogan89.github.io/little_lemon_project/',
  },
  {
    title: "Netflix Clone",
    description:
      "A netflix clone with Django. User registration, profile management and search content functionality.",
    getImageSrc: () => require("../videos/Netflix.mp4"),
    url: 'https://mdogan89.pythonanywhere.com/',
  },
  {
    title: "Mastermind Game",
    description:
      "Basic gameplay of classical board game mastermind with HTML, CSS, Javascript.",
    getImageSrc: () => require("../videos/Mastermind.mp4"),
    url: 'https://mdogan89.github.io/mastermind/',
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

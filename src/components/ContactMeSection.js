import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      name: "",
      mail: "",
      subject: "hireMe",
      message: "",
    },
    onSubmit: (values) => { submit("https://littlelemonrestaurant-mdogan89s-projects.vercel.app/contact/", values) },

    validationSchema: Yup.object().shape({
      name: Yup.string().required('Required'),
      message: Yup.string()
        .min(25, 'Must be at least 25 characters')
        .required('Required'),
      mail: Yup.string().email('Invalid email address')
        .required('Required')
    })
  })
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response])

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.name && formik.touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  {...formik.getFieldProps("name")}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.mail && formik.touched.mail}>
                <FormLabel htmlFor="mail">Email Address</FormLabel>
                <Input
                  id="mail"
                  name="mail"
                  type="email"
                  {...formik.getFieldProps("mail")}
                />
                <FormErrorMessage>{formik.errors.mail}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="subject">Type of enquiry</FormLabel>
                <Select id="subject" name="subject" {...formik.getFieldProps("subject")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.message && formik.touched.message}>
                <FormLabel htmlFor="message">Your message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  height={250}
                  {...formik.getFieldProps("message")}
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

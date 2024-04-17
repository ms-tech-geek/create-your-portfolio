import React, { useEffect } from 'react';
import { useFormik } from 'formik';
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
} from '@chakra-ui/react';
import * as Yup from 'yup';
import FullScreenSection from './FullScreenSection';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      submit(values);
      setSubmitting(false);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      type: Yup.string().required('Type of enquiry is required'),
      comment: Yup.string()
        .min(25, 'Minimum 25 characters')
        .max(100, 'Maximum 100 characters')
        .required('Message is required'),
    }),
  });

  useEffect(() => {
    if (response?.type) {
      onOpen(response.type, response.message);
      formik.resetForm();
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      width={'100%'}
    >
      <VStack alignItems="flex-start" width={'100%'}>
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" width={'100%'}>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  formik.touched.firstName && !!formik.errors.firstName
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" {...formik.getFieldProps('firstName')} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && !!formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.type && !!formik.errors.type}
              >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" {...formik.getFieldProps('type')}>
                  <option value="">Select type</option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && !!formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
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

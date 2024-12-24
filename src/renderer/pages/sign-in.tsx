import '@mantine/core/styles.css';
import {
  MantineProvider,
  Group,
  Stack,
  Select,
  TextInput,
  Text,
  Image,
  Button,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Sign() {
  const navigate = useNavigate(); // Initialize navigate

  const handleLoginClick = () => {
    navigate('/log-in'); // Navigate to the /log-in page
  };

  const handleSignIn = () => {
    navigate('/log-in');
  };

  return (
    <MantineProvider>
      <div style={{ margin: '20px 30px' }}>
        <Group justify="flex-end">
          <Text>Already have an account?</Text>
          <Button onClick={handleLoginClick}>Log in</Button>
        </Group>
        <Group style={{ margin: '0px 100px 0 100px' }} gap="100px">
          <Stack w="450px" gap="10px">
            <Select
              label="Who are you?"
              placeholder="Select an option"
              data={['employee', 'employer', 'system administrator']}
            />
            <TextInput label="Name:" placeholder="Enter your name" />
            <TextInput label="Surname:" placeholder="Enter your surname" />
            <TextInput label="Email:" placeholder="Enter your email" />
            <TextInput
              label="Phone number:"
              placeholder="Enter your phone number"
            />
            <TextInput label="Country:" placeholder="Enter your country" />
            <TextInput label="Password" />
            <TextInput label="Confirm password" />
            <Button w="150px" left="150px" radius="15px" onClick={handleSignIn}>
              Sign in
            </Button>
          </Stack>

          <Stack>
            <Text size="50px" fw={800}>
              Find job that suits <br /> your interests & skills
            </Text>
            <Text size="lg" fw={500} mt="20px">
              Discover opportunities that align with your passions and expertise
            </Text>
            <Image src="/images/sign-in.png" />
          </Stack>
        </Group>
      </div>
    </MantineProvider>
  );
}

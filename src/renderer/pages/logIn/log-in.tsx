import '@mantine/core/styles.css';
import {
  MantineProvider,
  Image,
  Stack,
  TextInput,
  Button,
  Group,
  Text,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/sign-in');
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <MantineProvider>
      <div style={{ margin: '20px 30px' }}>
        <Group justify="flex-end">
          <Text>Do not have account yet?</Text>
          <Button onClick={handleLoginClick}>Sign in</Button>
        </Group>
        <Stack w="500px" align="center" ml="400px" mt="180px">
          <Image src="/images/Logo.png" w="400px" />
          <TextInput placeholder="email" w="500px" />
          <TextInput placeholder="password" w="500px" />
          <Button onClick={handleHomeClick}>LOG IN</Button>
        </Stack>
      </div>
    </MantineProvider>
  );
}

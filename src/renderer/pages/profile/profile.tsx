import '@mantine/core/styles.css';
import {
  MantineProvider,
  Paper,
  Group,
  Text,
  Image,
  Stack,
  Button,
} from '@mantine/core';
import Header from '../components/header/header';
import ProfileSettings from './profile-settings';

export default function Profile() {
  return (
    <MantineProvider>
      <div>
        <Header />
        <div
          style={{
            backgroundColor: 'rgba(229, 237, 250, 0.3)', // Light blue with 30% opacity
            padding: '40px',
            minHeight: 'calc(100vh - 70px)', // Adjust height to cover remaining viewport
          }}
        >
          <Group align="flex-start">
            <Paper>
              <ProfileSettings />
            </Paper>
            <Paper w={900} h={730} withBorder p="30px">
              <Group
                p="20px"
                style={{
                  backgroundColor: 'rgba(182, 205, 244, 0.3)', // Slightly darker shade for the profile header
                  borderRadius: '10px',
                }}
              >
                <Image src="./images/profile.png" w={70} />
                <Text size="30px" fw={600}>
                  Name Surname
                </Text>
              </Group>
              <Text pl="100px" size="25px" fw={300}>
                Employee
              </Text>

              <Stack pt="20px" gap="30px">
                <Group justify="space-between">
                  <Paper
                    withBorder
                    w="400px"
                    p="10px"
                    style={{ borderRadius: '10px' }}
                  >
                    <Text fw={600} size="lg">
                      Email
                    </Text>
                    <Text>dfjasdk@gmail.com</Text>
                  </Paper>
                  <Paper
                    withBorder
                    w="400px"
                    p="10px"
                    style={{ borderRadius: '10px' }}
                  >
                    <Text fw={600} size="lg">
                      Phone number
                    </Text>
                    <Text>+99890768548485</Text>
                  </Paper>
                </Group>
                <Paper withBorder p="10px" style={{ borderRadius: '10px' }}>
                  <Text fw={600} size="lg">
                    Location
                  </Text>
                  <Text>Tashkent</Text>
                </Paper>
                <Group justify="space-between">
                  <Paper
                    withBorder
                    w="400px"
                    p="10px"
                    style={{ borderRadius: '10px' }}
                  >
                    <Text fw={600} size="lg">
                      Education
                    </Text>
                    <Text>Inha university</Text>
                  </Paper>
                  <Paper
                    withBorder
                    w="400px"
                    p="10px"
                    style={{ borderRadius: '10px' }}
                  >
                    <Text fw={600} size="lg">
                      Position
                    </Text>
                    <Text>Designer</Text>
                  </Paper>
                </Group>
                <Paper
                  withBorder
                  p="10px"
                  h="150px"
                  style={{ borderRadius: '10px' }}
                >
                  <Text fw={600} size="lg">
                    About me
                  </Text>
                </Paper>
              </Stack>

              <Button
                mt="20px"
                h="40px"
                radius="8px"
                size="15px"
                style={{ backgroundColor: '#0B52DC', color: '#fff' }}
              >
                Make changes
              </Button>
            </Paper>
          </Group>
        </div>
      </div>
    </MantineProvider>
  );
}

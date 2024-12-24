import '@mantine/core/styles.css';
import { MantineProvider, Image, Group } from '@mantine/core';
import { IconBell, IconUser } from '@tabler/icons-react';
import './header.css';

export default function Header() {
  return (
    <MantineProvider>
      <div
        style={{
          borderBottom: '2px solid #d3d3d3', // Light grey border line
          paddingBottom: '5px',
        }}
      >
        <Group justify="space-between" m="20px">
          <Image src="/images/home.png" w="400px" />
          <Group gap="lg">
            <div className="icon-container">
              <IconBell size={35} />
            </div>

            <div className="icon-container">
              <IconUser size={35} />
            </div>
          </Group>
        </Group>
      </div>
    </MantineProvider>
  );
}

import { useState } from 'react';
import { MantineProvider, Menu, rem, Paper } from '@mantine/core';
import {
  IconBookmark,
  IconLogout,
  IconUser,
  IconSettings,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function ProfileSettings() {
  const [activeItem, setActiveItem] = useState<string>('profile'); // Track the active menu item
  const navigate = useNavigate(); // Initialize navigate

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (item === 'saved') {
      navigate('/saved'); // Use absolute path for "saved"
    } else if (item === 'profile') {
      navigate('/profile'); // Use absolute path for "profile"
    }
    // Add navigation for other items as needed
  };

  return (
    <MantineProvider>
      <div style={{ width: '25rem', margin: '20px' }}>
        {/* White container */}
        <Paper p="md" style={{ backgroundColor: 'white' }}>
          <Menu
            width={400}
            styles={(theme) => ({
              item: {
                fontSize: rem(18),
                color: theme.colors.dark[9],
                borderRadius: rem(15),
                transition: 'background-color 0.1s ease, color 0.1s ease', // Faster transition
                '&[data-hovered]': {
                  backgroundColor: theme.colors.blue[6],
                  color: theme.colors.blue[0],
                },
              },
            })}
          >
            <Menu.Item
              onClick={() => handleItemClick('profile')}
              style={{
                backgroundColor:
                  activeItem === 'profile'
                    ? 'rgba(182, 205, 244, 0.3)'
                    : 'transparent',
                color: activeItem === 'profile' ? '#0B52DC' : '',
              }}
              leftSection={
                <IconUser style={{ width: rem(20), height: rem(20) }} />
              }
            >
              Profile
            </Menu.Item>
            <Menu.Item
              onClick={() => handleItemClick('saved')}
              style={{
                backgroundColor:
                  activeItem === 'saved'
                    ? 'rgba(182, 205, 244, 0.3)'
                    : 'transparent',
                color: activeItem === 'saved' ? '#0B52DC' : '',
              }}
              leftSection={
                <IconBookmark style={{ width: rem(20), height: rem(20) }} />
              }
            >
              Saved
            </Menu.Item>
            <Menu.Item
              onClick={() => handleItemClick('settings')}
              style={{
                backgroundColor:
                  activeItem === 'settings'
                    ? 'rgba(182, 205, 244, 0.3)'
                    : 'transparent',
                color: activeItem === 'settings' ? '#0B52DC' : '',
              }}
              leftSection={
                <IconSettings style={{ width: rem(20), height: rem(20) }} />
              }
            >
              Settings
            </Menu.Item>
            <Menu.Item
              onClick={() => handleItemClick('logout')}
              style={{
                backgroundColor:
                  activeItem === 'logout'
                    ? 'rgba(182, 205, 244, 0.3)'
                    : 'transparent',
                color: activeItem === 'logout' ? '#0B52DC' : '',
              }}
              leftSection={
                <IconLogout style={{ width: rem(20), height: rem(20) }} />
              }
            >
              Log out
            </Menu.Item>
          </Menu>
        </Paper>
      </div>
    </MantineProvider>
  );
}

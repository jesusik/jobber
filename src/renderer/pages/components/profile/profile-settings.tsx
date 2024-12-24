import '@mantine/core/styles.css';
import { useState } from 'react';
import { MantineProvider, Menu, rem } from '@mantine/core';
import './profile.css';
import {
  IconBookmark,
  IconLogout,
  IconUser,
  IconSettings,
} from '@tabler/icons-react';

export default function ProfileSettings() {
  const [activeItem, setActiveItem] = useState<string>(''); // Track the active menu item

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <MantineProvider>
      <div style={{ width: '25rem', margin: '20px' }}>
        <Menu width={400}>
          <Menu.Item
            className="menu-item"
            onClick={() => handleItemClick('profile')}
            leftSection={
              <IconUser style={{ width: rem(20), height: rem(20) }} />
            }
          >
            Profile
          </Menu.Item>
          <Menu.Item
            className="menu-item"
            onClick={() => handleItemClick('saved')}
            leftSection={
              <IconBookmark style={{ width: rem(20), height: rem(20) }} />
            }
          >
            Saved
          </Menu.Item>
          <Menu.Item
            className="menu-item"
            onClick={() => handleItemClick('settings')}
            leftSection={
              <IconSettings style={{ width: rem(20), height: rem(20) }} />
            }
          >
            Settings
          </Menu.Item>
          <Menu.Item
            className="menu-item"
            onClick={() => handleItemClick('logout')}
            leftSection={
              <IconLogout style={{ width: rem(20), height: rem(20) }} />
            }
          >
            Log out
          </Menu.Item>
        </Menu>
      </div>
    </MantineProvider>
  );
}

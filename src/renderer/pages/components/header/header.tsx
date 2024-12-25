import '@mantine/core/styles.css';
import { MantineProvider, Image, Group } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import './header.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Header() {
  const navigate = useNavigate(); // Initialize navigate

  const goToProfile = () => {
    navigate('/profile');
  };

  const goToHome = () => {
    navigate('/home'); // Navigate to the home route
  };

  return (
    <MantineProvider>
      <div
        style={{
          borderBottom: '2px solid #d3d3d3', // Light grey border line
          paddingBottom: '5px',
        }}
      >
        <Group justify="space-between" m="20px">
          {/* Make the image clickable without changing its size */}
          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              padding: 0, // Remove any default padding from the button
            }}
            onClick={goToHome}
          >
            <Image src="/images/home.png" alt="Home" />
          </button>

          <Group gap="lg">
            <div className="icon-container">
              <button
                type="button"
                style={{ background: 'none', border: 'none' }}
                onClick={goToProfile}
              >
                <IconUser size={35} />
              </button>
            </div>
          </Group>
        </Group>
      </div>
    </MantineProvider>
  );
}

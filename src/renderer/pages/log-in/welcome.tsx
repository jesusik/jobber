import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router
import '@mantine/core/styles.css';
import { MantineProvider, Image, Center, Transition } from '@mantine/core';

export default function Welcome() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate('/sign-in'); // Change '/next-page' to your desired route
    }, 500); // Wait for animation to finish before navigating
  };

  return (
    <MantineProvider>
      <Center style={{ height: '100vh' }}>
        <Transition
          mounted={!isClicked}
          transition="fade"
          duration={500}
          timingFunction="ease"
        >
          {(styles) => (
            <Image
              src="/images/Logo.png"
              width={200}
              style={styles}
              onClick={handleClick}
              alt="Logo"
            />
          )}
        </Transition>
      </Center>
    </MantineProvider>
  );
}

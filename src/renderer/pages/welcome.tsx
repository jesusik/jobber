import '@mantine/core/styles.css';
import { Button, MantineProvider, Text } from '@mantine/core';

export default function Welcome() {
  return (
    <MantineProvider>
      <div>
        <Text>Jobber</Text>
        <Text>Os term project</Text>
        <Button>Hii</Button>
      </div>
    </MantineProvider>
  );
}

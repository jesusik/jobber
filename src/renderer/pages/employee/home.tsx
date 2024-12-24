import '@mantine/core/styles.css';
import { useState } from 'react';
import {
  MantineProvider,
  InputWrapper,
  TextInput,
  Center,
  Text,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import Header from './header';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <MantineProvider>
      <div>
        <Header />
        <div style={{ margin: '40px' }}>
          <Center>
            <InputWrapper w="800" mb="20px">
              <TextInput
                placeholder="Search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.currentTarget.value)}
                rightSection={<IconSearch size={16} color="#007bff" />}
                style={{ border: '2px solid #007bff', borderRadius: '5px' }}
              />
            </InputWrapper>
          </Center>
          <Text size="xl" fw={600}>
            Popular categories
          </Text>
        </div>
      </div>
    </MantineProvider>
  );
}
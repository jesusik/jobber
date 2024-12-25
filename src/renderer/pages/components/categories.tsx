import { Grid, Paper, Text, Image, Group } from '@mantine/core';
import { useState } from 'react';
import '@mantine/core/styles.css';

const categories = [
  { id: 1, name: 'Graphics & Design', img: '/images/categories/1.png' },
  { id: 2, name: 'Code & Programming', img: '/images/categories/2.png' },
  { id: 3, name: 'Digital Marketing', img: '/images/categories/3.png' },
  { id: 4, name: 'Video & Animation', img: '/images/categories/4.png' },
  { id: 5, name: 'Music & Audio', img: '/images/categories/5.png' },
  { id: 6, name: 'Account & Finance', img: '/images/categories/6.png' },
  { id: 7, name: 'Health & Care', img: '/images/categories/7.png' },
  { id: 8, name: 'Data & Science', img: '/images/categories/2.png' },
];

export default function Category() {
  const [hovered, setHovered] = useState<number | null>(null); // Track hover state
  const firstRow = categories.slice(0, 4);
  const secondRow = categories.slice(4);

  return (
    <Grid gutter="md">
      {firstRow.map((category) => (
        <Grid.Col key={category.id} span={3}>
          <Paper
            shadow="sm"
            p="md"
            radius="md"
            withBorder
            style={{
              transition:
                'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s',
              transform: hovered === category.id ? 'scale(1.05)' : 'scale(1)', // Enlarge when hovered
              boxShadow:
                hovered === category.id
                  ? '0 8px 16px rgba(0, 0, 0, 0.15)'
                  : 'none', // Add shadow
              borderColor: hovered === category.id ? '#0B52DC' : '#ddd', // Change border color
            }}
            onMouseEnter={() => setHovered(category.id)} // Set hover state
            onMouseLeave={() => setHovered(null)} // Reset hover state
          >
            <Group>
              <Image
                src={category.img}
                alt={category.name}
                width={50}
                height={50}
                radius="md"
              />
              <Text size="md" fw={500}>
                {category.name}
              </Text>
            </Group>
          </Paper>
        </Grid.Col>
      ))}

      {/* Second Row */}
      {secondRow.map((category) => (
        <Grid.Col key={category.id} span={3}>
          <Paper
            shadow="sm"
            p="md"
            radius="md"
            withBorder
            style={{
              transition:
                'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s',
              transform: hovered === category.id ? 'scale(1.05)' : 'scale(1)', // Enlarge when hovered
              boxShadow:
                hovered === category.id
                  ? '0 8px 16px rgba(0, 0, 0, 0.15)'
                  : 'none', // Add shadow
              borderColor: hovered === category.id ? '#0B52DC' : '#ddd', // Change border color
            }}
            onMouseEnter={() => setHovered(category.id)} // Set hover state
            onMouseLeave={() => setHovered(null)} // Reset hover state
          >
            <Group>
              <Image
                src={category.img}
                alt={category.name}
                width={50}
                height={50}
                radius="md"
              />
              <Text size="md" fw={500}>
                {category.name}
              </Text>
            </Group>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}

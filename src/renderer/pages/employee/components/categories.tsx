import { Grid, Paper, Text, Image, Group } from '@mantine/core';
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
  const firstRow = categories.slice(0, 4); // First 4 categories
  const secondRow = categories.slice(4);

  return (
    <Grid gutter="md">
      {/* First Row */}
      {firstRow.map((category) => (
        <Grid.Col key={category.id} span={3}>
          <Paper shadow="sm" p="md" radius="md" withBorder>
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
          <Paper shadow="sm" p="md" radius="md" withBorder>
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

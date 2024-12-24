import { Grid, Paper, Text, Badge, Group } from '@mantine/core';
import jobs from './data/jobs.json'; // Import the JSON file

interface Job {
  id: number;
  position: string;
  type: string;
  salary: string;
  company: string;
  description: string;
}

export default function FeaturedJobs() {
  // Split jobs into columns (3 columns)
  const columns: Job[][] = [[], [], []];
  jobs.forEach((job, index) => {
    return columns[index % 3].push(job);
  });

  return (
    <Grid gutter="md">
      {columns.map((column, columnIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid.Col key={columnIndex} span={4}>
          {column.map((job) => (
            <Paper
              key={job.id}
              shadow="sm"
              p="md"
              radius="md"
              withBorder
              style={{ marginBottom: '16px' }}
            >
              <Group mb="sm">
                <Text size="lg" fw={600}>
                  {job.position}
                </Text>
                <Badge color="blue" variant="light">
                  {job.type}
                </Badge>
              </Group>
              <Text size="sm" color="dimmed" mb="xs">
                {job.company}
              </Text>
              <Text size="sm" mb="xs">
                Salary: {job.salary}
              </Text>
              <Text size="sm" color="dimmed">
                {job.description}
              </Text>
            </Paper>
          ))}
        </Grid.Col>
      ))}
    </Grid>
  );
}

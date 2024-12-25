import React from 'react';
import { Grid, Paper, Text, Badge, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import jobs from './data/jobs.json'; // Import the JSON file

// Define the Job type
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
  jobs.forEach((jobItem, index) => {
    columns[index % 3].push(jobItem);
  });

  return (
    <Grid gutter="md">
      {columns.map((column, columnIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid.Col key={columnIndex} span={4}>
          {column.map((jobItem) => (
            <Link
              to={`/job/${jobItem.id}`}
              key={jobItem.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Paper
                shadow="sm"
                p="md"
                radius="md"
                h="180px"
                withBorder
                style={{ marginBottom: '16px' }}
              >
                <Group mb="sm">
                  <Text size="lg" fw={600}>
                    {jobItem.position}
                  </Text>
                  <Badge color="blue" variant="light">
                    {jobItem.type}
                  </Badge>
                </Group>
                <Text size="sm" mb="xs">
                  {jobItem.company}
                </Text>
                <Text size="sm" mb="xs">
                  Salary: {jobItem.salary}
                </Text>
                <Text size="sm" color="dimmed">
                  {jobItem.description}
                </Text>
              </Paper>
            </Link>
          ))}
        </Grid.Col>
      ))}
    </Grid>
  );
}

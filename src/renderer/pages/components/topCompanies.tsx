import React from 'react';
import { Grid, Paper, Text, Badge, Group, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

// Import the data from the JSON file
import jobData from './data/CompanyJobData.json';

// Define the types for the company and job data
interface Company {
  id: number;
  name: string;
  location: string;
  featured: boolean;
}

export default function TopCompanies() {
  // Directly use jobData without destructuring
  const companies = jobData as Company[];

  return (
    <Grid gutter="md">
      {companies.map(({ id, name, location, featured }) => (
        <Grid.Col key={id} span={4}>
          <Paper
            shadow="sm"
            p="md"
            radius="md"
            withBorder
            style={{ marginBottom: '16px' }}
          >
            <Group mb="sm">
              <Text size="lg" fw={600}>
                {name}
              </Text>
              {featured && (
                <Badge color="green" variant="light">
                  Featured
                </Badge>
              )}
            </Group>
            <Text size="sm" color="dimmed" mb="xs">
              Location: {location}
            </Text>
            <Link to={`/jobs/${id}`} style={{ textDecoration: 'none' }}>
              <Button variant="outline" fullWidth>
                Open Position
              </Button>
            </Link>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}

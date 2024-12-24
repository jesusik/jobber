import React from 'react';
import { Grid, Paper, Text, Badge, Group, Button } from '@mantine/core';

// Example company data (can be fetched from a backend or a JSON file)
const companies = [
  { id: 1, name: 'Company A', location: 'New York, USA', featured: true },
  { id: 2, name: 'Company B', location: 'London, UK', featured: false },
  { id: 3, name: 'Company C', location: 'Berlin, Germany', featured: true },
  { id: 4, name: 'Company D', location: 'Tokyo, Japan', featured: true },
  { id: 5, name: 'Company E', location: 'San Francisco, USA', featured: false },
  { id: 6, name: 'Company F', location: 'Paris, France', featured: true },
  { id: 7, name: 'Company G', location: 'Sydney, Australia', featured: false },
  { id: 8, name: 'Company H', location: 'Toronto, Canada', featured: true },
];

export default function TopCompanies() {
  // Split companies into columns (3 columns with 2 companies in each)
  const columns: {
    id: number;
    name: string;
    location: string;
    featured: boolean;
  }[][] = [[], [], []];
  companies.forEach((company, index) => {
    columns[index % 3].push(company);
  });

  return (
    <Grid gutter="md">
      {columns.map((column, columnIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid.Col key={columnIndex} span={4}>
          {column.map((company) => (
            <Paper
              key={company.id}
              shadow="sm"
              p="md"
              radius="md"
              withBorder
              style={{ marginBottom: '16px' }}
            >
              <Group mb="sm">
                <Text size="lg" fw={600}>
                  {company.name}
                </Text>
                {company.featured && (
                  <Badge color="green" variant="light">
                    Featured
                  </Badge>
                )}
              </Group>
              <Text size="sm" color="dimmed" mb="xs">
                Location: {company.location}
              </Text>
              <Button variant="outline" fullWidth>
                Open Position
              </Button>
            </Paper>
          ))}
        </Grid.Col>
      ))}
    </Grid>
  );
}

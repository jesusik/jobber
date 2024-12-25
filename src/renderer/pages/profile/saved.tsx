import React, { useState, useEffect } from 'react';
import { Group, MantineProvider, Paper, Text, Badge } from '@mantine/core';
import ProfileSettings from './profile-settings';
import Header from '../components/header/header';
import savedVacanciesData from './savedVacanciesData.json'; // Import the mock data

// Define a type for the vacancy
interface Vacancy {
  id: number;
  vacancyName: string;
  salary: string;
  type: string;
  companyName: string;
}

export default function Saved() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    // You can fetch data from the backend here, but for now, we are using the static JSON file.
    setVacancies(savedVacanciesData);
  }, []);

  return (
    <MantineProvider>
      <div>
        {/* Header remains outside the styled wrapper */}
        <Header />
        <div
          style={{
            backgroundColor: 'rgba(229, 237, 250, 0.3)', // Set background color with 30% opacity
            padding: '40px', // Add padding for better spacing
            minHeight: 'calc(100vh - 70px)', // Adjust height to cover remaining viewport
          }}
        >
          <Group align="flex-start">
            <Paper>
              <ProfileSettings />
            </Paper>
            <Paper w={900} h={730} withBorder p="30px">
              <Text size="lg" fw={600} pb="20px">
                Saved Vacancies
              </Text>
              {vacancies.length > 0 ? (
                vacancies.map((vacancy) => (
                  <Paper
                    key={vacancy.id}
                    style={{
                      padding: '15px',
                      marginBottom: '15px',
                      borderRadius: '8px',
                      border: '2px solid #0B52DC', // Set border color
                      backgroundColor: 'transparent', // No background color
                    }}
                  >
                    <Text fw={500} size="lg">
                      {vacancy.vacancyName}
                    </Text>
                    <Text size="md">{vacancy.companyName}</Text>
                    <Text size="md" style={{ marginTop: '8px' }}>
                      <strong>Salary:</strong> {vacancy.salary}
                    </Text>
                    <Badge
                      style={{ marginTop: '10px' }}
                      color="green"
                      variant="light"
                    >
                      {vacancy.type}
                    </Badge>
                  </Paper>
                ))
              ) : (
                <Text>No saved vacancies available.</Text>
              )}
            </Paper>
          </Group>
        </div>
      </div>
    </MantineProvider>
  );
}

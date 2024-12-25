import { Group, Input, Paper, Text, Badge } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Explicitly type the imported JSON data
import jobData from './data/CompanyJobData.json';
import Header from './header/header';

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  type: 'full-time' | 'part-time' | 'internship';
}

interface Company {
  id: number;
  name: string;
  location: string;
  featured: boolean;
  jobs: Job[];
}

// Explicitly cast jobData to the correct type
const jobDataTyped: Company[] = jobData as Company[];

export default function ListOfJobs() {
  const { companyId } = useParams<{ companyId: string }>();
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (companyId) {
      // Find the company by ID in the array
      const company = jobDataTyped.find(
        (companyItem: Company) => companyItem.id.toString() === companyId,
      );
      setSelectedCompany(company || null); // Ensure it's null if not found
    }
  }, [companyId]);

  if (!selectedCompany) {
    return <Text>Loading...</Text>;
  }

  const filteredJobs = selectedCompany.jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <Header />
      <Group m="30px">
        <Text size="25px" fw={600}>
          Jobs at {selectedCompany.name}
        </Text>
        <Input
          placeholder="Search jobs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '600px', borderColor: '0B52DC' }}
        />
      </Group>

      {filteredJobs.length === 0 ? (
        <Text>No jobs available</Text>
      ) : (
        filteredJobs.map((job) => (
          <Paper
            key={job.id}
            shadow="sm"
            p="md"
            radius="md"
            withBorder
            m="30px"
            style={{ borderColor: '#0B52DC' }}
          >
            <Text size="lg" fw={500}>
              {job.title}
            </Text>
            <Text size="sm" color="dimmed">
              {job.description}
            </Text>
            <Text size="sm" color="dimmed">
              Location: {job.location}
            </Text>
            <Text size="sm" color="dimmed">
              Salary: {job.salary}
            </Text>
            <Group mt="md">
              <Badge color="green" variant="light">
                {job.type}
              </Badge>
            </Group>
          </Paper>
        ))
      )}
    </div>
  );
}

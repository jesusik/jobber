import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Text, Badge, Stack, Button, Group } from '@mantine/core';
import { IconBookmark, IconArrowRight } from '@tabler/icons-react';
import jobs from './data/jobs.json';
import Header from './header/header';

export default function JobInfo() {
  const { id } = useParams<{ id: string }>();
  const selectedJob = jobs.find(
    (jobItem) => jobItem.id === parseInt(id || '', 10),
  );

  const [isSaved, setIsSaved] = useState(false);

  // Toggle save state when clicked
  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  if (!selectedJob) {
    return <Text>Job not found</Text>;
  }

  return (
    <div>
      <Header />
      <Paper shadow="sm" p="30px" radius="md" m="20px" h="750px">
        <Text size="30px" fw={700} mb="md">
          {selectedJob.position}
        </Text>
        <Text size="sm" color="dimmed" mb="md">
          {selectedJob.company}
        </Text>
        <Badge color="blue" variant="light" mb="md">
          {selectedJob.type}
        </Badge>
        <Stack gap="xs">
          <Text size="md">
            <strong>Salary:</strong> {selectedJob.salary}
          </Text>
          <Text size="md">
            <strong>Description:</strong> {selectedJob.description}
          </Text>
          <Text size="md">
            <strong>Requirements:</strong> Example requirements for the job.
          </Text>
          <Text size="md">
            <strong>Benefits:</strong> Example benefits for the job.
          </Text>
          <Text size="md">
            <strong>Location:</strong> Example location for the job.
          </Text>
          {/* Group to hold both buttons */}
          <Group style={{ marginTop: 20 }}>
            {/* Save button */}
            <Button
              variant="light"
              color={isSaved ? 'blue' : 'gray'}
              leftSection={<IconBookmark size={16} />}
              onClick={handleSaveClick}
              w={200}
            >
              {isSaved ? 'Saved' : 'Save'}
            </Button>

            {/* Apply Now button */}
            <Button
              variant="filled"
              color="blue"
              rightSection={<IconArrowRight size={16} />}
              w={200}
            >
              Apply now
            </Button>
          </Group>
        </Stack>
      </Paper>
    </div>
  );
}

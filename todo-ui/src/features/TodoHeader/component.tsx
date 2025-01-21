import { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import { Dropdown } from '@components';
import { TodoModal } from '@features';
import {
  PRIORITY_OPTIONS,
  SORT_BY_OPTIONS,
  STATUS_OPTIONS,
} from '@lib/constants';
import { useFilter } from '@context/FilterContext';

export const TodoHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { filters, updateFilter } = useFilter();

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button variant="contained" onClick={handleClickOpen}>
        Add Task
      </Button>
      <Box
        sx={{
          display: 'flex',
          flex: '1',
          marginLeft: 10,
          gap: 1,
        }}
      >
        <Dropdown
          value={filters.status}
          name="status"
          label="Status"
          onChange={(value) => updateFilter('status', value)}
          options={STATUS_OPTIONS}
        />
        <Dropdown
          value={filters.priority}
          name="priority"
          label="Priority"
          onChange={(value) => updateFilter('priority', value)}
          options={PRIORITY_OPTIONS}
        />
        <Dropdown
          value={filters.sortBy}
          name="sortBy"
          label="Sort by"
          onChange={(value) => updateFilter('sortBy', value)}
          options={SORT_BY_OPTIONS}
        />
      </Box>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Container>
  );
};

import React from 'react';
import { Box, Drawer } from '@mui/material';
import { Dropdown } from '@components/Dropdown';
import {
  STATUS_OPTIONS,
  PRIORITY_OPTIONS,
  SORT_BY_OPTIONS,
} from '@lib/constants';
import { useFilter } from '@context/FilterContext';
import { useView } from '@context/ViewContext';

type FilteringDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const FilteringDrawer = ({ open, onClose }: FilteringDrawerProps) => {
  const { filters, updateFilter } = useFilter();
  const { view } = useView();

  const handleChange = (name: string, value: string) => {
    updateFilter(name, value);
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250, padding: 2 }}>
        {view === 'list' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Dropdown
              value={filters.status}
              name="status"
              label="Status"
              onChange={(value) => handleChange('status', value)}
              options={STATUS_OPTIONS}
            />
            <Dropdown
              value={filters.priority}
              name="priority"
              label="Priority"
              onChange={(value) => handleChange('priority', value)}
              options={PRIORITY_OPTIONS}
            />
            <Dropdown
              value={filters.sortBy}
              name="sortBy"
              label="Sort by"
              onChange={(value) => handleChange('sortBy', value)}
              options={SORT_BY_OPTIONS}
            />
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

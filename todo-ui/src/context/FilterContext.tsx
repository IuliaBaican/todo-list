import { FilterStatus } from '@types';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type FilterContextType = {
  filters: FilterStatus;
  updateFilter: (type: string, value: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FilterStatus>({
    status: 'all',
    priority: 'all',
    sortBy: 'date-newest',
  });

  const updateFilter = (type: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const contextValue = useMemo(() => ({ filters, updateFilter }), [filters]);

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

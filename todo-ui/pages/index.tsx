import { Container, ThemeProvider, Typography } from '@mui/material';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store';
import { TodoHeader, TodoContent } from '@features';
import { theme } from '../theme';
import { FilterProvider } from '@context/FilterContext';

const HomePage = () => {
  return (
    <Suspense>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <FilterProvider>
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h2">TODO LIST</Typography>
              <TodoHeader />
              <TodoContent />
            </Container>
          </FilterProvider>
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
};

export default HomePage;

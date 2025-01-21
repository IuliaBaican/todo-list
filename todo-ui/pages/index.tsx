import { Container, ThemeProvider, Typography } from '@mui/material';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store';
import { TodoHeader, TodoContent } from '@features';
import { theme } from '../theme';
import { FilterProvider } from '@context/FilterContext';
import { ViewProvider } from '@context/ViewContext';

const HomePage = () => {
  return (
    <Suspense>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <FilterProvider>
            <ViewProvider>
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
            </ViewProvider>
          </FilterProvider>
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
};

export default HomePage;

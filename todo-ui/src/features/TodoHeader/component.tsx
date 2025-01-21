import { useState } from 'react';
import { Box, Button, ButtonGroup, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { TodoModal } from '@features';
import { useView } from '@context/ViewContext';
import { FilteringDrawer } from '@components/FilteringDrawer';

export const TodoHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { view, setView } = useView();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const toggleView = (newView: 'list' | 'calendar') => {
    setView(newView);
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
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
        <AddIcon fontSize="medium" />
      </Button>
      <Box sx={{ display: 'flex', gap: 10 }}>
        {view === 'list' && (
          <Button variant="outlined" onClick={() => toggleDrawer(true)}>
            <FilterListIcon />
          </Button>
        )}
        <ButtonGroup>
          <Button
            variant={view === 'list' ? 'contained' : 'outlined'}
            onClick={() => toggleView('list')}
          >
            <FormatListBulletedOutlinedIcon />
          </Button>
          <Button
            variant={view === 'calendar' ? 'contained' : 'outlined'}
            onClick={() => toggleView('calendar')}
          >
            <CalendarMonthIcon />
          </Button>
        </ButtonGroup>
      </Box>

      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <FilteringDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
    </Container>
  );
};

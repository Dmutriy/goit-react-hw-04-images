import PropTypes from 'prop-types';
import { Button, Box } from '@mui/material';

export const ButtonLoadMore = ({ onClick }) => {
  return (
    <Box textAlign="center">
      <Button variant="outlined" size="medium" type="button" onClick={onClick}>
        {' '}
        Load more
      </Button>
    </Box>
  );
};

ButtonLoadMore.prototypes = {
  onClick: PropTypes.func.isRequired,
};

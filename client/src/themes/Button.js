import { Button as muiButton, styled } from '@mui/material';

export const Button = styled(muiButton)(() => ({
  borderRadius: '40px',
  background: 'inherit',
  boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.25), -3px -3px 6px rgba(255, 255, 255, 0.3)',
  margin: '4px',
}));
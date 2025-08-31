import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // A nice blue
    },
    secondary: {
      main: '#ff9800', // An orange accent
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif', // Using Inter font
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for buttons
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Rounded corners for cards
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)', // Subtle shadow
        },
      },
    },
  },
});

export default theme;


import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { themeSettings } from './theme';
import Router from './Router';
function App() {
  const mode='light'
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

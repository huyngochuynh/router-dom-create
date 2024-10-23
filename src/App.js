import './App.css';
import React from 'react';
import SearchAppBar from './components/SearchAppBar';
import HomePage from './pages/HomePage';
// import DetailPage from './pages/DetailPage';
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from '@mui/material/colors';
import { AuthProvider } from "./context/AuthContext";


const theme = createTheme({
  shape: { borderRadius: 30 },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  }
})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <SearchAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={ <HomePage /> } />
            <Route path="/book/:id" element={ <HomePage /> } />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

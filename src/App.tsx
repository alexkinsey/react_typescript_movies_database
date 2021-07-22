import React from 'react';

// ROUTING
// @ts-ignore
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';

// CONTEXT
import UserProvider from './context';

// STYLES
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </UserProvider>
    </Router>
  );
};

export default App;

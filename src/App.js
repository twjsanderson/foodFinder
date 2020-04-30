import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Header from './header';
import routes from './routes';
import Footer from './footer';

const App = () => {
  return (
      <Router>
        <Header />
          <section id='app'>
            {routes}
          </section>
        <Footer />
      </Router>
  );
}

export default App;

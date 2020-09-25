import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ErrorBoundary from './pages/ErrorHandler';
import routes from './router/router';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map(route => (<Route key={route.id} path={route.path} exact={route.exact} component={route.component} />))}
        </Switch>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

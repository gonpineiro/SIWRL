import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout';
import Users from './Users'
import Marcas from './Marcas'
import Geneticas from './Geneticas'

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Route exact path="/users" component={Users} />
      <Route exact path="/marcas" component={Marcas} />
      <Route exact path="/geneticas" component={Geneticas} />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout';
import Users from './Users'
import Marcas from './Marcas'
import Geneticas from './Geneticas'
import Prototypes from './Prototypes';

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Route exact path="/users" component={Users} />
      <Route exact path="/marcas" component={Marcas} />
      <Route exact path="/geneticas" component={Geneticas} />
      <Route exact path="/prototipos" component={Prototypes} />
    </BrowserRouter>
  );
}

export default App;

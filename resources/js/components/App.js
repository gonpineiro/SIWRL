import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Users from './Users'

function App() {
    return (
      <BrowserRouter>
            <Route exact path="/users" component={Users} />
            {/* <Route exact path="/user_form" component={UserForm} />
            <Route exact path="/user_edit/:id" component={UserEdit} />
            <Route exact path="/empresas" component={Empresas} /> */}
      </BrowserRouter>
    );
  }

export default App;

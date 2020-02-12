import React from 'react';
import Connexion from '../../components/chatApp/components/Connexion';
import './ChatApp.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../../components/chatApp/components/App';

export const RootChat = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/contact' component={Connexion} />
      <Route path='/contact/:pseudo' component={App} />
    </Switch>
  </BrowserRouter>
);

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';
import CreateOrphanage from '../pages/CreateOrphanage';
import SignIn from '../pages/Login/SignIn';
import SuccessMessage from '../components/AlertMessage/SuccessMessage';
import ConfirmMessage from '../components/AlertMessage/ConfirmMessage';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/app" component={OrphanagesMap} />

      <Route path="/orphanages/create" component={CreateOrphanage} />
      <Route path="/orphanages/:id" component={Orphanage} />

      <Route path="/login" component={SignIn} />

      <Route path="/alert/success" component={SuccessMessage} />
      <Route path="/alert/confirm" component={ConfirmMessage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

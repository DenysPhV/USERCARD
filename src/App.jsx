import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserCard from 'components/UserCard';

import FeedbackView from './view/FeedbackView';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <UserCard />
        </Route>
        <Route path="/feedback">
          <FeedbackView />
        </Route>
        <Route path="/price" />
        <Route path="/reserve" />
        <Route path="/more-about" />
        <Route path="https://travelq.yourpricebooking.com/23-interesting-places-in-kiev/#pll_switcher" />
      </Switch>
    </>
  );
}

export default App;

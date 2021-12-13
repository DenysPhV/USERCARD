import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { store } from './store/store';
import Container from 'components/Container';
import UserCard from 'components/UserCard';

import FeedbackView from './view/FeedbackView';

// import freeButton from 'components/freeButton';
// import { ReactComponent as AddIcon } from './icons/add.svg';
// import { ReactComponent as Hotel } from './icons/hotel.svg';

function App() {
  return (
    <Container>
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
      </Switch>
    </Container>
  );
}

export default App;

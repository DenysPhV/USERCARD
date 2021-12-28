import { useState } from 'react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserCard from 'components/UserCard';

import FeedbackView from './view/FeedbackView';

import btnStyle from './components/FreeButton/FreeButton.module.scss';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  // const [isReadMore, setIsReadMore] = useState(true);
  const [style, setStyle] = useState(btnStyle.freeButton);

  // const toggleReadMore = () => {
  //   setIsReadMore(!isReadMore);
  // };

  const togglePopup = () => {
    setShowPopup(!showPopup);

    if (!showPopup) {
      setStyle(btnStyle.freeButtonActive);
    } else {
      setStyle(btnStyle.freeButton);
    }
    return;
  };

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <UserCard
            // isReadMore={isReadMore}
            // onClick={toggleReadMore}
            onClose={togglePopup}
            showPopup={showPopup}
            style={style}
          />
        </Route>
        <Route path="/feedback">
          <FeedbackView />
        </Route>
        <Route path="/price" />
        <Route path="/reserve" />
        <Route path="/more-about" />
        <Route path="/video" />
      </Switch>
    </>
  );
}

export default App;

import { Component } from 'react';

import card from './card.json';

import Container from 'components/Container';
import UserCardList from './components/UserCard/UserCardList';

import IconButton from 'components/IconButton';
// import { ReactComponent as AddIcon } from './icons/add.svg';
import { ReactComponent as Hotel } from './icons/hotel.svg';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <Container>
          {/*Работа с колекциями*/}

          <IconButton onClick={this.toggleModal} aria-label="add todo item">
            {/* <AddIcon width="30" height="30" fill="#ffffff" /> */}
            <Hotel width="50" height="47" fill="#0090FF" />
          </IconButton>

          <UserCardList items={card}>
            <Hotel width="50" height="47" fill="#0090FF" />
          </UserCardList>
        </Container>
      </>
    );
  }
}

export default App;

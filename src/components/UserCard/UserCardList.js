import PropTypes from 'prop-types';

import UserCard from './UserCard';

function UserCardList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <UserCard
            imageUrl={item.url}
            title={item.title}
            profileUrl={item.author.tag}
            author={item.author.url}
            price={item.price}
            quantity={item.quantity}
            description={item.description.shortly}
          />
        </li>
      ))}
    </ul>
  );
}

UserCardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default UserCardList;

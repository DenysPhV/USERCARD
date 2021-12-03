import PropTypes from 'prop-types';

import defaultImage from './default.jpg';
import s from './UserCard.module.scss';

function UserCard({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'не известно',
  price,
  quantity,
  description,
}) {
  return (
    <div className={s.container}>
      <header>
        <h2>{title}</h2>
      </header>

      <main className={s.mainSection}>
        <img src={imageUrl} alt={title} width="100" height="100" />

        <p className={s.desc}>{description}</p>
        <img src={imageUrl} alt={title} width="100" height="100" />
      </main>

      <footer>
        <p>
          Автор: <a href={profileUrl}>{author}</a>
        </p>
        <p>Цена: {price} кредитов</p>
        <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
        <button type="button">Добавить в корзину</button>
      </footer>
    </div>
  );
}

UserCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default UserCard;

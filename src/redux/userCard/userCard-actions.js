import { createAction } from '@reduxjs/toolkit';

const userCardData = createAction(
  'cardData/read',
  ({
    id,
    title,
    city,
    place,
    street,
    priceBefore,
    priceAfter,
    areaApartment,
    feedback,
    status,
    url,
    urlImageSecond,
    rating,
    description,
  }) => ({
    payload: {
      id,
      title,
      city,
      place,
      street,
      priceBefore,
      priceAfter,
      areaApartment,
      feedback,
      status,
      url,
      urlImageSecond,
      rating,
      description,
    },
  }),
);

export { userCardData };

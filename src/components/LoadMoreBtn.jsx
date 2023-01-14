import React from 'react';
import { LoadMore } from './LoadMoreBtn.styled';

const Button = ({ loadMore }) => {
  return (
    <LoadMore className="Button" onClick={loadMore}>
      Load More
    </LoadMore>
  );
};

export default Button;

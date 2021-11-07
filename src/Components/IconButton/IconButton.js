import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonStyled } from './IconButtonStyled';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <IconButtonStyled
    type='button'
    className='IconButton'
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </IconButtonStyled>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired
};

export default IconButton;

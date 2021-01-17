import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ massage }) => {
  return (
    <div>
      <p>{massage}</p>
    </div>
  );
};

Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};
export default Notification;

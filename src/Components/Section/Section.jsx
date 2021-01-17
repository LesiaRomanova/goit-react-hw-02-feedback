import React from 'react';
import PropTypes from 'prop-types';
import './Sections.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className="Reviews-title">{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;

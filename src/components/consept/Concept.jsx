/* eslint-disable react/prop-types */
import React from 'react';

const Concept = ({ concept: { title, image, description } }) => {
  return (
    <li key={title} className="concept">
      <img src={image} alt="TODO: TITLE" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default Concept;

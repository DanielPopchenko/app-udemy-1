/* eslint-disable react/prop-types */
import React from 'react';
import Concept from '../concept/Concept';

const Concepts = ({ concepts }) => {
  return (
    <ul id="concepts">
      {concepts.map((concept) => (
        <Concept concept={concept} key={concept.title} />
      ))}
    </ul>
  );
};

export default Concepts;

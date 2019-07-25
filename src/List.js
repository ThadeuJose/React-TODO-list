import React from 'react';

function List(props) {
  return (
    <ul className = 'list'>
      {props.items.map((item,idx) =>
        <li className='element_list' key={idx}>{item}</li>
      )}
    </ul>
  );
};

export default List;



// TableRow.js

import React from 'react';
import "./App.css"
const TableRow = ({ data }) => {
  const { name, id, image, symbol, current_price, total_volume } = data;

  return (
    <tr >
      <td>{name}</td>
      <td>{id}</td>
      <td>
        <img id='img' src={image} alt={name} />
      </td>
      <td>{symbol}</td>
      <td>{current_price}</td>
      <td>{total_volume}</td>
    </tr>
  );
};

export default TableRow;


// ShowTable.js
import React from 'react';

const onDeleteRow = (row) => {
  console.log(`Deleting row: ${JSON.stringify(row)}`);
};

const ShowTable = ({ data, onEditRow }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const columns = Object.keys(data[0]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th key="edit">Edit</th>
            <th key="delete">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{row[column]}</td>
              ))}
              <td key="edit">
                <button onClick={() => onEditRow(row)}>Edit</button>
              </td>
              <td key="delete">
                <button onClick={() => onDeleteRow(row)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTable;
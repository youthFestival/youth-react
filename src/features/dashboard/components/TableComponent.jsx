import React from "react";

const TableComponent = ({ headers, rows, loading, error, emptyMessage }) => {
  return (
    <table className="inquiries-table">
      <tr className="row-flex">
        {headers.map((header, index) => (
          <th key={index} className={`col ${header.className}`}>
            {header.content}
          </th>
        ))}
      </tr>
      {
        loading && (
          <tr className="row-flex">
            <td className="col" colSpan={headers.length}>
              로딩중...
            </td>
          </tr>
        )
      }
      {
        error && (
          <tr className="row-flex">
            <td className="col" colSpan={headers.length}>
              에러 {error} 발생
            </td>
          </tr>
        )
      }
      {
        rows?.length === 0 ? (
          <tr className="row-flex">
            <td className="col" colSpan={headers.length}>
              {emptyMessage}
            </td>
          </tr>
        ) : (
          rows?.map((row, index) => (
            <tr key={index} className="row-flex" onClick={row.onClick}>
              {row.cells.map((cell, cellIndex) => (
                <td key={cellIndex} className={`col ${cell.className}`}>
                  {cell.content}
                </td>
              ))}
            </tr>
          ))
        )
      }
    </table >
  );
};

export default TableComponent;

import "../styles/table.css";
function Table({ headerRow }) {
  return (
    <table>
      {/* 테이블 타이틀 영역 */}
      <tr>
        {headerRow.map((rowText) => (
          <td style={{ flex: `${rowText.ratio} 1 100px` }}>{rowText.name}</td>
        ))}
      </tr>

      {/* 테이블 내용 영역 */}
      <tr>
        {headerRow.map((rowText) => (
          <td style={{ flex: `${rowText.ratio} 1 100px` }}>
            {"가나다라마바사아자차카타파하"}
          </td>
        ))}
      </tr>
    </table>
  );
}

export default Table;

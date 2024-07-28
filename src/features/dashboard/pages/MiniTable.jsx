import { useEffect } from "react";
import "../styles/mini-table.scss"
import { formatDay1 } from "../../../utils/util";

function MiniTable({ title = "제목을 입력해주세요.", headers = [], colume = [] }) {

    return (<div className="chart">
        <h3>{title}</h3>
        <div className="mini-table">
            <div className="header">
                {
                    headers?.map((header, index) => (
                        <li key={index}>{header}</li>))
                }
            </div>
            {
                colume?.map((colume, index) => (
                    <div className="colume" key={colume.id}>
                        <li>{colume.title}</li>
                        <li>{formatDay1(colume.updatedAt)}</li>
                        <li>{colume.username}</li>
                    </div>)
                )
            }

        </div>
    </div>);
}

export default MiniTable;
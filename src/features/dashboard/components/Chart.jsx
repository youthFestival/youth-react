import ReactFrappeChart from "react-frappe-charts";
import "../styles/chart.scss";


export default function Chart({ type = "line", title = "제목을 입력해주세요.", data = {
    labels: ["일", "월", "화", "수", "목", "금", "토"],
    datasets: [{ values: [18, 40, 30, 35, 8, 52, 17] }],
} }) {
    return (
        <div className="chart">
            <h3>{title}</h3>
            <ReactFrappeChart
                type={type}
                colors={["#21ba45"]}
                axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                height={300}
                width={530}
                data={data}
            />

        </div>
    );
}
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Header } from "../components";
import Chart from "../components/Chart";
import "../styles/dashboard.scss";
import MiniTable from "./MiniTable";


function Dashboard(prop) {
    const { data, loading, error } = useFetch(process.env.REACT_APP_API_URL + "/inquiry");
    const { data: festivalData, loadnig: festivalLoading, error: festivalError } = useFetch(process.env.REACT_APP_API_URL + "/festival/locality");

    const [festival, setFestival] = useState({
        localies: [],
        viewCounts: [],
        likes: [],
    });


    useEffect(() => {
        festivalData?.locality?.map((festival) => {
            setFestival(prev => ({
                localies: [...prev.localies, festival.locality],
                viewCounts: [...prev.viewCounts, festival.viewCount],
                likes: [...prev.likes, festival.likes],
            }));
        });
        console.log(festival);


    }, [festivalData])

    return (
        <>
            <Header title={"Dashboard"} subTitle={"Dashboard"} />
            <div className="dashboard-container">
                <Chart type="bar" title="사이트 방문자 수 " />
                <Chart title="일자별 회원가입자 수" />
                <Chart
                    type="pie"
                    title="지역별 유저 통계"
                    data={{
                        labels: festival?.localies,
                        datasets: [{ values: festival?.viewCounts }],
                    }}

                />
                <MiniTable
                    title="고객 문의 내역"
                    headers={["문의 제목", "등록 일", "유저 아이디"]}
                    colume={data?.inquiries}
                />
            </div>

        </>)
}

export default Dashboard;
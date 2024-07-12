// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import { mockFestivals } from './dummyDatas';

// 공통 CORS 헤더를 설정하는 함수
const apiURL = process.env.REACT_APP_API_URL;

export const handlers = [

    // "GET /user" 요청을 가로챕니다.
    http.get('api/users', () => {

        return HttpResponse.json({
            id: 1,
            name: "john"
        }, {
            status: 201
        })
    }),
    /**
     * Get 요청 테스트
     */
    http.get('http://localhost:5000/api/auth/', () => {

        return HttpResponse.json({
            id: 1,
            name: "john"
        }, {
            status: 201
        })
    }),

    /**
     * 로그인 처리 Mock 함수
     *
     */
    http.post(apiURL + '/auth/login', async ({ request, cookies }) => {

        const data = await request.json();
        const DUMMY_HASH = 'd3b07384d113edec49eaa6238ad5ff00';
        let isVaild = false;

        console.log(data.userId, data.password, data);

        if (data.userId === "admin" && data.password === "1234") {
            isVaild = true;
        }


        return isVaild ? HttpResponse.json({
            token: DUMMY_HASH,
            message: "로그인에 성공하였습니다."
        }, {
            headers: {
                'Set-Cookie': `token=${DUMMY_HASH}; Path=/; SameSite=Strict`
            },
            status: 200,
        }) :
            HttpResponse.json({
                error: "Unauthorized",
                message: "로그인에 실패하였습니다."
            }, {
                status: 401,
            })
    }),

    /**
     * 사용자가 선택한 일자에 맞는 축제 조회  
     */
    http.get(apiURL + '/calendar-festivals', async ({ request }) => {
        const url = new URL(request.url)

        const year = +url.searchParams.getAll('year')
        const month = +url.searchParams.getAll('month')



        console.log(`[MSW] fetchFestivalCalendar data.year = ${year}, data.month = ${month}`);

        // 년도와 월이 일치하는 축제만 필터링
        const filteredFestivals = mockFestivals.festivals.filter(festival => {
            const startDate = new Date(festival.startDate);
            return startDate.getFullYear() === year && startDate.getMonth() + 1 === month // getMonth()는 0부터 시작하므로 +1 필요
        })


        const successData = {
            festivals: filteredFestivals,
            message: filteredFestivals.length + "건의 조회가 성공하였습니다."
        }

        const failedData = {
            error: "Not Found",
            message: `${year}년 ${month}월에 해당하는 축제가 없습니다. 다른 날짜를 선택해주세요 `
        }

        return HttpResponse.json(
            !!filteredFestivals ? successData : failedData,
            !!filteredFestivals ? { status: 200 } : { status: 404 }
        )
    })
];

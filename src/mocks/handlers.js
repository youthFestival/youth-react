// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import fakeFestivals from './fake-festivals';

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
    http.get('http://localhost:5000/api/auth', () => {

        return HttpResponse.json({
            id: 1,
            name: "john"
        }, {
            status: 201
        })
    }),

    http.post(apiURL + '/login', async ({ request, cookies }) => {

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

    http.get(apiURL + '/calendar-festivals', async ({ request }) => {
        // const currentToken = cookies.authToken;
        console.log("네트워크 요청 감지됨");

        return HttpResponse.json(
            fakeFestivals,
            {
                status: 201
            }
        )
    })
];

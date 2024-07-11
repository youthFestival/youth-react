// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import fakeFestivals from './fake-festivals';

// 공통 CORS 헤더를 설정하는 함수

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
    http.get('http:localhost:5000/api/auth', () => {

        return HttpResponse.json({
            id: 1,
            name: "john"
        }, {
            status: 201
        })
    }),

    http.post('/login', async ({ request, cookies }) => {
        // const currentToken = cookies.authToken;


        return HttpResponse.json({
            incomingData: await request.json(),
            cookie: cookies
        }, {
            headers: {
                'Set-Cookie': 'authToken=abc; Path=/; SameSite=Strict'
            },
            status: 202,
        })
    }),
    http.get('http://localhost:5000/calendar-festivals', async ({ request }) => {
        // const currentToken = cookies.authToken;


        return HttpResponse.json(
            fakeFestivals
        )
    })
];

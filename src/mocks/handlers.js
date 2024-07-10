// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';

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
    })


    // ...and respond to them using this JSON response.
    // return HttpResponse.json({
    //     id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
    //     firstName: 'John',
    //     lastName: 'Maverick',
    // })
];

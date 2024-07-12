import { http, HttpResponse } from 'msw';

export const LoginMSW = http.post(
    '/api/auth/login',
    async ({ request }) => {
        const data = {
            accessToken: '12341234',
            refreshToken: '1234',
        }

        const result: any = await request.json()
        
        const text = result?.text
        const password = result?.password

        if(text === 'tester' && password == 'test1234'){
            return new HttpResponse(JSON.stringify(data), {
                status: 200,
                statusText: '로그인에 성공하였습니다.',
            })
        } else {
            return new HttpResponse(null, {
                status:400,
                statusText: '로그인에 실패하였습니다.',
            })
        }   
    }
)
// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import { mockFestivals, mockFestivalDetail, mockLineUp, mockPoster, mockPictures, mockBooths, mockBoothItems, mockRecommendations, mockComments, mockQnAs } from './dummyDatas';
import { adminHandler } from './handlers';

// 공통 CORS 헤더를 설정하는 함수
const apiURL = process.env.REACT_APP_API_URL;

export const handlers = [
    ...adminHandler,
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

        if (
            (data.userId === "admin" && data.password === "1234") ||
            (data.userId === "kangminjun" && data.password === "kangminjun1234")
        ) {
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
    }),

    /**
     * 사용자가 선택한 축제의 상세 정보 조회
     */
    http.get(apiURL + '/festivals/:festivalId', async ({ params }) => {
            return HttpResponse.json({
                message: "축제 상세 정보를 가져오는데 성공했습니다.",
                info: mockFestivalDetail.festivalDetails
            }, {
                status: 200
            });
    }),

    /**
     * 사용자가 선택한 축제의 라인업 정보 조회
     */
    http.get(apiURL + `/festivals/:festivalId/line-ups`, async ({ params }) => {
            return HttpResponse.json({
                message: "축제 라인업 정보를 가져오는데 성공했습니다.",
                lineUp: mockLineUp.lineUp
            }, {
                status: 200
            });
    }),

    // 사용자가 선택한 축제의 포스터 정보 조회
    http.get(apiURL + `/festivals/:festivalId/poster`, async ({ params }) => {
            return HttpResponse.json({
                message: "포스터 정보를 가져오는데 성공했습니다.",
                posterImage: mockPoster.posterImage
            }, {
                status: 200
            });
    }),

    // 사용자가 선택한 축제의 사진 정보 조회
    http.get(apiURL + `/festivals/:festivalId/pictures`, async ({ params }) => {
            return HttpResponse.json({
                message: "사진 정보를 가져오는데 성공했습니다.",
                pictures: mockPictures.pictures
            }, {
                status: 200
            });
    }),

    // 사용자가 선택한 축제의 부스 정보 조회
    http.get(apiURL + `/festivals/:festivalId/booths`, async ({ params }) => {
            return HttpResponse.json({
                message: "부스 정보를 가져오는데 성공했습니다.",
                booths: mockBooths.booths
            }, {
                status: 200
            });
    }),

    // 사용자가 선택한 부스의 아이템 정보 조회
    http.get(apiURL + `/booths/:boothId/items`, async ({ params }) => {
        const boothId = parseInt(params.boothId, 10);

        const boothItems = mockBoothItems.find(item => item.boothId === boothId);
        if (boothItems) {
            return HttpResponse.json({
                limit: boothItems.limit,
                items: boothItems.items
            }, {
                status: 200
            });
        } else {
            return HttpResponse.json({
                error: "Not Found",
                message: "해당 부스의 아이템 정보를 찾을 수 없습니다."
            }, {
                status: 404
            });
        }
    }),

    // 추천 축제 핸들러
    http.get(apiURL + `/festivals/:festivalId/recommendations`, async ({ params, request }) => {
        const limit = parseInt(new URL(request.url).searchParams.get("limit") || "3", 10);

            const recommendations = mockRecommendations.recommendations.slice(0, limit);
            return HttpResponse.json({
                message: "추천 축제 정보를 가져오는데 성공했습니다.",
                recommendations
            }, {
                status: 200
            });
    }),

    // 사용자가 선택한 축제의 기대평 정보 조회
    http.get(apiURL + `/comments/:festivalId`, async ({ params, request }) => {
        const limit = parseInt(new URL(request.url).searchParams.get("limit") || "10", 10);
        const offset = parseInt(new URL(request.url).searchParams.get("offset") || "0", 10);

        const comments = mockComments.comments.slice(offset, offset + limit);
        return HttpResponse.json({
            message: "조회되었습니다",
            limit,
            offset,
            total: mockComments.comments.length,
            comments
        }, {
            status: 200
        });
    }),

    // 사용자가 선택한 축제의 QnA 정보 조회
    http.get(apiURL + `/inquiries2/:festivalId`, async ({ params, request }) => {
        const limit = parseInt(new URL(request.url).searchParams.get("limit") || "10", 10);
        const offset = parseInt(new URL(request.url).searchParams.get("offset") || "0", 10);

        const qnaList = mockQnAs.qnaList;
        return HttpResponse.json({
            message: "조회되었습니다",
            limit,
            offset,
            total: mockQnAs.qnaList.length,
            qnaList
        }, {
            status: 200
        });
    }),

    http.get(apiURL + '/faq', async () => {
        return HttpResponse.json({
            faq: [
                { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf1 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
                { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf2 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
                { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf3 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
                { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf4 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
                { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf5 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
                { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf6 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
                { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf7 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
                { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf8 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
                { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf9 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
            ],
        }, {
            status: 200
        })
    }),
    http.post(apiURL + '/chatbot-question', async ({ request }) => {
        const data = await request.json();
        console.log(data);
        let answer;
        if (data.question === "이름") {
            answer = "챗봇";
        } else if (data.question === "생년월일") {
            answer = "2024-07-16";
        } else {
            answer = "데이터 없음";
        }
        return HttpResponse.json(
            {
                answer: answer
            }, {
            status: 200
        }
        )
    })

];

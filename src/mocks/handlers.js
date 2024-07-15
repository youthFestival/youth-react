// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import { mockFestivals, mockInquiries, mockFestivalDetail, mockLineUp, mockPoster, mockPictures, mockBooths, mockBoothItems, mockRecommendations } from './dummyDatas';

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
        const festivalId = parseInt(params.festivalId, 10);

        // 가짜 데이터에서 해당 축제 정보를 찾아 반환
        if (mockFestivalDetail.festivalDetails.festivalId === festivalId) {
            return HttpResponse.json({
                message: "축제 상세 정보를 가져오는데 성공했습니다.",
                info: mockFestivalDetail.festivalDetails
            }, {
                status: 200
            });
        } else {
            return HttpResponse.json({
                error: "Not Found",
                message: "해당 축제를 찾을 수 없습니다."
            }, {
                status: 404
            });
        }
    }),

    /**
     * 사용자가 선택한 축제의 라인업 정보 조회
     */
    http.get(apiURL + `/festivals/:festivalId/line-ups`, async ({ params }) => {
        const festivalId = parseInt(params.festivalId, 10);

        if (mockLineUp.festivalId === festivalId) {
            return HttpResponse.json({
                message: "축제 라인업 정보를 가져오는데 성공했습니다.",
                lineUp: mockLineUp.lineUp
            }, {
                status: 200
            });
        } else {
            return HttpResponse.json({
                error: "Not Found",
                message: "해당 축제의 라인업 정보를 찾을 수 없습니다."
            }, {
                status: 404
            });
        }
    }),

    // 사용자가 선택한 축제의 포스터 정보 조회
    http.get(apiURL + `/festivals/:festivalId/poster`, async ({ params }) => {
        const festivalId = parseInt(params.festivalId, 10);

        if (mockPoster.festivalId === festivalId) {
            return HttpResponse.json({
                message: "포스터 정보를 가져오는데 성공했습니다.",
                posterImage: mockPoster.posterImage
            }, {
                status: 200
            });
        } else {
            return HttpResponse.json({
                error: "Not Found",
                message: "해당 축제의 포스터 정보를 찾을 수 없습니다."
            }, {
                status: 404
            });
        }
    }),

    // 사용자가 선택한 축제의 사진 정보 조회
    http.get(apiURL + `/festivals/:festivalId/pictures`, async ({ params }) => {
        const festivalId = parseInt(params.festivalId, 10);

        if (mockPictures.festivalId === festivalId) {
            return HttpResponse.json({
                message: "사진 정보를 가져오는데 성공했습니다.",
                pictures: mockPictures.pictures
            }, {
                status: 200
            });
        } else {
            return HttpResponse.json({
                error: "Not Found",
                message: "해당 축제의 사진 정보를 찾을 수 없습니다."
            }, {
                status: 404
            });
        }
    }),

    // 사용자가 선택한 축제의 부스 정보 조회
    http.get(apiURL + `/festivals/:festivalId/booths`, async ({ params }) => {
        const festivalId = parseInt(params.festivalId, 10);

        if (mockBooths.festivalId === festivalId) {
            return HttpResponse.json({
                message: "부스 정보를 가져오는데 성공했습니다.",
                booths: mockBooths.booths
            }, {
                status: 200
            });
        } else {
            return HttpResponse.json({
                error: "Not Found",
                message: "해당 축제의 부스 정보를 찾을 수 없습니다."
            }, {
                status: 404
            });
        }
    }),

    // 사용자가 선택한 부스의 아이템 정보 조회
    http.get(apiURL + `/booths/:boothId/items`, async ({ params }) => {
        const boothId = parseInt(params.boothId, 10);

        if (mockBoothItems.boothId === boothId) {
            return HttpResponse.json({
                limit: mockBoothItems.limit,
                items: mockBoothItems.items
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
    http.get(apiURL + `/festivals/:festivalId/recommendations`, async ({ params, url }) => {
        const festivalId = parseInt(params.festivalId, 10);
        const limit = parseInt(new URL(url).searchParams.get("limit") || "3", 10);

        if (mockRecommendations.festivalId === festivalId) {
            const recommendations = mockRecommendations.recommendations.slice(0, limit);
            return HttpResponse.json({
                message: "추천 축제 정보를 가져오는데 성공했습니다.",
                recommendations
            }, {
                status: 200
            });
        } else {
            return HttpResponse.json({
                error: "Not Found",
                message: "추천 축제를 찾을 수 없습니다."
            }, {
                status: 404
            });
        }
    }),

    //!! 관리자 페이지
    //문의글 여러 개 조회
    http.get(apiURL + '/inquiries', async ({ request }) => {
        const url = new URL(request.url)
        /**
         * 
         * limit	Int	조회할 문의 글 갯수 기본 값 15
         * offset	Int	건너뛸 문의 글 갯수 기본 값 0
         * category	String 	“페스티벌”,”계정” 중 해당 문의의 카태고리 유형,  명시하지 않을 시, 카테고리에 상관없이 모든 데이터를 가져옴
         * status	String	“접수중”,”답변완료”,”접수완료”등 현재 글의 상태에 관한 유형 명시하지 않았을 때는 필터 적용 X
         */

        const notNullData = new Map();

        const limit = +url.searchParams.getAll('limit') || 15
        const offset = +url.searchParams.getAll('offset') || 0
        const category = "" + url.searchParams.getAll('category')
        const ststus = "" + url.searchParams.getAll('ststus')

        const inquiries = mockInquiries.inquiries.filter((inquiry) => {
            //limit과 offset을 이용하여 조회할 데이터를 필터링
            if (inquiry.id < offset || inquiry.id >= offset + limit) {
                return false;
            }
            //카테고리와 상태에 따라 필터링
            if (category !== "" && inquiry.category !== category) {
                return false;
            }
            //카테고리와 상태에 따라 필터링
            if (ststus !== "" && inquiry.ststus !== ststus) {
                return false;
            }
            return true;
        })

        console.log(inquiries);



        return HttpResponse.json(
            {
                ...mockInquiries,
                limit,
                offset,
                inquiries,

            }, { status: 200 })
    }),
];

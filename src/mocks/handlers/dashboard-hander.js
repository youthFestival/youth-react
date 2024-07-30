import { http, HttpResponse } from "msw";
import { mockInquiries, mockUsers } from "../dummyDatas";


const apiURL = process.env.REACT_APP_API_URL;

const handler = [
    //!! 관리자 페이지
    //문의글 여러 개 조회
    http.get(apiURL + '/inquiries', async ({ request }) => {
        const url = new URL(request.url)
        await request.json();
        /**
         * 
         * limit	Int	조회할 문의 글 갯수 기본 값 15
         * offset	Int	건너뛸 문의 글 갯수 기본 값 0
         * category	String 	“페스티벌”,”계정” 중 해당 문의의 카태고리 유형,  명시하지 않을 시, 카테고리에 상관없이 모든 데이터를 가져옴
         * status	String	“접수중”,”답변완료”,”접수완료”등 현재 글의 상태에 관한 유형 명시하지 않았을 때는 필터 적용 X
         */

        const limit = +url.searchParams.get('limit') || 15
        const offset = +url.searchParams.get('offset') || 0
        const category = url.searchParams.get('category')
        const status = url.searchParams.get('status')


        const inquiries = mockInquiries.inquiries.filter((inquiry) => {
            //limit과 offset을 이용하여 조회할 데이터를 필터링
            if (inquiry.id < offset || inquiry.id >= offset + limit) {
                return false;
            }
            //카테고리와 상태에 따라 필터링
            if (category !== null && inquiry.category !== category) {
                return false;
            }
            //카테고리와 상태에 따라 필터링
            if (status !== null && inquiry.status !== status) {
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

    http.get(apiURL + '/inquiries/:id', async ({ request, params }) => {
     const inquiriesId = parseInt(params.id);
        // 이름	                타입	                        설명	                        필수
        // id	            Int	            질문 글 기본 키                                     O
        // festivalID	    Int	            해당 질문글이 페스티벌 문의일 경우 ID                 X
        // festivalName	    String          해당 질문글이 페스티벌일 경우, 페스티벌의 이름 	       X
        // userInquiries	Inquiries       해당 글 상세                                        O
        // replyInquiries	Inquiries       해당 답변글                                         X

        // 랜덤한 문의글 조회
        const randomInquiries = mockInquiries.inquiries[Math.floor(Math.random() * mockInquiries.inquiries.length)];


        // 페스티벌 문의글일 경우, 가짜 축제 데이터를 반환
        const festivalInfo = randomInquiries.category === "페스티벌" ? {
            festivalId: Math.floor(Math.random() * 10), // 10개의 가짜 축제 데이터 중 랜덤으로 선택
            festivalName: "2024년 서울 빛 축제" // 가짜 축제 데이터의 이름
        } : {}

        return HttpResponse.json(
            {
                ...festivalInfo,
                id: params.id || -1,
                userInquiries: mockInquiries.inquiries[inquiriesId-1],
                replyInquiries: {
                    id: 1000,
                    userAlias: "yooth Support",
                    category: "답변",
                    title: "안녕하세요. 답변 드립니다.",
                    content: `In other words, "cross-origin" means that the two origins trying
                to share resources are different from each other. Setting up CORS
                (Cross-Origin Resource Sharing) allows resource sharing between
                servers with different origins. While the SOP (Same-Origin Policy)
                blocks resource requests and responses when the origins are
                different, CORS, on the other hand, is a policy that allows
                resource requests and responses even if the origins are different.
                Hence, the errors we encounter usually suggest configuring
                something to enable CORS. The header Access-Control-Allow-Origin,
                used in the solutions that will be discussed later, can be
                understood as "access control for allowed origins." Check the
                example below to see which URLs conform to the SOP. In the past,
                frontend and backend were configured together, allowing all
                processing to happen within the same domain. Therefore, sending
                requests to different origins was seen as suspicious behavior.
                However, over time, it became common to call APIs directly from
                the client. Usually, the client and the API reside in different
                domains. Hence, the CORS policy was established. It allows
                specifying permitted origins on the server so that requests and
                responses can be exchanged even if the origins are different`,
                    status: "답변완료",
                    updatedAt: "2024-07-17T18:18:18.000Z"
                }

            }, { status: 200 })
    }),


    //사용자 여러 명 조회
    http.get(apiURL + '/users', async ({ request }) => {
        const url = new URL(request.url)

        const limit = +url.searchParams.get('limit') || 15
        const offset = +url.searchParams.get('offset') || 0


        const users = mockUsers.users.filter((inquiry) => {
            //limit과 offset을 이용하여 조회할 데이터를 필터링
            if (inquiry.id < offset || inquiry.id >= offset + limit) {
                return false;
            }
            return true;
        })

        console.log(users);



        return HttpResponse.json(
            {
                ...mockUsers,
                limit,
                offset,
                users,

            }, { status: 200 })
    }),
]

export default handler;
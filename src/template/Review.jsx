import './Review.css';
import myProfile from "../img/122416681.jpg";
import {useNavigate} from "react-router";
import Center from "../components/Center";
import TopBanner from "../components/TopBanner";
import {useEffect, useState} from "react";
import axios from "axios";
import insertReview from "./ReviewInsert";
import {menu} from "../common/menu";
// import {useRouteId} from "react-router/dist/lib/hooks";

function Review() {
    const nav = useNavigate();
    const [review, setReview] = useState([]);
    const [userId, setUserId] = useState(null);




    const cards = [
        {
            story_title : "낙히",
            categoryItem : "전체보기",
            background : "#F6FFED",
            color : "389e0d",
            duration: "2년",
            major : "컴퓨터제어과",
            minor : "컴퓨터과학과",
            previousOccupation : "X",
            jobSearchDuration : "1년",
            ageAtEmployment : 27,
            jobResponsibilities: "연구소 관리 프로그램 SI업체",
            message : "하고 싶은 말"
        },
        {
            story_title: "엄지척",
            categoryItem: "프론트",
            background: "#FFF0F6",
            color: "#C41D7F",
            duration: "2년",
            major : "건축",
            minor : "컴공",
            previousOccupation : "X",
            jobSearchDuration: "4개월 (공부시작~취업완료)",
            ageAtEmployment : 27,
            jobResponsibilities: "연구소 관리 프로그램 SI업체",
            message: "그런데 실제로는 대기업 다니시는 분들이 더 많이 병행하고 있다는 것을 알았습니다. 약간 후회가 남는 부분입니다."
        },
        {
            story_title: "엄지척",
            categoryItem: "프론트",
            background: "#FFF0F6",
            color: "#C41D7F",
            duration: "2년",
            major : "건축",
            minor : "컴공",
            previousOccupation : "X",
            jobSearchDuration: "4개월 (공부시작~취업완료)",
            ageAtEmployment : 24,
            jobResponsibilities: "연구소 관리 프로그램 SI업체",
            message: "그런데 실제로는 대기업 다니시는 분들이 더 많이 병행하고 있다는 것을 알았습니다. 약간 후회가 남는 부분입니다."
        },
        {
            story_title: "엄지척",
            categoryItem: "프론트",
            background: "#FFF0F6",
            color: "#C41D7F",
            duration: "2년",
            major : "건축",
            minor : "컴공",
            previousOccupation : "X",
            jobSearchDuration: "4개월 (공부시작~취업완료)",
            ageAtEmployment : 50,
            jobResponsibilities: "연구소 관리 프로그램 SI업체",
            message: "그런데 실제로는 대기업 다니시는 분들이 더 많이 병행하고 있다는 것을 알았습니다. 약간 후회가 남는 부분입니다."
        },
        {
            story_title: "엄지척",
            categoryItem: "프론트",
            background: "#FFF0F6",
            color: "#C41D7F",
            duration: "2년",
            major : "건축",
            minor : "컴공",
            previousOccupation : "X",
            jobSearchDuration: "1년 1개월",
            ageAtEmployment : 33,
            jobResponsibilities: "연구소 관리 프로그램 SI업체",
            message: "그런데 실제로는 대기업 다니시는 분들이 더 많이 병행하고 있다는 것을 알았습니다. 약간 후회가 남는 부분입니다."
        }
    ]

    // 페이지가 처음시작할때 1번 실행
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/review').then((res) => {
            setReview(res.data.content)
        }).catch((err) => {
            console.log(err)
        })

        // axios.post('해당 URL', {
        //     "reviewTitle": "리뷰제목",
        //     "reviewContent": "리뷰내용",
        //     "companyRating": 1,
        //     "jobResponsibilities": "ㅇㅇ",
        //     "recommendation": "ㅇㅇ",
        //     "jobSearchDuration": "ㅇㅇ",
        //     "major": "ㅇㅇ",
        //     "previousOccupation": "ㅇㅇ",
        //     "ageAtEmployment": 1,
        //     "jobSearchMethod": "ㅇㅇ",
        //     "companyId": 1
        // }).then((res) => {
        //     setReview(res.data.content)
        // }).catch((err) => {
        //     console.log(err)
        // })
    }, [])

    const goToDetails = () => {
        nav(`/reviewDetail?${userId}`);
    }

    const ReviewInsert = () => {
        nav(`/reviewInsert?`)
    }

  return (
    <div className="App">
        <Center>
            <TopBanner> </TopBanner>

            <div className="infoMent">
                <div className="infoTopMent">
                    <div>💼</div>
                    <div>현실취업후기</div>
                </div>
                <div style={{textAlign : 'left'}} className="title">N살 비전공자인데 취업 몇 달 걸릴까요?</div>
                <div style={{textAlign : 'left'}} className="title_description">이제 걱정은 노노! 다른 분들 참고해요. 취업후기 신청도 환영💖</div>

                <div className="category">
                    {/* ## 컴포넌트 화 ## */}
                    {/*자바스크립트에서 자바문법을 쓸 때는 {중괄호}해줘야 함*/}
                    {menu.map((item, idx) => (
                        // 글씨만 가지는 애 = span
                        // 글씨와 영역을 동시에 가지는 애 = p
                        <div key={idx} style={{background : item.background, color : item.color}} className="categoryItem"><span>{item.name}</span></div>
                    ))}
                </div>
            </div>


            <div className="card_wrap">
                {review.map((item,idx) => (
                    <div onClick={goToDetails} key={idx} className="card">
                        <div className="card_img">
                            <img style={{width : '54px', height : '54px'}} src={myProfile}/>
                        </div>
                        <div className="card_detail">
                            <div className="story">
                                <div className="story_title">{item.story_title}</div>
                                <div style={{background : item.background, color : item.color}} className="categoryItem">{item.categoryItem}</div>
                            </div>

                            <div className="story_profile">전공: (<span>{item.duration}</span>)<span>{item.major}</span> <span>{item.minor}</span> / 취업나이: {item.ageAtEmployment}세 / 취준기간: {item.jobSearchDuration}년</div>
                            <hr/>
                            <div className="story_comment"><span>{item.message}</span></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="button_container">
                <button onClick={ReviewInsert} className="insertButton">취업후기 쓰기 > </button>
            </div>

        </Center>


    </div>
  );
}

export default Review;

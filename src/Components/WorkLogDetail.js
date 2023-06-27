import React, { useState } from "react";
import WorkLogExModal from "./WorkLogExModal";
import "../Styles/work_log_detail.css";

const WorkLogDetail = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="detail-container">
      <div className="detail-layout">
        <div className="detail-list-ex">
          <span className="write-detail">작성 내용</span>
          <span className="write-user">작성자</span>
          <span className="write-day">작성 일자</span>
        </div>
        <div className="detail-list-de" onClick={showModal}>
          <span className="ex-detail">버그 수정 사항</span>
          <span className="ex-user">박민규</span>
          <span className="ex-day">2023년 5월 17일</span>
        </div>
        {modalOpen && <WorkLogExModal setModalOpen={setModalOpen} />}
      </div>
    </div>
  );
};

export default WorkLogDetail;

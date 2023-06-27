import React from "react";
import "../Styles/work_log_ex_modal.css";
import "../Styles/modal.css";
import { AiOutlineClose } from "react-icons/ai";

const WorkLogExModal = ({ setModalOpen }, props) => {
  const ExToClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="WorkLogExModal-container" onCLick={ExToClose}>
      <div className="modal-body3" onClick={(e) => e.stopPropagation()}>
        <button type="submit">
          <AiOutlineClose className="closeBtn" onClick={ExToClose} />
        </button>
        {props.children}
        <div className="work_log_ex-item-div">
          <div className="ex-detail-modal">버그 수정 사항</div>
          <div className="ex-in-modal">버그 수정은 먹는겁니다.</div>
          <button type="submit" className="delete-btn">일지 삭제</button>
        </div>
      </div>
    </div>
  );
};

export default WorkLogExModal;

import React from "react";
import "../Styles/work_log_write.css";

const WorkLogWrite = () => {
  return (
    <div className="workLogWrite-container">
      <div className="workLogWrite-user">
        <span className="workLogWrite-user-text">박민규</span>
        <span className="workLogWrite-email-text">(mingyu9570@gmail.com)</span>
      </div>
      <div className="workLogWrite-wr">
        <span className="workLog-text">일지 작성</span>
        <div className="workLog-inputs">
        <input
          type="text"
          name="workLogWrite-title"
          className="workLogWrite-title"
          placeholder="제목을 입력하세요."
        />

        <input
          type="text"
          name="workLogWrite-day"
          className="workLogWrite-day"
          placeholder="날짜를 입력하세요."
        />

        <input
          type="text"
          name="workLogWrite-input"
          className="workLogWrite-input"
          placeholder="일지 작성..."
        />

        <button type="submit" className="workLogWrite-btn">일지 작성</button>
        </div>
      </div>
    </div>
  );
};

export default WorkLogWrite;

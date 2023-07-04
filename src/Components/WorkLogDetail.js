import React, { useState, useEffect } from "react";
import axios from "axios";
import WorkLogExModal from "./WorkLogExModal";
import "../Styles/work_log_detail.css";

const WorkLogDetail = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [nick, setNick] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetchWorkLogDetail();
  }, []);

  const fetchWorkLogDetail = async () => {
    try {
      const res = await axios.post("http://localhost/api/reportdata_api.php");
      setTitle(res.data);
      setNick(res.data);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

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
          {title.map((user) => (
            <span className="ex-detail" key={user.id}>{user.title}</span>
          ))}
          {nick.map((user) => (
            <span className="ex-user" key={user.id}>{user.userNickname}</span>
          ))}
          {nick.map((user) => (
             <span className="ex-day" key={user.id}>{user.create_at}</span>
          ))}
        </div>
        {modalOpen && <WorkLogExModal setModalOpen={setModalOpen} />}
      </div>
    </div>
  );
};

export default WorkLogDetail;

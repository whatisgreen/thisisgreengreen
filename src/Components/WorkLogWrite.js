import React, {useState, useEffect} from "react";
import axios from "axios";
import "../Styles/work_log_write.css";

const WorkLogWrite = () => {

  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const contentChange = (e) => {
    setContent(e.target.value);
  }

  const titleChange = (e) => {
    setTitle(e.target.value);
  }

  const dateChange = (e) => {
    setDate(e.target.value);
  }

  useEffect(() => {
    fetchWorkLog();
  }, []);

  const handleCreateWorkLog = async () => {
    try {
      const res = await axios.post('http://localhost/api/reportdata_api.php', {
        title: title,
        date: date,
        content: content,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const fetchWorkLog = async () => {
    try {
      const res = await axios.post('http://localhost/api/reportdata_api.php');
      setNick(res.data);
      setEmail(res.data);
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div className="workLogWrite-container">
      <div className="workLogWrite-user">
        {nick.map((user) => (
          <span className="workLogWrite-user-text" key={user.id}>{user.userNickname}</span>
        ))}
        {email.map((user) => (
          <span className="workLogWrite-email-text" key={user.id}>({user.userEmail})</span>
        ))}
      </div>
      <div className="workLogWrite-wr">
        <span className="workLog-text">일지 작성</span>
        <div className="workLog-inputs">
        <input
          type="text"
          name="workLogWrite-title"
          className="workLogWrite-title"
          placeholder="제목을 입력하세요."
          onChange={titleChange}
        />

        <input
          type="text"
          name="workLogWrite-day"
          className="workLogWrite-day"
          placeholder="날짜를 입력하세요."
          onChange={dateChange}
        />

        <input
          type="text"
          name="workLogWrite-input"
          className="workLogWrite-input"
          placeholder="일지 작성..."
          onChange={contentChange}
        />

        <button type="submit" className="workLogWrite-btn" onClick={handleCreateWorkLog}>일지 작성</button>
        </div>
      </div>
    </div>
  );
};

export default WorkLogWrite;

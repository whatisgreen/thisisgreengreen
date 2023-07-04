import React from "react";
import "../Styles/work_log_ex_modal.css";
import "../Styles/modal.css";
import { AiOutlineClose } from "react-icons/ai";

const WorkLogExModal = ({ setModalOpen }, props) => {
  const ExToClose = () => {
    setModalOpen(false);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchWorkLogModal();
  }, []);

  const fetchWorkLogModal = async () => {
    try {
      const res = await axios.post("http://localhost/api/reportdata_api.php");
      setTitle(res.data);
      setContent(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="WorkLogExModal-container" onCLick={ExToClose}>
      <div className="modal-body3" onClick={(e) => e.stopPropagation()}>
        <button type="submit">
          <AiOutlineClose className="closeBtn" onClick={ExToClose} />
        </button>
        {props.children}
        <div className="work_log_ex-item-div">
        {title.map((user) => (
          <div className="ex-detail-modal" key={user.id}>{user.title}</div>
        ))}
        {content.map((user) => (
          <div className="ex-in-modal" key={user.id}>{user.content}</div>
        ))}
          <button type="submit" className="delete-btn">일지 삭제</button>
        </div>
      </div>
    </div>
  );
};

export default WorkLogExModal;

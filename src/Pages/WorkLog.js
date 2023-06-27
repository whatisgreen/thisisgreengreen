import React from 'react';
import "../Styles/work_log.css"
import WorkLogDetail from '../Components/WorkLogDetail';
import WorkLogWrite from '../Components/WorkLogWrite';

const WorkLog = () => {
  return (
    <div className="work_log-container">
        <WorkLogDetail />
        <WorkLogWrite />
    </div>
  )
}

export default WorkLog; 
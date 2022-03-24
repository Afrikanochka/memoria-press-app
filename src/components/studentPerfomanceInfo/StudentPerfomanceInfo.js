import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { studentData } from '../studentPerfomanceList/studentData';
import { expectColor } from '../studentsList/studentsData';
import { StudentPerfomanceInfoStyled } from './StudentPerfomanceInfoStyled';

const StudentPerfomanceInfo = ({
  getColor,
  index,
  label,
  score,
  speed,
  total,
  expSpeed,
  concept,
  date,
  abcent,
  absent,
}) => {
    const checkboxId = uuidv4(); 

    const selected = typeof abcent === 'boolean' ? abcent : absent;
  
    console.log("studentData", studentData);
    console.log("index", index);

    return (
        <StudentPerfomanceInfoStyled>
        <td className="studentPerfInfo_data">{index + 1}.</td>
        <td className="studentPerfInfo_data">{label}</td>
        <td className="studentPerfInfo_data">
          <span className={getColor(score)}>{score}</span>
        </td>
        <td className="studentPerfInfo_data">
          <span className={expectColor['Below Expected']}>{speed}</span>
        </td>
        <td className="studentPerfInfo_data">{total}</td>
        <td className="studentPerfInfo_data">{expSpeed}</td>
        <td className="studentPerfInfo_data">{concept}</td>
        <td className="studentPerfInfo_data">{date}</td>
        <td className="studentPerfInfo_data">
          <input
            className="studentPerfInfo_input checked"
            id={checkboxId}
            type="checkbox"
            defaultChecked={selected}
          />
          <label htmlFor={checkboxId} />
        </td>
      </StudentPerfomanceInfoStyled> 
    );
}

export default StudentPerfomanceInfo;
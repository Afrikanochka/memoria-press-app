import React from 'react';
import { studentData } from './studentData';
import StudentPerfomanceInfo from '../studentPerfomanceInfo/StudentPerfomanceInfo';
import { StudentPerfomanceListStyled } from './StudentPerfomanceListStyled';

const StudentPerfomanceList = ({ 
  tests,
  getColor,
 }) => {
   console.log('tests', tests);
    return (
        <StudentPerfomanceListStyled>
        <table className="studentPerfList_table" >
        <thead>
          <tr className="studentPerfList">
            {studentData.map((item, index) => (
              <th className="studentPerfList_data" key={index}>
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="studentPerfList_body">
          {tests.map((student, index) => (
            <StudentPerfomanceInfo key={index} {...student} index={index} getColor={getColor} />
          ))}
        </tbody>
      </table>
        </StudentPerfomanceListStyled>
    );
}

export default StudentPerfomanceList;
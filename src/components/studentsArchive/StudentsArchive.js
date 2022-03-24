import React from 'react';
import StudentsArchiveList from '../studentsArchiveList/StudentsArchiveList';
import { StudentsArchiveStyled } from './StudentsArchiveStyled';

const StudentsArchive = ({ students, parents, studentsData }) => {
    console.log('studentsData', studentsData)

    return (
      <StudentsArchiveStyled>
          <h2 className="studentsArchive_title">
            ARCHIVED
          </h2>
        <table className="studentsArchive_table">
      
        {students.map(
          (student, index) => index < 2 && <StudentsArchiveList key={index} {...student} />,
        )}       
      
    </table>
    </StudentsArchiveStyled>
    );
}

export default StudentsArchive;
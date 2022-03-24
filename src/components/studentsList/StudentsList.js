import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { studentsData } from './studentsData';
import StudentsInfo from '../studentsInfo/StudentsInfo';
import StudentsArchive from '../studentsArchive/StudentsArchive';
import Pagination from '../pagination/Pagination';
import { StudentsListStyled } from './StudentsListStyled';
import sprite from '../../images/sprite.svg';

const StudentsList = ({
    students,
    page,
    totalPages,
    limit,
    setLimit,
    changeSort,
    onChangePage,
    toggleSelect,
}) => {

    const data = ['name', 'class', 'score', 'speed'];
    const sortTable = field => {
      if (data.includes(field)) {
        changeSort(field);
      }
    };
  console.log('students', students)
    const checkboxId = uuidv4(); 

    return (
      <StudentsListStyled>
        <div className='studentsList'>
      {students.length > 0 && (
        <>
          <table className="studentsList_table" >
            <thead>
              <tr>
                <th className="studentsList_data">
                  <input className="studentsList_input" id={checkboxId} type="checkbox" />
                  <label htmlFor={checkboxId} />
                </th>
                {studentsData.map((item, index) => (
                    <th
                    className="studentsList_data"
                    key={index}
                    onClick={() => sortTable(item.field)}>
                    {item.name}
                    <svg className="studentsList_icon">
                      <use href={sprite + '#icon-frame'}></use>
                    </svg>
                  </th>
                ))}
              </tr>
            </thead>
              {students.map((student, index) => (
                <StudentsInfo
                  key={index}
                  {...student}
                  index={index}
                  toggleSelectStudent={toggleSelect}
                />
              ))}           
          </table>
          <StudentsArchive students={students} studentsData={studentsData} />
          <Pagination
            page={page}
            onChangePage={onChangePage}
            totalPages={totalPages}
            limit={limit}
            setLimit={setLimit}
            count={students.length}
          />
        </>
      )}
        </div>
        </StudentsListStyled>
    );
}

export default StudentsList;
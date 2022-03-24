import React, { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';
import { getStudents } from '../../services/api';
import StudentsList from '../studentsList/StudentsList';
import { StudentsStyled } from './StudentsStyled';
import useFetching from './useFetching';

const Students = () => {

    const [result, setResult] = useState({
        students: [],
        totalPages: 0,
      });
      const [limit, setLimit] = useState(10);
      const [page, setPage] = useState(1);
      const [search, setSearch] = useState('');
      const [sort, setSort] = useState({
        sortBy: '',
        sortDir: 1,
      });
    
      const changeSort = sortBy => {
        if (sort.sortBy !== sortBy) {
          setSort({ sortBy, sortDir: 1 });
        } else {
          const newSortDir = sort.sortDir === 1 ? -1 : 1;
          setSort({ sortBy, sortDir: newSortDir });
        }
      };
    console.log('result', result)
      const [fetchStudents, isStudentsLoading] = useFetching(
        async (limit, page) => {
          const { sortBy, sortDir } = sort;
          const { data, totalPages } = await getStudents({
            limit,
            page,
            sortBy,
            sortDir,
            search,
          });
          setResult({
            students: data,
            totalPages,
          });
        },
      );
    
      useEffect(() => {
        fetchStudents(limit, page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [page, limit, sort, search]);
    
      const onChangePage = value => {
        const newValue = page + value;
        if (newValue === 0 || newValue > result.totalPages) {
          return;
        }
        setPage(newValue);
      };
    
      const toggleSelect = (index, selected) => {
        const newStudents = result.students.map((item, idx) => {
          if (idx === index) {
            return { ...item, selected };
          }
          return item;
        });
        setResult({ ...result, students: newStudents });
      };
    

    return (
       <StudentsStyled>
       <div className="students">
           <h1 className="studentsTitle">Students</h1>
           <label className="studentsLabel">
               <input 
               type="name" 
               className="studentsInput"
               placeholder='Enter Student Name, Parent or ID here'
                />
                <svg className="searchIcon" width="16" height="16">
                 <use href={sprite + '#icon-search'}></use>
                </svg>
            </label>
            <button className="studentsBtnExport"
            type="button">
                <svg className="exportIcon" width="16" height="16">
                 <use href={sprite + '#icon-export'}></use>
                </svg>
                Export CSV
            </button>
        </div>
        {isStudentsLoading ? (
        <div>
        
        </div>
      ) : (
        <StudentsList 
         students={result.students}
         page={page}
         totalPages={result.totalPages}
         onChangePage={onChangePage}
         limit={limit}
         setLimit={setLimit}
         changeSort={changeSort}
         toggleSelectStudent={toggleSelect}
        />
      )}
        </StudentsStyled>
    );
}

export default Students;
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import sprite from '../../images/sprite.svg';
import ToggleModal from '../toggleModal/ToggleModal';
import { StudentsArchiveListStyled } from './StudentsArchiveListStyled';
 
const StudentsArchiveList = ({
     id, 
     name, 
     score, 
     speed, 
     parents,
     class: studentClass, 
     toggleModal
}) => {
    const checkboxId = uuidv4(); 

    return (
      <StudentsArchiveListStyled>
      <tr className="studentsArchiveList_body">
      <td className="studentsArchiveList_data">
        <input className="studentsArchiveList_input" id={checkboxId} type="checkbox" />
        <label htmlFor={checkboxId} />
      </td>
      <td className="studentsArchiveList_data disabledColor">{name}</td>
      <td className="studentsArchiveList_data disabledColor">{id}</td>
      <td className="studentsArchiveList_data disabledColor">{studentClass}</td>
      <td className="studentsArchiveList_data disabledColor">{score}</td>
      <td className="studentsArchiveList_data disabledColor">{speed}</td>
      {!parents.length ? (
        <td className="studentsArchiveList_data disabledColor">No Parents Added</td>
      ) : (
        <td className="studentsArchiveList_data disabledColor">
           <svg className="studentsArchiveList_icon">
              <use href={sprite + '#icon-info'}></use>
          </svg> 
          {parents.join(', ')}</td>
      )}
       <td className="studentsArchiveList_data">
          <ToggleModal toggleModal={toggleModal} />
        </td>
    </tr>  
    </StudentsArchiveListStyled>
    );
}

export default StudentsArchiveList;
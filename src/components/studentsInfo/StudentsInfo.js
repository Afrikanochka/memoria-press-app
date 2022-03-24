import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { expectColor, scoreColor } from '../studentsList/studentsData';
import { StudentsInfoStyled } from './StudentsInfoStyled';
import sprite from '../../images/sprite.svg';
import StudentPerfomance from '../studentPerfomance/StudentPerfomance';
import ToggleModal from '../toggleModal/ToggleModal';

const getColor = score => {
    const value = Math.floor(parseInt(score) / 10) * 10;
    const scoreValue = value < 50 ? '50%' : `${value}%`;
    return scoreColor[scoreValue];
  };

const StudentsInfo = ({
  name,
  id,
  index,
  score,
  speed,
  parents,
  tests,
  class: studentClass,
  toggleSelect,
  selected = false,
}) => {
    const [info, setInfo] = useState(false);
    const toggleModal = () => {
      setInfo(!info);
    };
  
    const toggleCheckbox = () => {
      toggleSelect(index, !selected);
    };
  
    const checkboxId = uuidv4();
    return (
        <StudentsInfoStyled >   
        <tr className={`studentsInfo_body ${selected ? 'selectedInfo' : ''}`}>
          <td className="studentsInfo_data">
            <input
              className="studentsInfo_input"
              id={checkboxId}
              type="checkbox"
              checked={selected}
              onChange={toggleCheckbox}
            />
            <label htmlFor={checkboxId} />
          </td>
  
          <td className="studentsInfo_data">{name}</td>
          <td className="studentsInfo_data">{id}</td>
          <td className="studentsInfo_data">{studentClass}</td>
          <td className="studentsInfo_data">
            <span className={getColor(score)}>{score}</span>
          </td>
          <td className="studentsInfo_data">
            <span className={expectColor[speed]}>{speed}</span>
          </td>
          {!parents.length ? (
            <td className="studentsInfo_data">No Parents Added</td>
          ) : (
            <td className="studentsInfo_data">
              <svg className="studentsInfo_icon">
                  <use href={sprite + '#icon-info'}></use>
              </svg>
              {parents.join(', ')}
          
              </td>
          )}
          <td className="studentsInfo_data">
          <ToggleModal toggleModal={toggleModal} />
        </td>
        </tr>
        {info && (
          <tr>
            <td>
              <StudentPerfomance
                name={name}
                id={id}
                score={score}
                speed={speed}
                tests={tests}
                getColor={getColor}
              />
            </td>
          </tr>
        )}
      </StudentsInfoStyled>
    
    );
}

export default StudentsInfo;

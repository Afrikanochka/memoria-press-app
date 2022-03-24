import React from 'react';
import { expectColor } from '../studentsList/studentsData';
import sprite from '../../images/sprite.svg';
import StudentPerfomanceList from '../studentPerfomanceList/StudentPerfomanceList';
import { StudentPerfomanceStyled } from './StudentPerfomanceStyled';

const StudentPerfomance = ({ 
    name, 
    id, 
    score, 
    speed, 
    tests, 
    getColor }) => {

    return (

      <StudentPerfomanceStyled>
        <div className="studentPerfomance">
        <p className="studentPerfomance_name">
          Student: 
          <span className="studentPerfomance_value">{name}
          </span> 
        </p>
        <p className="studentPerfomance_name">
          ID: 
          <span className="studentPerfomance_value">{id}
          </span> 
        </p>
      </div>
      <div className="studentPerfomance_nav">
        <ul className="studentPerfomance_navList">
          <li className="studentPerfomance_navItem">
            All concepts
            <svg className="studentPerfomance_icon">
                  <use href={sprite + "#icon-arrow"} />
                </svg>
          </li>
          <li className="studentPerfomance_navItem">
            All score
            <svg className="studentPerfomance_icon">
                  <use href={sprite + "#icon-arrow"} />
                </svg>
          </li>
          <li className="studentPerfomance_navItem">
            All speed
            <svg className="studentPerfomance_icon">
                  <use href={sprite + "#icon-arrow"} />
                </svg>
          </li>
        </ul>
        <div className="studentPerfomance_Text">
          <p className="studentPerfomanceText">Selected period</p>
          <svg className="studentPerfomance_calendar" width="16" height="16">
            <use href={sprite + '#icon-calendar'}></use>
          </svg>
        </div>
        <div className="studentPerfomance_svg">
          <svg className="icon">
            <use href={sprite + '#icon-update'}></use>
          </svg>
        </div>
      </div>

      <hr className="studentPerfomance_line" />

      <div className="studentPerfomance_score">
        <p className='studentPerfomance_s'>SCORE</p>

        <ul className="studentPerfomance_list">   
        <li className="studentPerfomance_item">
          <div className="studentPerfomance_color blue"></div>
          <p className="studentPerfomance_text blue">90%+ ACCURACY</p>
        </li>
        <li className="studentPerfomance_item">
          <div className="studentPerfomance_color green"></div>
          <p className="studentPerfomance_text green">80-89% ACCURACY</p>
        </li>
        <li className="studentPerfomance_item">
          <div className="studentPerfomance_color yellow"></div>
          <p className="studentPerfomance_text yellow">50-79% ACCURACY</p>
        </li>
        <li className="studentPerfomance_item">
          <div className="studentPerfomance_color red"></div>
          <p className="studentPerfomance_text red">BELOW 50% ACCURACY</p>
        </li>
        </ul>
      </div>

      <div className="studentPerfomance_speed">
        <p className='studentPerfomance_s'>SCORE</p>

        <ul className="studentPerfomance_list">       
        <li className="studentPerfomance_item">
          <div className="studentPerfomance_color blue"></div>
          <p className="studentPerfomance_text blue">ABOVE EXPECTED</p>
        </li>
        <li className="studentPerfomance_item">
          <div className="studentPerfomance_color green"></div>
          <p className="studentPerfomance_text green">AS EXPECTED</p>
        </li>
        <li className="studentPerfomance_item">
          <div className="studentPerfomance_color red"></div>
          <p className="studentPerfomance_text red">BELOW EXPECTED</p>
        </li>
        </ul>
      </div>

      <StudentPerfomanceList tests={tests} getColor={getColor} />

      <hr className="studentPerfomance_line"/>
      
      <div className="studentPerf_score">
        <div className="studentPerf_text">
          <p>Average</p>
        </div>
        <div className="studentPerf_score ">
          <span className={getColor(score)}>
            {score}
          </span>
        </div>
        <div className="studentPerf_speed ">
          <span className={expectColor[speed]}>
            {speed}
          </span>
        </div>
      </div>
      </StudentPerfomanceStyled>
    );
};

export default StudentPerfomance;
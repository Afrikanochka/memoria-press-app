import React from 'react';
import sprite from "../../images/sprite.svg";
import { SubNavigationStyled } from './SubNavigationStyled';

const subNavigation = () => {
    const subNavData = [
        { text: 'Show all' },
        { text: 'All grades' },
        { text: 'All classes' },
        { text: 'Av.Score' },
        { text: 'Av.Speed' },
        { text: 'All Classes' }
    ];

    return (
        <SubNavigationStyled>
            <ul className="subNavList">
               {subNavData.map(item => (
                    <li className="subNavItem" key={item.text}>
                    {item.text}
                    <svg className="subNavIcon">
                  <use href={sprite + "#icon-arrow"} />
                </svg>
                </li>
               ))}
            </ul>
            <button className="subNavBtn" type="button" >
            <svg className="subNavBtnIcon">
                <use href={sprite + "#icon-close"} />
            </svg>
            clear all
            </button>
        </SubNavigationStyled>
    );
}

export default subNavigation;
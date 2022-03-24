import React from 'react'
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
import { NavigationStyled } from './NavigationStyled';
import sprite from "../../images/sprite.svg";
import avatar from "../../images/avatar.png";

const Navigation = () => {
    return (
        <>
        <NavigationStyled>
            <div className="subtitle">
            School 1
            <svg className="subtitleIcon">
                  <use href={sprite + "#icon-arrow"} />
                </svg>
            </div>
            <nav className="navigation">
            <ul className="navigationList">
                {mainRoutes.map(route => (
                    <li className="navigationItem" key={route.path}>
                      <NavLink 
                      to={route.path}
                      className={navLink => (navLink.isActive ? "navigationLink_active" : "navigationLink")}
                      >
                          {route.name}
                      </NavLink>
                    </li>
                ))}
            </ul>
            </nav>
            <div className="userLogo">
                <img src={avatar} alt="userAvatar" className="userLogo_img" />
                <svg className="subtitleIcon">
                  <use href={sprite + "#icon-arrow"} />
                </svg>
            </div>
        </NavigationStyled>
        </>
    );
}

export default Navigation;
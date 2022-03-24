import styled from "styled-components";

export const SubNavigationStyled = styled.div`
background: var(--primary-background);
display: flex;
justify-content: center;
align-items: center;
height: 40px;
margin-bottom: 8px;

.subNavList {
    display: flex;
    justify-content: center;
    align-items: center;
}
.subNavItem {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.4;
    color: var(--secondary-color);
    text-transform: uppercase;
    padding: 7.5px 36px 7.5px 12px;
    display: flex;
    align-items: center;
}
.subNavIcon {
    width: 10px;
    height: 5px;
    margin-left: 9.83px;
    fill: var(--secondary-color);
}
.subNavBtnIcon {
    width: 9.33px;
    height: 9.33px;
    margin-right: 9.33px;
    fill: var(--secondary-color);
}
.subNavBtn {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.4; 
    text-transform: uppercase;
    color: var(--secondary-color);
    background: inherit;
    cursor: pointer;
    border: none;
}
`
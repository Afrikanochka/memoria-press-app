import styled from "styled-components";

export const NavigationStyled = styled.div`
 display: flex;
 padding: 20px 0;

.subtitle, .navigationItem {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: var(--primary-color);
    text-transform: uppercase;
    display: flex;
    align-items: center;
}
.subtitle {
    margin-left: 100px;
}
.subtitleIcon {
    width: 10px;
    height: 5px;
    margin-left: 11px;
    fill: var(--primary-color);
}
.navigationList {
    display: flex;
    justify-content: center;
    margin-left: 94px;
}
.navigationLink {
    color: var(--primary-color); 
    margin-right: 28px;
    padding: 6px 12px;
}
.navigationLink_active {
    background: var(--accent-color);
    color: #ffffff;
    margin-right: 28px;
    padding: 6px 12px;
}
.userLogo {
    display: flex;
    align-items: center;
    margin-left: auto;
}

`
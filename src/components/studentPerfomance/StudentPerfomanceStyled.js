import styled from "styled-components";

export const StudentPerfomanceStyled = styled.div`
    height: auto;
    padding: 20px 60px;
    background-color: rgb(242, 242, 242);
    min-width: 1360px;
.studentPerfomance {
    display: flex;
    padding: 20px 0 12.5px 0;
}
.studentPerfomance_name {
    font-weight: 400;
    color: var(--primary-color);
}
.studentPerfomance_value {
    font-weight: 700;
    color: var(--primary-background);
    margin: 0 15px 0 8px;
}
.studentPerfomance_name, .studentPerfomance_value {
    font-size: 14px;
    line-height: 1.4;
    text-transform: uppercase;
}
.studentPerfomance_nav {
    display: flex;
}
.studentPerfomance_navList {
    display:flex;
}
.studentPerfomance_navItem {
    color: var(--primary-background);
    margin-right: 16px;
    display: flex;
    align-items: center;
    padding: 6px 12px;
    border: 1px solid rgba(192, 192, 192, 1);
    background: #FFFFFF;
}
.studentPerfomance_Text {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.4;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: var(--secondary-color);
    border-bottom: 1px solid rgba(192, 192, 192, 1);;
}
.studentPerfomance_score, .studentPerfomance_speed, .studentPerfomance_list {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.4;
}
.studentPerfomance_s {
    color: var(--primary-color);
}
.studentPerfomance_item {
    display: flex;
    align-items: center;
    margin-left: 24px;
}
.studentPerfomance_line {
    border: 1px solid var(--accent-color);
    margin: 12px 0px;
}
.studentPerf_score {
    display: flex;
    align-items: center;
}
.studentPerfomance_navItem, .studentPerf_text, .studentPerf_speed, .studentPerf_score {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.4;
    text-transform: uppercase;  
}
.studentPerf_speed {
    width: 87px;
}
.studentPerf_text {
    color: var(--primary-color);
    margin: 0 12px 0 34px;
    padding: 4px 225px 4px 8px;
}
.studentPerf_score {
    padding: 5px 48px 5px 0px;
    margin-right: 12px;
}
.studentPerfomance_color {
    width: 12px;
    height: 12px;
    border-radius: 40px;
    margin-right: 8px;
}
.studentPerfomance_color.blue {
    background: #4285F4;
}
.studentPerfomance_color.green {
    background: #0F9D58
}
.studentPerfomance_color.yellow {
    background: #E2B534;
}
.studentPerfomance_color.red {
    background: #DB4437;
}
.studentPerfomance_calendar {
    width: 12px;
    height: 13.33px;
    margin-left: 14px;
}
.studentPerfomance_svg {
    display: flex;
    align-items: center;
    margin-left: 190px;
}
.icon {
    width: 14.67px;
    height: 10.67px;
}
    .studentPerfomance_icon {
        width: 8.33px;
        height: 4.17px;
        fill: var(--primary-background);
        margin-left: 9.83px;
    }
`
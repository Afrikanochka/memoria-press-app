import styled from "styled-components";

export const StudentsListStyled = styled.div`
.studentsList_table {
    min-width: 1360px;
    background: #F9F9F9;
box-shadow: 0px 1px 4px rgba(60, 52, 135, 0.15);
}
.studentsList_input {
    width: 16px;
    height: 16px;
}
    .studentsList_data {
        text-align: start;
        opacity: 0.8;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
        color: var(--primary-color);
    }
    .studentsList_icon {
        width: 6.12px;
        height: 12px;    
    }
    .studentsList_body {
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(60, 52, 135, 0.15);
    }
    tbody tr:nth-child(odd) {
        background-color: rgba(255, 255, 255, 1);
  }
    tbody tr:nth-child(even) {
        background-color: #f9f9f9;
  }
`
import styled from "styled-components";

export const StudentsStyled = styled.div`
    .students {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }
    .studentsTitle {
        font-weight: 700;
        font-size: 20px;
        line-height: 1.2;
        text-transform: uppercase;
        color: var(--primary-background);
    }
    .studentsLabel {
        width: 499px;
        height: 32px;
        background: #F2F2F2;
        border: 1px solid transparent;
    }
    .studentsInput {
        width: 447px;
        padding: 6px 12px;
        border: none;
        background: #F2F2F2;
    }
    .searchIcon {
        width: 11.66px;
        height: 11.66px;
        margin-left: 14px;
    }
    .studentsBtnExport {
        display: flex;
        align-items: center;
        margin-top: 16px;
        margin-right: 133px;
        height: 32px;
        width: 110px;
        text-align: end;
        background-color: transparent;
        text-transform: uppercase;
        cursor: pointer;
        outline: none;
        border: none;
        font-weight: 700;
        font-size: 12px;
        line-height: 1.4;
        color: var(--secondary-color);
    }
    .exportIcon {
        width: 9.33px;
        height: 11.33px;
        margin-right: 9.33px;
    }
`
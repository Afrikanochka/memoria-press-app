import styled from "styled-components";

export const PaginationStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .paginationPage{
        display: flex;
        justify-content: center;
        align-items: center;  
    }
    .paginationSelect {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 16px;  
    }
    .paginationText {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
        color: var(--primary-background);
    }
    .paginationIcon {
        width: 9.73px;
        height: 16.5px;
        margin: 0 32px 0 24px;
    }
    .paginationIcon_arrow {
        width: 10px;
        height: 5px;
        margin: 0 24px 0 11px;
        fill: var(--primary-background);
    }
`


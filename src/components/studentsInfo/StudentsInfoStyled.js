import styled from "styled-components";

export const StudentsInfoStyled = styled.tbody`
    .studentsInfo_input {
        width: 16px;
        height: 16px;
    }
    .studentsInfo_data {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
        color: #828282;     
        position: relative;
        border: none;
        padding: 0;
        height: 100%;
        padding-left: 10px;
    }
    .studentsInfo_icon {
        width: 13.33px;
        height: 13.33px;
        margin-right: 7.33px;
    }
    .studentsInfo_body.selectedInfo {
        background-color: #f2f2f2;
    }
    .studentsInfo_body {
        position: relative;
        height: 48px;
    }
    .red {
        color: rgba(219, 68, 55, 1);
  }
   .yellow {
        color: rgba(226, 181, 52, 1);
  }
  .green {
        color: rgba(15, 157, 88, 1);
  }
  .blue {
        color: rgba(66, 133, 244, 1);
  }
`
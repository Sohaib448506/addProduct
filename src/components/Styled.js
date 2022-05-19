import styled from "styled-components";

const Styled = styled.div`
  div.ant-checkbox-group {
    display: flex;

    > label.ant-checkbox-wrapper {
      font-size: 14px;
      align-items: center;
      margin: 10px;
      width: auto;
      padding: 0 15px;
      border: 1px solid rgb(217, 217, 217);
      border-right-width: 0;

      > span:first-child {
        display: none;
      }
      > span:last-child {
        padding: 0;
      }
    }

    > label.ant-checkbox-wrapper-checked {
      border: 1px solid #1890ff;
    }
    > label.ant-checkbox-wrapper-checked + label.ant-checkbox-wrapper {
      border-left-width: 0;
    }

    > label.ant-checkbox-wrapper:last-child {
      border-right-width: 1px;
    }
  }
`;

export default Styled;

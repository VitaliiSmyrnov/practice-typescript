import styled from "styled-components";

export const AdditionalWrapper = styled.div`
  padding: 10px;

  text-align: left;
  border-bottom: 1px solid #383838;

  p {
    font-weight: 500;

    margin-bottom: 10px;
  }

  ul {
    text-decoration: underline;
    color: darkblue;
    padding-left: 10px;

    li:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;

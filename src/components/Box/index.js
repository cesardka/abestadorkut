import styled from "styled-components";

export const Box = styled.div`
  background: var(--white);
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 16px;

  .boxLink {
    font-size: 14px;
    color: var(--primaryText);
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: var(--gray1);
    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: var(--borderBottomColor);
  }

  input {
    width: 100%;
    background-color: var(--gray4);
    color: var(--gray1);
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: var(--borderRadiusMax);
    ::placeholder {
      color: var(--gray1);
      opacity: 1;
    }
  }

  button {
    border: 0;
    padding: 8px 12px;
    color: var(--white);
    border-radius: var(--borderRadiusMax);
    background-color: var(--primaryElement);
  }

  img {
    border-radius: 8px;
  }
`;

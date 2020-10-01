import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 66px;
  max-width: 1100px;
  border-radius: 20px;
  transition: all 0.2s;

  > img {
    width: 549px;
    height: 366px;
    border-radius: 20px;
  }
`;

export const Content = styled.div`
  max-width: 552px;
  margin-left: 72px;
  color: #161b3d;

  a {
    font-size: 72px;
    color: #161b3d;
    font-weight: bold;
    line-height: 98.06px;
    transition: all 0.7s;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      text-decoration-color: #161b3d;
    }
  }

  > p {
    max-width: 457px;
    font-weight: 400;
    line-height: 21.79px;
    margin-bottom: 16px;
    text-align: justify;
  }
`;

export const Owner = styled.div`
  p {
    line-height: 21px;
    font-size: 16px;
  }

  span {
    font-weight: bold;
  }
`;

export const Likes = styled.div`
  margin-top: 16px;

  button {
    background: none;
    padding: 0;
    margin: 0;
    border: 0;
  }

  button + button {
    margin-left: 16px;
  }
`;

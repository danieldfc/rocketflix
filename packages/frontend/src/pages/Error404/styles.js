import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: var(--rocketseat-color);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 120px;
    line-height: 163px;
    font-weight: bold;
    color: var(--white-color);
    margin: 0;
  }

  p {
    font-size: 16px;
    line-height: 25px;
    font-weight: 700;
    color: var(--white-color);
    margin: 0;
  }

  > a {
    margin-top: 36px;
    width: 400px;
    height: 45px;
    border-radius: 4px;
    padding: 8px;
    background: var(--white-color);
    color: var(--purple-color);
    font-weight: bold;
    font-size: 16px;
    border: 1px solid var(--white-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    transition: all 0.5s;
    text-align: center;

    &:hover {
      background: var(--purple-color);
      color: var(--white-color);
      border: 1px solid var(--purple-color);
    }
  }
`;

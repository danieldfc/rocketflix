import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: var(--rocketseat-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 336px;
    height: 70px;
    margin-bottom: 48px;
  }

  form {
    width: 340px;

    button {
      margin-top: 20px;
    }
  }

  > a {
    margin-top: 120px;
    width: 340px;
    border-radius: 4px;
    padding: 8px;
    margin-top: 36px;
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

export const Separator = styled.div`
  ::before {
    content: '';
    position: absolute;
    top: 69.6%;
    width: calc(26% - 25px);
    right: 50%;
    left: 37.8%;
    height: 2px;
    justify-content: center;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  }
`;

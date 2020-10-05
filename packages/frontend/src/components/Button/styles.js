import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  border-radius: 4px;
  padding: 8px;
  margin-top: 36px;
  background: var(--purple-color);
  color: var(--white-color);
  font-weight: bold;
  font-size: 16px;
  border: 1px solid var(--purple-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: all 0.5s;

  &:hover {
    background: var(--white-color);
    color: var(--purple-color);
    border: 1px solid var(--white-color);
  }
`;

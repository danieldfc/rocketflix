import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 66px;
  max-width: 1100px;

  > div {
    .img-skeleton {
      width: 500px;
      height: 366px;
      border-radius: 20px;
      margin-right: 72px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Content = styled.div`
  .row-skeleton {
    width: 528px;
    height: 80px;
    margin-top: 24px;

    & + .row-skeleton {
      margin-top: 5px;
    }

    &:nth-child(3) {
      width: 100%;
      height: 68px;
      margin-bottom: 20px;
    }

    &:nth-child(4) {
      width: 42%;
      height: 24px;
      margin-bottom: 10px;
    }

    &:nth-child(5) {
      width: 22%;
      height: 48px;
    }
  }
`;

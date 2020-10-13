import React from 'react';

import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import { Container, Content, Wrapper } from './styles';

function SynopsePanel() {
  return (
    <Container>
      <Panel>
        <Wrapper>
          <Skeleton className="img-skeleton" />
          <Content>
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </Content>
        </Wrapper>
      </Panel>
    </Container>
  );
}

export default SynopsePanel;

import React from 'react';

import { VideoCarousel, Synopsis, Header } from '../../components';

import { RFHomeContainer } from './styles';

const video = {
  title: 'CODE/DROPS #25',
  description:
    'Recentemente o time do React Native anunciou a versão 0.62 à comunidade com adições que deixaram a comunidade extremamente empolgada.',
  thumbnail:
    'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  url: 'code-drops-25',
  user: {
    name: 'Daniel Felizardo',
  },
};

export default function Home() {
  return (
    <RFHomeContainer>
      <Header />
      <Synopsis video={video} />
      <VideoCarousel />
    </RFHomeContainer>
  );
}

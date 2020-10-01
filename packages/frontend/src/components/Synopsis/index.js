import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import likeImg from '../../assets/img/like.svg';
import dislikeImg from '../../assets/img/dislike.svg';

import LoaderSynopis from './LoaderSynopsis';

import { Container, Content, Owner, Likes } from './styles';

export default function Synopsis({ video }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      {loading ? (
        <LoaderSynopis />
      ) : (
        <>
          <img src={video.thumbnail} alt={video.title} />
          <Content>
            <Link to={`/videos/${video.url}`}>{video.title}</Link>
            <p>{video.description}</p>
            <Owner>
              <p>
                por&nbsp;
                <span>{video.user.name}</span>
                &nbsp;há um ano
              </p>
            </Owner>
            <Likes>
              <button type="button">
                <img src={likeImg} alt="Like" />
              </button>
              <button type="button">
                <img src={dislikeImg} alt="Dislike" />
              </button>
            </Likes>
          </Content>
        </>
      )}
    </Container>
  );
}

Synopsis.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnail: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

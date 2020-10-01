import React from 'react';
import { useTransition } from 'react-spring';
import PropTypes from 'prop-types';

import Toast from './Toast';

import { Container } from './styles';

export default function ToastContainer({ messages }) {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item: message, key, props }) => (
        <Toast key={key} style={props} message={message} />
      ))}
    </Container>
  );
}

ToastContainer.propTypes = {
  messages: PropTypes.arrayOf([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: 'success' || 'error' || 'info',
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ]),
};

ToastContainer.defaultProps = {
  messages: [],
};

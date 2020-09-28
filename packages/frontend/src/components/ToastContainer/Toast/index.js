import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheck, FiInfo, FiXCircle } from 'react-icons/fi';

import { useToast } from '../../../hooks/toast';

import { Container } from './styles';

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheck size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toast = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;

import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import ToastContainer from '../components/ToastContainer';

const ToastContaxt = createContext({});

function ToastProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback(({ type, description, title }) => {
    const id = uuidv4();

    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages(oldMessages => [...oldMessages, toast]);
  }, []);

  const removeToast = useCallback(id => {
    setMessages(oldMessages =>
      oldMessages.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToastContaxt.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContaxt.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContaxt);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

ToastProvider.propTypes = {
  children: PropTypes.oneOf([PropTypes.func, PropTypes.element]),
};

ToastProvider.defaultProps = {
  children: () => {},
};

export { useToast, ToastProvider };

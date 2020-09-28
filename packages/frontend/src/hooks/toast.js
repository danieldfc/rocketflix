import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer } from '../components';

const ToastContaxt = createContext({});

const ToastProvider = ({ children }) => {
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
};

function useToast() {
  const context = useContext(ToastContaxt);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { useToast, ToastProvider };

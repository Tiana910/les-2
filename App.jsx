import React, { useEffect, useState } from 'react';
import './App.css';
import { AUTHOR } from './components/constants';
import { FormMes } from './components/Form/FormMes'
import { MessageList } from './components/MessageList/MessageList';

export const App = () => {
  const [messages, setMessages] = useState([])

   useEffect(() => {
    // console.log('change messages');
    if (messages.length > 0 && messages[messages.length - 1].value === '') {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: AUTHOR.bot,
            value: " empty message"
          }
        ]);
      }, 1000);
      return () => {
        clearTimeout(timeout)
      }
    }

    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === AUTHOR.user
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: AUTHOR.bot,
            value: ' Wait answer',
          }
        ]);
      }, 1500);
      return () => clearTimeout(timeout)
    }
  }, [messages])

   const addMessage = (value) => {
    setMessages([
      ...messages, 
      {
        author: AUTHOR.user,
        value,
        },
      ]);
    };

  return (
  <>
    <MessageList messages={messages} />
    <FormMes addMessage={addMessage} />
  </>
  );
};


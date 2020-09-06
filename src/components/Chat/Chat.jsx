import React, { useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Reducer from './Reducer';

const data = {
  users: [
    {
      id: 1,
      name: 'john smith',
    },
    {
      id: 2,
      name: 'mike pirson',
    },
  ],
  messages: [
    {
      userId: 1,
      body: 'hi',
    },
    {
      userId: 2,
      body: 'hi',
    },
    {
      userId: 1,
      body: 'how are you',
    },
    {
      userId: 2,
      body: 'fine, so are you?',
    },
    {
      userId: 1,
      body: 'fine',
    },
  ],
};

const getData = () => data;

function Chat(props) {
  const [state, dispatch] = useReducer(Reducer, {
    users: new Map(),
    messages: [],
  });
  const newMsg = () => {
    dispatch({
      type: 'NEW MSG',
      message: {
        userId: 1,
        body: 'fine',
      },
    });
  };
  useEffect(() => {
    const data = getData();
    dispatch({
      type: 'GET_SUCCESS',
      data,
    });
  }, []);

  const { messages } = state;
  return (
    <ul>
      {messages.map((i, index) => (
        <li key={index}>{JSON.stringify(i)}</li>
      ))}
      <button onClick={newMsg}>click</button>
    </ul>
  );
}

export default Chat;

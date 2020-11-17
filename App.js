import React from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
Amplify.configure(awsconfig);

import Home from './src/screens/home'

export default function App() {
  return (
    <Home/>
  );
}


import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const isValid = useSelector(state => state.student.isValid);

  const Routes = createRouter(isValid);

  return <Routes />;
}

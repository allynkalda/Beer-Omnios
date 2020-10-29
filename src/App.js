import './App.css';
import React from 'react';
import { StateProvider } from './store/state'
import CardBlock from './components/CardBlock';

function App() {

  return (
    <StateProvider>
      <CardBlock />
    </StateProvider>
  );
}

export default App;

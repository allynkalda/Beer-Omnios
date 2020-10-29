import React, { createContext, useContext, useReducer } from 'react';
import reducers from './reducers';


const StateContext = createContext();

const initialState = {
  beers: {},
  abvData: 11,
  ibuData: 80,
};

const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducers, initialState)}>
    {children}
  </StateContext.Provider>
);

const useStateValue = () => useContext(StateContext);

export { StateContext, StateProvider, useStateValue };




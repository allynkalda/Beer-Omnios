const reducers = (state, action) => {

    switch (action.type) {
      case 'set_beers':
        return {
          ...state,
          beers: action.beers
        };
        case 'set_ibu':
            return {
              ...state,
              ibuData: action.ibuData
            };
        case 'set_abv':
            return {
                  ...state,
                  abvData: action.abvData
                };
      default:
        return state;
    }
  };
  
  export default reducers;
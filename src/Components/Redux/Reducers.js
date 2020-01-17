const initialState = {
    personData: []
  };
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "PERSONARRAY": {
        console.log("In reducer PERSONARRAY", action.value);
        return {
          ...state,
        //   personData: action.value
          personData: state.personData.concat(action.value)
        };
      }
      default:
        return state;
    }
  }
  export default rootReducer;
const initialState = {
  cardData: []
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CARDARRAY": {
      console.log("in reducer CARDARRAY", action.value);
      return {
        ...state,
        cardData: action.value
      };
    }
    default:
      return state;
  }
}
export default rootReducer;
console.log("store value in reducer");

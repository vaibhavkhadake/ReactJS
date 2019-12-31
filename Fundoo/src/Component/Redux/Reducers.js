const initialState = {
  cardData: [],
  parcardData: []
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
    case "PARTICULARCARDARRAY": {
      console.log("in reducer PARTICULARCARDARRAY", action.value);
      return {
        ...state,
        parcardData: action.value
      };
    }
    default:
      return state;
  }
}
export default rootReducer;
// console.log("store value in reducer");

export function card(payload) {
  return {
    type: "CARDARRAY",
    value: payload
  };
}
export function particularCard(payload) {
  return {
    type: "PARTICULARCARDARRAY",
    value: payload
  };
}
console.log("store value in action");

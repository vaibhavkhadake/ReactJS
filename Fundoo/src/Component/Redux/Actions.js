export function card(payload) {
  return {
    type: "CARDARRAY",
    value: payload
  };
}
console.log("store value in action");

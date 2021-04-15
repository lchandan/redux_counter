export const setIncrement = value => (
console.log('inside Increment Actions--->', value, typeof(value)),
  {
    type: 'INCREMENT',
    payload: value +1
  });

export const setDecrement = value => ({
    type: 'DECREMENT',
    payload: value-1
});
    
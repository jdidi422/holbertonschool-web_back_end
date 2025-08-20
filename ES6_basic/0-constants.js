// Use const for taskFirst variables
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// No change needed for getLast
export function getLast() {
  return ' is okay';
}

// Use let for taskNext variables
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

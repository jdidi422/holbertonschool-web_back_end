export default function taskBlock(trueOrFalse) {
  let task;
  let task2;

  if (trueOrFalse) {
    task = 'I prefer const';
    task2 = 'But sometimes let';
  }

  return [task, task2];
}

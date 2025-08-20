export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  // Les variables du bloc ne sont pas nécessaires, on garde le scope propre
  if (trueOrFalse) {
    // Block-scoped, mais inutilisé pour ne pas affecter l'extérieur
    const _task = true;
    const _task2 = false;
  }

  return [task, task2];
}

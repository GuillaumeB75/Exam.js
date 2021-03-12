/*Ecrire une fonction guess qui prend 2 nombres en paramètres userGuess et secret.
Si userGuess est inférieur à secret la fonction devra afficher: Too small!
Si userGuess est supérieur à secret la fonction devra afficher: Too big!
Si userGuess est égal à secret la fonction devra afficher: You win*/


const userGuess = 10
const secret = 20

function guess(userGuess, secret) {
  let result;
  if (userGuess < secret) {
    result = 'Too small';
  }
  else if (userGuess > secret) {
    result = 'Too big';
  }
  else if (userGuess === secret) {
    result = 'You win';
  }
  return result;
}

console.log(guess(''))


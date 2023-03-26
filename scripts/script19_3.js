/**Задание 3.
 * Напишите функцию, которая создает пустой объект, но без прототипа. */

function createObject() {
  const emptyObj = Object.create(null);
  return emptyObj;
}

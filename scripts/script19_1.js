/**Задание 1.
 * Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение*/

function objectKeysValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log("key = " + key + ", value = " + obj[key]);
    }
  }
}



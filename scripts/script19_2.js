/**Задание
 * 2.Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

 function objectValues(str, obj) {
    return str in obj;
  }
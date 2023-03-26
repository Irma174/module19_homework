/* 1. Создаем пустой объект*/
const user = {};

/*2. Добавляем несколько свойств со значениями разных типов*/
user.name = "Petr";
user.surname = "Ivanov";
user.age = 18;
user.married = false;
user.position = "developer";
user.nativeCity = "S.Petersburg";
user.pet = "ket";

/*3. Добавляем метод*/
user.hello = function () {
  console.log(`Привет, меня зовут ${this.name}! Мне ${this.age}.`);
};

/*4. Удаляем одно из созданных свойств*/
delete user.pet;



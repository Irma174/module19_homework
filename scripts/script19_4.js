// Реализация консольного приложения на прототипах

/**
 * Родительская функция создания электроприбора, с методами включения/выключения прибора из розетки
 * @param {string} name название электроприбора
 * @param {number} power мощность элктроприбора, Вт
 */

function Electro(name, power) {
  this.name = name;
  this.power = power;
  this.onOff = false;
  this.timeWork = 0;
  this.timeOn = 0;
  this.timeOff = 0;
  this.on = function () {
    if (this.onOff == false) {
      this.onOff = true;
      this.timeOn = +new Date();
      console.log(`${this.name} включен`);
    }
  };
  this.off = function () {
    if (this.onOff == true) {
      this.onOff = false;
      this.timeOff = +new Date();
      this.workingTime = this.timeOff - this.timeOn;
      console.log(
        `${this.name} выключен. Время работы ${convertingMS(this.workingTime)}`
      );
    }
  };
}
/**
 * Информация-презентация созданного электроприбора.
 * Выводит в консоль название и мощность электроприбора в Вт
 */

Electro.prototype.present = function () {
  console.log(
    `Электроприбор ${this.name}. Потребляемая мощность ${this.power} Вт`
  );
};

function convertingMS(ms) {
  let hour, minute, second;
  second = Math.floor(ms / 1000);
  minute = Math.floor(second / 60);
  secondFinal = second % 60;
  hour = Math.floor(minute / 60);
  minuteFinal = minute % 60;
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minuteFinal < 10) {
    minuteFinal = "0" + minuteFinal;
  }
  if (secondFinal < 10) {
    secondFinal = "0" + secondFinal;
  }
  return hour + ":" + minuteFinal + ":" + secondFinal;
}

/**
 * Функция расчета энергопотребления, кВт/час
 * @param {number} power мощность элктроприбора, Вт
 * @return {number} energyPover  - энергопотребление прибора, кВт/час
 */

Electro.prototype.consumptionPower = function () {
  this.energyPover = (this.power / 1000) * 1;
  console.log(
    `Электроприбор ${this.name} во время работы потребляет ${this.energyPover} кВт/ч электроэнергии`
  );
  return this.energyPover;
};

/**
 * Функция расчета стоимости потребления энергии электроприбором
 * @param {number} power мощность элктроприбора, Вт
 * @param {number} timeWork время работы, минут
 * @param {number} price цена, по которой вы покупаете 1 кВт/ч электроэнергии, рублей
 * @return {number} pricePower стоимость, которую вы заплатите за электроэнергию за время работы данного электроприбора
 */
Electro.prototype.priceConsumptionPower = function (timeWork, price) {
  this.power = this.consumptionPower();
  this.timeWork = timeWork / 60;
  this.price = price;
  this.pricePower = this.power * this.timeWork * this.price;
  console.log(
    `За ${timeWork} минут работы электроприбора ${this.name} необходимо заплатить ${this.pricePower} рублей`
  );
  return this.pricePower;
};

/**
 * Дочерняя от Electro функция создания электроприбора для дома, с родительскими методами включения/выключения прибора из розетки
 * @param {string} name название электроприбора
 * @param {number} power мощность элктроприбора, Вт
 */
function HomeElectro(name, power) {
  this.target = "Электроприбор для дома";
  this.name = name;
  this.power = power;
}

HomeElectro.prototype = new Electro();

/**
 * Информация-презентация созданного электроприбора.
 * Выводит в консоль названи,принадлежность и мощность электроприбора в Вт
 */
HomeElectro.prototype.present = function () {
  console.log(
    `Электроприбор ${this.name}, ${this.target}. Потребляемая мощность ${this.power} Вт`
  );
};

/**
 * Дочерняя от Electro функция создания электроприбора для кухни, с родительскими методами включения/выключения прибора из розетки
 * @param {string} name название электроприбора
 * @param {number} power мощность элктроприбора, Вт
 */
function KitchenElectro(name, power) {
  this.target = "Электроприбор для кухни";
  this.name = name;
  this.power = power;
}

KitchenElectro.prototype = new Electro();

/**
 * Информация-презентация созданного электроприбора.
 * Выводит в консоль названи,принадлежность и мощность электроприбора в Вт
 */
KitchenElectro.prototype.present = function () {
  console.log(
    `Электроприбор ${this.name}, ${this.target}. Потребляемая мощность ${this.power} Вт`
  );
};

const iron = new HomeElectro("утюг", 2000);
iron.present();
iron.priceConsumptionPower(60, 8);
iron.on();
console.log(iron);
setTimeout(() => {
  iron.off();
}, 6000);

const fridge = new KitchenElectro('холодильник', 5000);
fridge.present();
fridge.on();
setTimeout(() => {
    fridge.off();
  }, 8000);
  
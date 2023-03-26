/**
 * Родительский класс электроприбор, с методами включения/выключения прибора из розетки
 * @param {string} name название электроприбора
 * @param {number} power мощность элктроприбора, Вт
 */

class Electro {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.onOff = false;
    this.timeWork = 0;
    this.timeOn = 0;
    this.timeOff = 0;
  }
  on() {
    if (this.onOff == false) {
      this.onOff = true;
      this.timeOn = +new Date();
      console.log(`${this.name} включен`);
    }
  }
  off() {
    if (this.onOff == true) {
      this.onOff = false;
      this.timeOff = +new Date();
      this.workingTime = this.timeOff - this.timeOn;
      console.log(
        `${this.name} выключен. Время работы ${convertingMS(this.workingTime)}`
      );
    }
  }
  /**
   * Информация-презентация созданного электроприбора.
   * Выводит в консоль название и мощность электроприбора в Вт
   */
  present() {
    console.log(
      `Электроприбор ${this.name}. Потребляемая мощность ${this.power} Вт`
    );
  }
  /**
   * Функция расчета энергопотребления, кВт/час
   * @param {number} power мощность элктроприбора, Вт
   * @return {number} energyPover  - энергопотребление прибора, кВт/час
   */
  consumptionPower() {
    this.energyPover = (this.power / 1000) * 1;
    console.log(
      `Электроприбор ${this.name} во время работы потребляет ${this.energyPover} кВт/ч электроэнергии`
    );
    return this.energyPover;
  }
  /**
   * Функция расчета стоимости потребления энергии электроприбором
   * @param {number} power мощность элктроприбора, Вт
   * @param {number} timeWork время работы, минут
   * @param {number} price цена, по которой вы покупаете 1 кВт/ч электроэнергии, рублей
   * @return {number} pricePower стоимость, которую вы заплатите за электроэнергию за время работы данного электроприбора
   */
  priceConsumptionPower(timeWork, price) {
    this.power = this.consumptionPower();
    this.timeWork = timeWork / 60;
    this.price = price;
    this.pricePower = this.power * this.timeWork * this.price;
    console.log(
      `За ${timeWork} минут работы электроприбора ${this.name} необходимо заплатить ${this.pricePower} рублей`
    );
    return this.pricePower;
  }
}

/**
 * Функция конвертации миллисекунд в часы/минуты/секунды
 * @param {number} ms
 * @returns возвращыет время в формате 00:00:00, где перое значени - количество часов, второе - количество минут, третье - количество секунд
 */
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
 * Дочерний от Electro класс электроприбора для дома, с родительскими методами включения/выключения прибора из розетки
 * @param {string} name название электроприбора
 * @param {number} power мощность элктроприбора, Вт
 */
class HomeElectro extends Electro {
  constructor(name, power) {
    super(name, power);
    this.target = "Электроприбор для дома";
  }
  /**
   * Информация-презентация созданного электроприбора.
   * Выводит в консоль названи,принадлежность и мощность электроприбора в Вт
   */
  present() {
    console.log(
      `Электроприбор ${this.name}, ${this.target}. Потребляемая мощность ${this.power} Вт`
    );
  }
}

/**
 * Дочерний от Electro класс электроприбора для кухни, с родительскими методами включения/выключения прибора из розетки
 * @param {string} name название электроприбора
 * @param {number} power мощность элктроприбора, Вт
 */
class KitchenElectro extends Electro {
  constructor(name, power) {
    super(name, power);
    this.target = "Электроприбор для кухни";
  }

  /**
   * Информация-презентация созданного электроприбора.
   * Выводит в консоль названи,принадлежность и мощность электроприбора в Вт
   */
  present() {
    console.log(
      `Электроприбор ${this.name}, ${this.target}. Потребляемая мощность ${this.power} Вт`
    );
  }
}

const hoover = new HomeElectro("пылесос", 4000);
hoover.present();
hoover.priceConsumptionPower(60, 8);
hoover.on();
console.log(hoover);
setTimeout(() => {
  hoover.off();
}, 6000);

const teapot = new KitchenElectro("чайник", 1500);
teapot.present();
teapot.priceConsumptionPower(60, 8);
teapot.on();
setTimeout(() => {
  teapot.off();
}, 8000);

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/
let API = "https://rickandmortyapi.com/api/character";
let block1 = $(".block1");
let list = $(".list");
function readRandMname() {
  fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      list.empty();
      data.results.forEach((elem) => {
        list.append(
          `<div class="listLi"><li>${elem.name}</li><img src="${elem.image}" alt=""></div>`
        );
      });
    });
}
readRandMname();
/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/
/* <img src="${elem.image}" alt=""></img> */

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/
let API2 = "http://localhost:8000/characters";
let block2 = $(".block2");
let list2 = $(".list2");
function readRandMnameImg() {
  fetch(API2)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((elem) => {
        list2.append(`<li>${elem.name}</li><img src="${elem.image}" alt="">`);
      });
    });
}

readRandMnameImg();

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.
*/

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

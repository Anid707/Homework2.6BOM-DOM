// location - объект для работы с адресной строкой (адрес страницы, дополнительные параметры в URL);
// navigator - объект для работы с браузером (название, версия, операционная система, текущее местоположение);
// history - объект для навигации и сохранения состояний (перемещение по разделам сайта, кнопки вперёд, назад);
// screen - информация о дисплее (размеры экрана, разрешение)


// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.

// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)

console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href} `);
location.reload;

// Задание 2
// В файле html есть разметка:

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// Вывести в консоль каждое из имен (содержимое каждого li).

// ПОДСКАЗКИ
// 1) C помощью метода document.querySelectorAll найдите на странице все пункты списка (li) и запишите в переменную. У вас получится html-коллекция (массив). 
// 2) Обойдите коллекцию с помощью forEach и для каждого li вывкдите в консоль текстовое содержимое (innerText)
const allLi = document.querySelectorAll("li");
//console.log(allLi);
allLi.forEach(li => {
    console.log(li.innerText);
})

// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
let paragraph = document.createElement("p");
paragraph.innerText = "Lorem ipsum";
paragraph.style.fontSize = "36px";
paragraph.style.fontWeight = "bold";
document.body.appendChild(paragraph);

// Задание 5
// Написать в html тег заголовка с текстом "Сегодня:" 
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.
let heading = document.createElement("h1");
heading.innerText = "Сегодня: ";
heading.style.fontWeight = "bold";
document.body.appendChild(heading);

const date = document.createElement("p");
document.body.appendChild(date);
let dateToday = new Date();
date.innerText = dateToday.getDate() + "/" + (dateToday.getMonth()+1) + "/" + dateToday.getFullYear();
date.style.fontWeight = "bold";


// Задание 6
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
let tagFunc = (tag, color, text) => {
    const tagName = document.createElement(tag);
    tagName.style.color = color;
    tagName.innerText = text;
    document.body.appendChild(tagName);
}
tagFunc("h2", "red", "Red Heading");
tagFunc("p", "yellow", "Yellow paragraph");
tagFunc("button", "blue", "Blue button");

// Задание 7
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
let select = document.querySelector("#year");
let option0 = document.createElement("option");
option0.innerText = "Year";
option0.setAttribute("value", "");
option0.setAttribute("hidden", null);
select.appendChild(option0);
for(let i = 1960; i <= 2020; i++){
    let option = document.createElement("option");
    option.innerText = i;
    option.setAttribute("value", String(i));
    select.appendChild(option);
}

// Задание 8
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

const clients = [
{name: "Женя", order: true},
{name: "Кристина", order: true},
{name: "Павел", order: false},
{name: "Виолетта", order: false},
{name: "Костя", order: true}
]

// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
const list = document.getElementById("list1");
clients.forEach(object => {
    let li = document.createElement("li");
    if (object.order){
        li.innerText = `Клиент ${object.name} оплатил заказ`;
    } else {
        li.innerText = `Клиент ${object.name} отменил заказ`;
    }
    list.appendChild(li);
})



// Задание 9
// Есть массив ссылок:

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
const div = document.createElement("div");
div.style.background = "yellow";
div.style.padding = "30px";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.gap = "10px";
div.style.width = "23%";
document.body.appendChild(div);

linksArr.forEach(element => {
    let link = document.createElement("a");
    link.setAttribute("href", element);
    link.target = "_blank";
    link.innerText = element;
    div.appendChild(link);
})

// Задание 10
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li
const elementRemoved = document.querySelectorAll(".forRemove");
console.log(elementRemoved);
elementRemoved.forEach(element => {
    element.remove();
})

// Задание 11*
// Создать массив объектов с полями name, age. Например:

const users = [
{name: 'Mark', age: 12},
{name: 'Olga', age: 30},
{name:'Tom', age: 25},
{name:'Den', age: 43}
]

// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.
const table = document.querySelector("#table");
table.style.textAlign = "center";
table.style.width = "25%";
const trHeader = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
th1.innerText = "Username";
th2.innerText = "Age";
th1.style.border = "1px solid black";
th2.style.border = "1px solid black";
trHeader.append(th1, th2);
table.appendChild(trHeader);

users.forEach(object => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerText = object.name;
    td1.style.color = "red";
    td1.style.border = "1px solid black";
    td1.style.background = "blueviolet";
    td2.innerText = object.age;
    td2.style.color = "blue";
    td2.style.border = "1px solid black";
    td2.style.background = "yellow";
    tr.append(td1, td2);
    table.appendChild(tr);
})


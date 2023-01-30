// console.log("Hello, world!")
//*-------------------------------------------------------

// const list = document.getElementById("list");

// // console.log(list);

// if (list) {
//     console.log(list.children);
// }
// else {
//     console.log("lthis element doesn't exist" );
// }

//*-------------------------------------------------------

// - Урок 11
//     1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js
        
//         ```jsx
        // const conteyner = document.getElementById("conteyner");
        
        // const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
//         ```
//     Показати як че робиться через **map** та **reduce**

/*
    1. Створити контейнер для списку - тег ul
    2. Створити цикл для перебoру елементів масиву
    3. Створити тег li 
    4. Записати текст з масиву у тег li
    5. Помістити li всередину списку ul
    6. Помістити список ul на сторінку
*/

// const list = document.createElement("ul");

// for (const technology of technologies) {
//     const li = document.createElement("li");
//     console.log(technology);
//     li.textContent = technology;
//     list.append(li);
// }
// conteyner.append(list);

// const listContent = technologies
//     .map((technology) => `<li>${technology}</li>`)
//     .join(" ");

// // //    list.append(listContent);
// list.insertAdjacentHTML("beforeend", listContent);
// conteyner.append(list);

// console.log(listContent);

//*--reduce1-------------

// const listContent = technologies
//     .reduce(
//         (acc, technology) => (acc += `<li>${technology}</li>`), ""
// );
// list.insertAdjacentHTML("beforeend", listContent);
// conteyner.append(list);

//*--reduce2----------------

// const listContent = technologies
//     .reduce(
//         (acc, technology) => (acc += `<li>${technology}</li>`), ""
// );
// const list = `<ul>${listContent}</ul>`

// conteyner.insertAdjacentHTML("beforeend", list);

// console.dir(document.body);

//* 2. Створити кілька кнопок на основі масива з обєктами використовуючи createElement

const container = document.getElementById("container");
const colors = [
  {
    label: "red",
    color: "#FF0000",
  },
  {
    label: "green",
    color: "#00FF00",
  },
  {
    label: "blue",
    color: "#0000FF",
  },
  {
    label: "yellow",
    color: "#FFFF00",
  },
];

/*
    1. Перебрати масив кольорів за допомогою циклу
    2. Створити кнопку 
    3. Задамо колір фону кнопки
    4. Задамо текст кнопки
    5. Додаємо кнопку в документ
*/

colors.forEach(({ label, color }) => {
    const buttonEl = document.createElement("button");
    buttonEl.style.backgroundColor = color;
    buttonEl.textContent = label;
    container.appendChild(buttonEl);
});
 
// colors.forEach(({ label, color }) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.style.backgroundColor = color;
//   buttonEl.classList.add("indents");
//   //   buttonEl.style.margin = "5px"
//   buttonEl.textContent = label;
//   container.appendChild(buttonEl);
// });
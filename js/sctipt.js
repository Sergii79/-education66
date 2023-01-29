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
        const conteyner = document.getElementById("conteyner");
        
        const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
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

const list = document.createElement("ul");

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

const listContent = technologies
    .reduce(
        (acc, technology) => (acc += `<li>${technology}</li>`), ""
);
list.insertAdjacentHTML("beforeend", listContent);
conteyner.append(list);
const App = {
    data() {
        return {
            // menu: ["Главная", "Модели", "Контакты", "Заказать модель"],
            order: "Заказать модель",
            contacts: "Контакты",
            models: "Модели",
            main: "Главная",
            // subMenu: ["Диоды", "Транзисторы", "Трансформаторы", "Операционные усилители"]
        }
    },
    methods: {
        // updatePage(item) {
        //     for (const temp in menu) {

        //     }
        //     item.classList.add("active")
        // }
    }
}



Vue.createApp(App).mount("#app");

// function menuPlugin(activeChild) {
//     const children = document.querySelectorAll(".check");

//     children[activeChild].classList.add("active");

//     for(const check of children) {
//         check.addEventListener("click", () => {
//             clearActiveClasses();

//             check.classList.add("active");
//         });
//     }

//     function clearActiveClasses() {
//         children.forEach((check) => {
//             check.classList.remove("active");
//         });
//     }
// }

// menuPlugin(0);
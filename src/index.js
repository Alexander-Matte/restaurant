import { init } from "./js_modules/init";
import { home_init } from "./js_modules/home_init";
import { menu_init } from "./js_modules/menu_init";
import { contact_init } from "./js_modules/contact_init";

init();




const homeTab = document.querySelector(".home-tab");
const menuTab = document.querySelector(".menu-tab");
const contactTab = document.querySelector(".contact-tab");

homeTab.addEventListener("click", () => {
    home_init();
})


menuTab.addEventListener("click", () => {
    menu_init();

})

contactTab.addEventListener("click", () => {
    contact_init();

})
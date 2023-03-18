import { generateContentHTML } from "./init";
const contentSection = document.querySelector("#content-section")

const homeContent = generateContentHTML();



export function home_init () {
    contentSection.innerHTML = homeContent;
};
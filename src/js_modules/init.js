const headerSection = document.querySelector("#header-section");
const contentSection = document.querySelector("#content-section");
const footerSection = document.querySelector("#footer-section");

export function generateHeaderHTML () {  
    
    return `<div class="row w-75">
                <div class="title d-flex flex-column align-items-center">
                    <h1>Wing World</h1>
                    <div class="tabs d-flex gap-5">
                        <div class="home-tab">Home</div>
                        <div class="menu-tab">Menu</div>
                        <div class="contact-tab">Contact</div>
                    </div>
                </div>
            </div>`;



}

export function generateContentHTML () {

    return `<div class="home-content d-flex justify-content-center">
                <div class="row w-75">
                <div class="about-us col-6 d-flex align-items-center">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt dolorum saepe laboriosam ab quisquam dolore similique ut. Voluptates harum, pariatur, impedit officia ullam quos dolorum et rerum nihil quisquam vitae autem odit earum amet soluta ipsum iusto nesciunt! Odit ullam eveniet totam temporibus sapiente, sequi mollitia impedit velit veniam.
                    </p>
                </div>

                <div class="main-img-wrapper col-6">
                    <img class="main-img img-fluid rounded" src="https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="">
                </div>
                </div>
            </div>`


}

export function generateFooterHTML () {
    return `<div class="d-flex justify-content-center gap-5">
                <div class="terms">Created by Alex Matte</div>
                <div class="git-hub">Git Hub</div>
            </div>`
}

export function init () {
    headerSection.innerHTML = generateHeaderHTML();
    contentSection.innerHTML = generateContentHTML();
    footerSection.innerHTML = generateFooterHTML();

}

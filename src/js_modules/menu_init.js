const contentSection = document.querySelector("#content-section");

function createFoodCard (num) {
    let output = "";

    for (let index = 0; index < num; index++) {
        output += `<div class="menu-item col-md-4 col-sm-6 col-xs-12">
                    <img src="https://via.placeholder.com/200x150.png?text=food ${index+1}" alt="Item ${index+1}">
                    <div>
                        <h3>Food Item ${index+1}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <span class="price">$10.99</span>
                    </div>
                </div>`
    }
    return output;
}

function createDrinkCard (num) {
    let output = "";

    for (let index = 0; index < num; index++) {
        output += ` <div class="menu-item col-md-4 col-sm-6 col-xs-12">
                        <img src="https://via.placeholder.com/200x150.png?text=Drink ${index+1}" alt="Drink ${index+1}">
                        <div>
                            <h3>Drink ${index+1}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <span class="price">$2.99</span>
                        </div>
                    </div>`
    }
    return output;
}

const menuContent = `   <div class="menu-content w-75">
                            <div class="row mt-5 mb-5">
                                <h2 class="text-center">Food</h2>
                                ${createFoodCard(9)}
                            </div>


                            <div class="row mt-5 mb-5">
                                <h2 class="text-center">Drinks</h2>
                                ${createDrinkCard(9)}
                            </div>
                        </div>`




export function menu_init () {
    contentSection.innerHTML = menuContent;

    
}


const contentSection = document.querySelector("#content-section")

const menuContent = `   <div class="menu-content">
                            <div class="row mt-5 mb-5">
                            <h2 class="text-center">Food</h2>
                            <div class="menu-item col-md-4 col-sm-6 col-xs-12">
                                <img src="https://via.placeholder.com/200x150.png?text=Item+1" alt="Item 1">
                                <div>
                                    <h3>Item 1</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span class="price">$10.99</span>
                                </div>
                            </div>

                            <div class="menu-item  col-md-4 col-sm-6 col-xs-12">
                                <img src="https://via.placeholder.com/200x150.png?text=Item+2" alt="Item 2">
                                <div>
                                    <h3>Item 2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span class="price">$12.99</span>
                                </div>
                            </div>

                            <div class="menu-item col-md-4 col-sm-6 col-xs-12">
                                <img src="https://via.placeholder.com/200x150.png?text=Item+3" alt="Item 3">
                                <div>
                                    <h3>Item 3</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span class="price">$8.99</span>
                                </div>
                            </div>
                            </div>

                            <div class="row mt-5 mb-5">
                            <h2 class="text-center">Drinks</h2>
                            <div class="menu-item col-md-4 col-sm-6 col-xs-12">
                                <img src="https://via.placeholder.com/200x150.png?text=Drink+1" alt="Drink 1">
                                <div>
                                    <h3>Drink 1</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span class="price">$2.99</span>
                                </div>
                            </div>

                            <div class="menu-item col-md-4 col-sm-6 col-xs-12">
                                <img src="https://via.placeholder.com/200x150.png?text=Drink+2" alt="Drink 2">
                                <div>
                                    <h3>Drink 2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span class="price">$4.99</span>
                                </div>
                            </div>

                            <div class="menu-item col-md-4 col-sm-6 col-xs-12">
                                <img src="https://via.placeholder.com/200x150.png?text=Drink+2" alt="Drink 2">
                                <div>
                                    <h3>Drink 3</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span class="price">$1.99</span>
                                </div>
                            </div>
                            </div>
                        </div>`




export function menu_init () {
    contentSection.innerHTML = menuContent;

    
}


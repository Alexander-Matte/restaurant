const contentSection = document.querySelector("#content-section")

const contactContent = `<div class="contact-content">
                            <div class="row">
                                <div class="our-info text-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <h2 class="text-center">Contact Us</h2>
                                    <p>Location: 123 Wing Street</p>
                                    <p>Telephone: 1(234)567-8910</p>
                                    <p>Email: wing.world@gmail.com</p>
                                </div>

                                <div class="form-container d-flex justify-content-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <form id="contactForm" class="d-flex flex-column w-50" action="#" method="post">
                                        <h2>Write Us</h2>
                                        <label for="name">Name:</label>
                                        <input type="text" id="name" name="name" required><br>

                                        <label for="email">Email:</label>
                                        <input type="email" id="email" name="email" required><br>

                                        <label for="message">Message:</label>
                                        <textarea id="message" name="message" required></textarea><br>

                                        <input class="mt-2" type="submit" value="Submit">
                                    </form>
                                </div>
                            
                            </div>

                        </div>

`




export function contact_init () {
    contentSection.innerHTML = contactContent;

}


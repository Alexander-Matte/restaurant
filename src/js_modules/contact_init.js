const contentSection = document.querySelector("#content-section")

const contactContent = `<div class="contact-content d-flex flex-column align-items-center">
                            <h2>Contact Us</h2>
                            <form id="contactForm" class="d-flex flex-column" action="#" method="post">
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" required><br>

                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required><br>

                                <label for="message">Message:</label>
                                <textarea id="message" name="message" required></textarea><br>

                                <input class="mt-2" type="submit" value="Submit">
                            </form>
                        </div>

`




export function contact_init () {
    contentSection.innerHTML = contactContent;

}


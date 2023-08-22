import './contact.scss';

function Contact() {
    return (
        <div className="container">
            <div id="contact" className="d-flex flex-wrap-reverse">
                <div className="address col-12 col-md-6 p-2 ">
                    <h3>Our Office</h3>
                    <ul>
                        <li>Sega Parks <strong>4 </strong> km</li>
                        <li>Auditrite Ltd <strong>1 </strong> km</li>
                        <li>Local Investment Fund <strong>1.2 </strong> km</li>
                        <li>Starbucks Coffee <strong>2.4 </strong> km</li>
                        <li>Panfoods Co Ltd <strong>2 </strong> km</li>
                        <li>Eclipse PLC <strong>0.2 </strong> km</li>
                        <li>McQueen Consultancy Ltd  <strong>0.1</strong> km</li>
                        <li>Cosmedics Skin Clinic  <strong>0.05</strong> km</li>
                        <li>IBEX COMMODITIES LIMITED  <strong>0.08</strong> km</li>
                        <li>KANE TRADING LIMITED  <strong>0.08</strong> km</li>
                    </ul>
                </div>
                <div className="form-contact col-12 col-md-6 p-2 ">
                    <h3>CONTACT US</h3>
                    <form>
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" placeholder='Your name' name="name" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" placeholder='Your email' name="email" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Address:</label>
                            <input type="text" id="address" placeholder='Your address' name="address" required />
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" placeholder='Your message' rows="4" required></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div >
            </div >
        </div >
    )
}

export default Contact;

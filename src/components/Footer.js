const Footer = () => {
    return (<>
        <footer>
            <div className="f-title">
                <i className="pi pi-prime"></i>
                <p>S B SONS</p>
            </div>
            <div className="f-subtitle">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Incidunt consequuntur amet culpa cum itaque neque.</p>
            </div>
            <div className="f-icons flex justify-start">
                <i className="pi pi-amazon"></i>
                <i className="pi pi-facebook"></i>
                <i className="pi pi-discord"></i>
                <i className="pi pi-google"></i>
                <i className="pi pi-reddit"></i>
                <i className="pi pi-linkedin"></i>
            </div>
            <div className="f-links mt-6">
                <div className="grid grid-cols-4  gap-4">
                    <div>
                        <ul>
                            <li>About Us</li>
                            <li>Find Store</li>
                            <li>Locations</li>
                            <li>Blogs & News</li>
                            <li>Affiliate Service</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Informations</li>
                            <li>Help Center</li>
                            <li>Refund Queries</li>
                            <li>Shipping QnA</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Support</li>
                            <li>FAQs</li>
                            <li>Support</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Contact Us</li>
                            <li><i className="pi pi-comment" ></i>john@doe.com</li>
                            <li><i className="pi pi-mobile" ></i>0123456789</li>
                            <li><i className="pi pi-home" ></i>213 Lane, London, United Kingdom</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="f-copy flex justify-between items-center">
                <p>@Copyright @ 2023</p>
                <p>Created By Chirag Suthar</p>
            </div>
        </footer>
    </>);
}

export default Footer;
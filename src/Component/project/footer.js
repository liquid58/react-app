import {Link} from 'react-router-dom';
const Footer = () =>{
    return(
<div>
<div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
            <div className="row pt-5">
              <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Get In Touch</h4>
                <p><i className="fa fa-map-marker-alt mr-2" />123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
                <p><i className="fa fa-envelope mr-2" />info@example.com</p>
                <div className="d-flex justify-content-start mt-4">
                 <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} to="#"><i className="fab fa-twitter" /></Link>
                 <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} to="#"><i className="fab fa-facebook-f" /></Link>
                 <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} to="#"><i className="fab fa-linkedin-in" /></Link>
                 <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} to="#"><i className="fab fa-instagram" /></Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                 <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right mr-2" />Home</Link>
                 <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right mr-2" />About Us</Link>
                 <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right mr-2" />Our Services</Link>
                 <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right mr-2" />Our Projects</Link>
                 <Link className="text-white" to="#"><i className="fa fa-angle-right mr-2" />Contact Us</Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Popular Links</h4>
                <div className="d-flex flex-column justify-content-start">
                 <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right mr-2" />Home</Link>
                 <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right mr-2" />About Us</Link>
                 <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right mr-2" />Our Services</Link>
                 <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right mr-2" />Our Projects</Link>
                 <Link className="text-white" to="#"><i className="fa fa-angle-right mr-2" />Contact Us</Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Newsletter</h4>
                <form action>
                  <div className="form-group">
                    <input type="text" className="form-control border-0" placeholder="Your Name" required="required" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control border-0" placeholder="Your Email" required="required" />
                  </div>
                  <div>
                    <button className="btn btn-lg btn-primary btn-block border-0" type="submit">Submit Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="container border-top border-secondary pt-5">
              <p className="m-0 text-center text-white">
                ©<Link className="text-white font-weight-bold" to="#">Your Site Name</Link>. All Rights Reserved. Designed by
               <Link className="text-white font-weight-bold" to="https://htmlcodex.com">HTML Codex</Link>
              </p>
            </div>
          </div>
          {/* Footer End */}
          {/* Back to Top */}
         <Link to="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></Link>
          {/* JavaScript Libraries */}
          {/* Contact Javascript File */}
          {/* Template Javascript */}
</div>
);
}
export default Footer;
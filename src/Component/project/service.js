import {Link} from 'react-router-dom';
const Service = () =>{
      return (
        <div>
          {/* Under Nav End */}
          {/* Page Header Start */}
          <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">Our Services</h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <Link className="btn btn-outline-primary" to>Home</Link>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <Link className="btn btn-outline-primary disabled" to>Our Services</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header Start */}
          {/* Services Start */}
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-6 pr-lg-5">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Awesome Services</h6>
                  <h1 className="mb-4 section-title">Awesome Interior Designing Services For Your Home</h1>
                  <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                  <Link to className="btn btn-primary mt-3 py-2 px-4">View More</Link>
                </div>
                <div className="col-lg-6 p-0 pt-5 pt-lg-0">
                  <div className="owl-carousel service-carousel position-relative">
                    <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                      <h3 className="flaticon-bedroom display-3 font-weight-normal text-primary mb-3" />
                      <h5 className="mb-3">Bedroom Design</h5>
                      <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos</p>
                    </div>
                    <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                      <h3 className="flaticon-kitchen display-3 font-weight-normal text-primary mb-3" />
                      <h5 className="mb-3">Kitchen Design</h5>
                      <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos</p>
                    </div>
                    <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                      <h3 className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3" />
                      <h5 className="mb-3">Bathroom Design</h5>
                      <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services End */}
          {/* Features Start */}
          <div className="container-fluid bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mt-5 py-5 pr-lg-5">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3">Why Choose Us?</h6>
                  <h1 className="mb-4 section-title">25+ Years Experience In The Interior Design Industry</h1>
                  <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                  <ul className="list-inline">
                    <li><h5><i className="far fa-check-square text-primary mr-3" />25+ Years Experience</h5></li>
                    <li><h5><i className="far fa-check-square text-primary mr-3" />Best Interior Design</h5></li>
                    <li><h5><i className="far fa-check-square text-primary mr-3" />Customer Satisfaction</h5></li>
                  </ul>
                  <Link to className="btn btn-primary mt-3 py-2 px-4">View More</Link>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                    <img className="h-100" src={process.env.PUBLIC_URL+"img/feature.jpg"} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Features End */}
          {/* Testimonial Start */}
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                    <img className="h-100" src={process.env.PUBLIC_URL+"img/testimonial.jpg"} alt="" />
                  </div>
                </div>
                <div className="col-md-7 py-5 pl-md-5">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3 pt-5">Testimonial</h6>
                  <h1 className="mb-4 section-title">What Our Clients Say</h1>
                  <div className="owl-carousel testimonial-carousel position-relative pb-5 mb-md-5">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid rounded-circle" src={process.env.PUBLIC_URL+"img/testimonial-1.jpg"} style={{width: '60px', height: '60px'}} alt="" />
                        <div className="ml-3">
                          <h5>Client Name</h5>
                          <i>Profession</i>
                        </div>
                      </div>
                      <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
                    </div>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid rounded-circle" src={process.env.PUBLIC_URL+"img/testimonial-2.jpg"} style={{width: '60px', height: '60px'}} alt="" />
                        <div className="ml-3">
                          <h5>Client Name</h5>
                          <i>Profession</i>
                        </div>
                      </div>
                      <p className="m-0">Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial End */}
          {/* Footer Start */}
    
        </div>
      );
    }
export default Service;
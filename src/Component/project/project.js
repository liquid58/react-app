import {Link} from 'react-router-dom';
const Project = () =>{
      return (
        <div>
          {/* Under Nav End */}
          {/* Page Header Start */}
          <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">Our Projects</h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <Link className="btn btn-outline-primary" to>Home</Link>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <Link className="btn btn-outline-primary disabled" to>Our Projects</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header Start */}
          {/* Projects Start */}
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col text-center mb-4">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Projects</h6>
                  <h1 className="mb-4">Some Of Our Awesome Interior Designing Projects</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center mb-2">
                  <ul className="list-inline mb-4" id="portfolio-flters">
                    <li className="btn btn-outline-primary m-1 active" data-filter="*">All</li>
                    <li className="btn btn-outline-primary m-1" data-filter=".first">Complete</li>
                    <li className="btn btn-outline-primary m-1" data-filter=".second">Running</li>
                    <li className="btn btn-outline-primary m-1" data-filter=".third">Upcoming</li>
                  </ul>
                </div>
              </div>
              <div className="row mx-1 portfolio-container">
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
                  <div className="position-relative overflow-hidden">
                    <div className="portfolio-img d-flex align-items-center justify-content-center">
                      <img className="img-fluid" src={process.env.PUBLIC_URL+"img/portfolio-1.jpg"} alt="" />
                    </div>
                    <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                      <h4 className="text-white mb-4">Project Name</h4>
                      <div className="d-flex align-items-center justify-content-center">
                        <Link className="btn btn-outline-primary m-1" to>
                          <i className="fa fa-link" />
                        </Link>
                        <Link className="btn btn-outline-primary m-1" to="img/portfolio-1.jpg" data-lightbox="portfolio">
                          <i className="fa fa-eye" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
                  <div className="position-relative overflow-hidden">
                    <div className="portfolio-img d-flex align-items-center justify-content-center">
                      <img className="img-fluid" src={process.env.PUBLIC_URL+"img/portfolio-2.jpg"} alt="" />
                    </div>
                    <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                      <h4 className="text-white mb-4">Project Name</h4>
                      <div className="d-flex align-items-center justify-content-center">
                        <Link className="btn btn-outline-primary m-1" to>
                          <i className="fa fa-link" />
                        </Link>
                        <Link className="btn btn-outline-primary m-1" to="img/portfolio-2.jpg" data-lightbox="portfolio">
                          <i className="fa fa-eye" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
                  <div className="position-relative overflow-hidden">
                    <div className="portfolio-img d-flex align-items-center justify-content-center">
                      <img className="img-fluid" src={process.env.PUBLIC_URL+"img/portfolio-3.jpg"} alt="" />
                    </div>
                    <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                      <h4 className="text-white mb-4">Project Name</h4>
                      <div className="d-flex align-items-center justify-content-center">
                        <Link className="btn btn-outline-primary m-1" to>
                          <i className="fa fa-link" />
                        </Link>
                        <Link className="btn btn-outline-primary m-1" to="img/portfolio-3.jpg" data-lightbox="portfolio">
                          <i className="fa fa-eye" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
                  <div className="position-relative overflow-hidden">
                    <div className="portfolio-img d-flex align-items-center justify-content-center">
                      <img className="img-fluid" src={process.env.PUBLIC_URL+"img/portfolio-4.jpg"} alt="" />
                    </div>
                    <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                      <h4 className="text-white mb-4">Project Name</h4>
                      <div className="d-flex align-items-center justify-content-center">
                        <Link className="btn btn-outline-primary m-1" to>
                          <i className="fa fa-link" />
                        </Link>
                        <Link className="btn btn-outline-primary m-1" to="img/portfolio-4.jpg" data-lightbox="portfolio">
                          <i className="fa fa-eye" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
                  <div className="position-relative overflow-hidden">
                    <div className="portfolio-img d-flex align-items-center justify-content-center">
                      <img className="img-fluid" src={process.env.PUBLIC_URL+"img/portfolio-5.jpg"} alt="" />
                    </div>
                    <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                      <h4 className="text-white mb-4">Project Name</h4>
                      <div className="d-flex align-items-center justify-content-center">
                        <Link className="btn btn-outline-primary m-1" to>
                          <i className="fa fa-link" />
                        </Link>
                        <Link className="btn btn-outline-primary m-1" to="img/portfolio-5.jpg" data-lightbox="portfolio">
                          <i className="fa fa-eye" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
                  <div className="position-relative overflow-hidden">
                    <div className="portfolio-img d-flex align-items-center justify-content-center">
                      <img className="img-fluid" src={process.env.PUBLIC_URL+"img/portfolio-6.jpg"} alt="" />
                    </div>
                    <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                      <h4 className="text-white mb-4">Project Name</h4>
                      <div className="d-flex align-items-center justify-content-center">
                        <Link className="btn btn-outline-primary m-1" to>
                          <i className="fa fa-link" />
                        </Link>
                        <Link className="btn btn-outline-primary m-1" to="img/portfolio-6.jpg" data-lightbox="portfolio">
                          <i className="fa fa-eye" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Projects End */}
          {/* Footer Start */}
   
        </div>
      );
    }
export default Project;